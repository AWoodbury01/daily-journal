//   function createNewJournalEntry(date, concepts, entry, mood){
//       const newEntry = {
//           dateofEntry: `${date}`,
//           conceptsCovered: `${concepts}`,
//           newJournalEntry: `${entry}`,
//           dailyMood: `${mood}`
//       }
//       return newEntry;
//   }
  
//   const journalEntry = (date, concepts, entry, mood) => {
//     let journalComponent = "",
//     `<div class="journalEntry">
//         <h1>${date}</h1>
//         <h2>Concepts Covered</h2>
//         <section>${concepts}</section>
//         <h2>Journal Entry</h2>
//         <article>${entry}</article>
//         <h2>Mood</h2>
//         <section>${mood}</section>
//     </div>`
//     return journalComponent;
    
//     let printToDailyJournal = document.querySelector(".journalEntry").innerHTML +=
//     entriesArray.push() 
    
//   }

//   const entriesArray = [];

//   createNewJournalEntry("4/17/2020", "Maker and doer functions", "Today I've been working on my daily journal. My goal is combining my personal website with the daily journal as a page on my website", "I'm confident")

//   console.log()

// Array of entries
const entriesArray = [];



//Function that fills in journal entry information
function journalEntry(entryDate, conceptLearned, journalText, mood){
    const newEntry = {
            date: `${entryDate}`,
            concept: `${conceptLearned}`,
            entry: `${journalText}`,
            mood: `${mood}`
    }
    return newEntry;
}

// Function that creates HTML structure
const makeJournalEntryComponent = (journalEntry) => {
        return `
        <div class="journalEntry">
            <h2>${journalEntry.date}</h2>
            <br>
            <h4>Concepts Covered</h4>
            <p>${journalEntry.conceptLearned}</p>
            <h4>Journal Entry</h3>
            <p>${journalEntry.journalText}</p>
            <h3>Mood</h3>
            <section>${journalEntry.mood}</section>
        </div>`
  }

//Manual push
  entriesArray.push(journalEntry("4/17/2020", "Maker and doer functions", "Today I've been working on my daily journal. My goal is combining my personal website with the daily journal as a page on my website", "I'm confident"))

//Function that prints journal entries to the DOM
const printJournalEntries = (entries) => {
    // for (singleEntry of entriesArray) {
    //     let domEnter = makeJournalEntryComponent(singleEntry)
  
    //     document.querySelector(".entryLog").innerHTML += domEnter
    // }
    //For loop that goes through the array of journal entries and prints
    for (let i = 0; i < entriesArray.length; i++) {
        let domEnter = makeJournalEntryComponent(entries[i])
        document.querySelector(".entryLog").innerHTML += domEnter
    }
}


printJournalEntries(entriesArray)


// const capturedEntry = {
//     date: dateValue,
//     concept: conceptValue,
//     entry: entryValue,
//     mood: moodValue
// }

