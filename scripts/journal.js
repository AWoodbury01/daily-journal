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
        // Print array of journal entries to the DOM
        entriesArray.push(journalEntry(entryDateValue,conceptValue, textValue, moodValue))
        // Print submitted entry to the DOM
        printJournalEntries(entriesArray)
        // Event listener for submit
        document.getElementById('journal-submit-btn').addEventListener('submit', entriesArray)

        fetch("http://localhost:3000/entries", {
            method: 'POST',
            body: JSON.stringify({entriesArray})
        }) // Fetch from the API
        .then(entries => entries.json())  // Parse as JSON
        .then(journalData => {
        
        console.table(journalData)
    })
    }
})

// Clear button
// .reset for forms
// .remove for others