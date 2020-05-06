// Create the journal entry
const makeJournalEntryComponent = (journalEntry) => {
    return `
    
    <div class="card text-white bg-dark mb-3" style="max-width: 18rem;">
     <div class="card-header">${journalEntry.date}</div>
        <div class="card-body">
            <h5 class="card-title">${journalEntry.concept}</h5>
            <p class="card-text">${journalEntry.entry}</p>
            <p class="card-text">Mood: ${journalEntry.mood}</p>
    </div>`
}

//Function that prints journal entries to the DOM
const printJournalEntries = (entries) => {
    //For loop that goes through the array of journal entries and prints
    for (let i = 0; i < entriesArray.length; i++) {
        let domEnter = makeJournalEntryComponent(entries[i])
        document.querySelector("#entry-container").innerHTML += domEnter
    }
}

// Contents for Journal Entry forms page
function journalContainer(){
    return `
    <div id="entry-container" class="container p-4">
            <div class="container pb-3 d-flex justify-content-center"> 
                <h3>Daily Journal</h3>
            </div>
        <!-- All forms -->
        <form>
        
            <!-- Date -->
            <fieldset>
                <div class="form-group pb-3">
                    <label for="journalDate">Date of Entry</label>
                    <input type="date" name="journalDate" id="journal-date">
                </div>
            </fieldset>
            
            <!-- Concept form -->
            <fieldset>
                <div class="form-group pb-3">
                    <label for="concepts">Concepts Covered</label>
                    <input type="text" name="conceptsCovered" id="concepts-covered">
                </div>
            </fieldset>
            
            <!-- Journal entry form -->
            <fieldset>
                <div class="journalEntry pb-3">
                    <label for="journalEntry">Journal Entry</label>
                    <textarea class="form-control" id="journal-entry" rows="3"></textarea>
                </div>
            </fieldset>
            
            <!-- Mood form -->
            <fieldset>
                <div class="moodForm pb-5 w-50">
                    <label for="moodForm">Mood For The Day</label>
                    <select class="form-control" id="mood-form">
                    <option>I feel great!</option>
                    <option>I'm confident</option>
                    <option>I'll need to work on this some more</option>
                    <option>Well that was confusing</option>
                    <option>Wait, what?</option>
                    </select>
                </div>
            </fieldset>
            
            <!-- Journal submit button -->
            <div class="container pb-4">
                <button type="button" class="btn btn-outline-secondary" id="journal-submit-btn">Submit Journal Entry</button>
            </div>
        </form>
    </div>`
}


