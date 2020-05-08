// Daily Journal nav button event listener
document.querySelector("#daily-journal").addEventListener("click", function () {
  document.querySelector("#content-container").innerHTML = journalContainer();
});



    // Function that fills in journal entry information
    function journalEntry(entryDate, conceptLearned, journalText, mood) {
      const newEntry = {
        date: `${entryDate}`,
        concept: `${conceptLearned}`,
        entry: `${journalText}`,
        mood: `${mood}`,
      };
      return newEntry;
      }
  


// Daily Journal submit button event listener
document
  .querySelector("#content-container")
  .addEventListener("click", function () {
    // Form values
    // Journal date
    const entryDateValue = document.querySelector("#journal-date").value;
    // Journal concept
    const conceptValue = document.querySelector("#concepts-covered").value;
    // Journal Text
    const textValue = document.querySelector("#journal-entry").value;
    // Journal Mood
    const moodValue = document.querySelector("#mood-form").value;
    
    // Entry object
    const entryObject = {
      concept: conceptValue,
      date: entryDateValue,
      entry: textValue,
      mood: moodValue
    }

    // Submit button command
    if (event.target.id === "journal-submit-btn") {
    // Clear the printing area
    document
    .querySelector("#journal-printing-area")
    .innerHTML += ""
      
      // Post statement
      fetch("http://localhost:3000/entries", {
        method: "POST",
        header: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(entryObject),
      
        })
        .then(function(){
        
        // fetch new results from json
        fetch("http://localhost:3000/entries")
        .then(r => r.json)
        .then(entries => {
        
        entries.forEach(entry => {
        // Print submitted entry to the DOM
          document
          .querySelector("#journal-printing-area")
          .innerHTML +=
          entryPrinter(entry)
        })})})}})