// Daily Journal nav button event listener
document.querySelector("#daily-journal").addEventListener("click", function(){    
    document.querySelector("#content-container").innerHTML = journalContainer()
})

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


// Daily Journal submit button event listener
document.querySelector("#content-container").addEventListener("click", function(){
    // Form values
    // Journal date
    let entryDateValue = document.querySelector("#journal-date").value
    // Journal concept
    let conceptValue = document.querySelector("#concepts-covered").value
    // Journal Text
    let textValue = document.querySelector("#journal-entry").value
    // Journal Mood
    let moodValue = document.querySelector("#mood-form").value

    // Submit button command
    if (event.target.id === "journal-submit-btn") {
        entriesArray.push(journalEntry(entryDateValue,conceptValue, textValue, moodValue))
        
        // console.log(entriesArray)

        printJournalEntries(entriesArray)
        
    }
})

// Clear button
// .reset for forms
// .remove for others

// entriesArray.push(journalEntry()
//Manual push
// entriesArray.push(journalEntry("4/17/2020", "Maker and doer functions", "Today I've been working on my daily journal. My goal is combining my personal website with the daily journal as a page on my website", "I'm confident"))

fetch("http://localhost:3000/entries") // Fetch from the API
    .then(entries => entries.json())  // Parse as JSON
    .then(journalEntries => {
        // What should happen when we finally have the array?
        console.table(journalEntries)
    })