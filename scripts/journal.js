  function createNewJournalEntry(date, concepts, entry, mood){
      const newEntry = {
          dateofEntry: `${date}`,
          conceptsCovered: `${concepts}`,
          newJournalEntry: `${entry}`,
          dailyMood: `${mood}`
      }
      return newEntry;
  }
  
  const journalEntry = (date, concepts, entry, mood) => {
    `<div class="journalEntry">
        <h1>${date}</h1>
        <h2>Concepts Covered</h2>
        <section>${concepts}</section>
        <h2>Journal Entry</h2>
        <article>${entry}</article>
        <h2>Mood</h2>
        <section>${mood}</section>
    </div>`
    
    let printToDailyJournal = document.querySelector(".journalEntry").innerHTML += 
    
  }

  const entriesArray = [];

  createNewJournalEntry("4/17/2020", "Maker and doer functions", "Today I've been working on my daily journal. My goal is combining my personal website with the daily journal as a page on my website", "I'm confident")

  console.log()