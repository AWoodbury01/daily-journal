// Daily Journal nav button event listener
document.querySelector("body").addEventListener("click", function () {
  if (event.target.id === "daily-journal") {
    document.querySelector("#content-container").innerHTML = journalContainer();
    // fetch new results from json
    fetch("http://localhost:3000/entries")
      .then((r) => r.json())
      .then((entries) => {
        // Clear the printing area
        document.querySelector("#journal-printing-area").innerHTML = "";
  
        entries.forEach((entry) => {
          // Print submitted entry to the DOM
          document.querySelector(
            "#journal-printing-area"
          ).innerHTML += entryPrinter(entry);
        });
      });  
  }
});

// Home nav button event listener
document.querySelector("body").addEventListener("click", function (){
  if (event.target.id === "home-btn") {
    document
    .querySelector("#content-container")
    .innerHTML = splashContainer()
  }
})


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

    // Submit button command
    if (event.target.id === "journal-submit-btn") {
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
      mood: moodValue,
    };

      
      // Post statement
      fetch("http://localhost:3000/entries", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(entryObject),
      }).then(function () {
        // Print entry forms
        document.querySelector(
          "#content-container"
        ).innerHTML = journalContainer();

        // fetch new results from json
        fetch("http://localhost:3000/entries")
          .then((r) => r.json())
          .then((entries) => {
            // Clear the printing area
            document.querySelector("#journal-printing-area").innerHTML = "";

            entries.forEach((entry) => {
              // Print submitted entry to the DOM
              document.querySelector(
                "#journal-printing-area"
              ).innerHTML += entryPrinter(entry);
            });
          });
      });
    }
  });

// Delete button event listener
document
  .querySelector("#content-container")
  .addEventListener("click", function () {
    if (event.target.id.includes("delete-btn")) {
      // Split target ID
      const primaryKey = event.target.id.split("-")[2];
      // Delete fetch call
      fetch(`http://localhost:3000/entries/${primaryKey}`, {
        method: "DELETE",
      }).then(() => {
        // fetch new results from json
        fetch("http://localhost:3000/entries")
          .then((r) => r.json())
          .then((entries) => {
            // Clear the printing area
            document.querySelector("#journal-printing-area").innerHTML = "";
            entries.forEach((entry) => {

            // Print submitted entry to the DOM
            document.querySelector(
              "#journal-printing-area"
            ).innerHTML += entryPrinter(entry);
            })
          });
      });
    } else if (event.target.id.includes("edit-btn")){
      console.log("edit button clicked", event.target.id)
      // Split target ID
      const primaryKey = event.target.id.split("-")[2];
      // define card to replace
      const cardToReplace = document.querySelector(`#card-${primaryKey}`)
      
      console.log(entryPrinter(primaryKey))
      // fetch for edit card
      getSingleCard(primaryKey)
      .then(singleEntryData => {
        cardToReplace.innerHTML = buildEditForm(singleEntryData)
      })

  }});
