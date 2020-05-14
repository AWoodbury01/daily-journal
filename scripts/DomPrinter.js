// Journal entry printer
function entryPrinter(SingleEntry) {
  return `
  <div class="card text-white bg-dark mb-3">
        <div class="card-header">${SingleEntry.date}</div>
           <div class="card-body">
               <h5 class="card-title">${SingleEntry.concept}</h5>
               <p class="card-text">${SingleEntry.entry}</p>
               <p class="card-text">Mood: ${SingleEntry.mood}</p>
               <button 
               type="button" 
               class="btn btn-outline-danger" id="delete-btn-${SingleEntry.id}">Delete</button>
       </div>`;
}

// Pull journal entries from json
function pullEntries() {}

// Contents for Journal Entry forms page
function journalContainer() {
  return `
  <!-- Navbar -->
  <nav class="navbar navbar-dark" style="background-color: #095a94">
    <a class="navbar-brand" href="#">Ashon Woodbury</a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div class="navbar-nav">
        <a class="nav-item nav-link active" href="#">Home<span class="sr-only">(current)</span></a>
        <a class="nav-item nav-link active" id="daily-journal" href="#">Daily Journal</a>
      </div>
    </div>
  </nav>

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
        </form>
        <!-- Journal submit button -->
        <div class="container pb-4">
            <button type="button" class="btn btn-outline-secondary" id="journal-submit-btn">Submit Journal Entry</button>
        </div>
        
        <!-- Entries Header -->
        <div id="entry-container" class="container p-4">
        <div class="container pb-3 d-flex justify-content-center"> 
            <h3>Entries</h3>
    </div>

        <!-- Journal printing area -->
        <div class="container">
            <section id="journal-printing-area" class="container journal-entries-container"></section>
        </div>

    </div>`;
}

// Splash page contents
function splashContainer(){
    return `
    <!-- Page Title -->
    <div id="background-container"
    class="background-div">
      <!-- Navbar -->
      <nav class="navbar navbar-dark" style="background-color: #095a94">
        <a class="navbar-brand" href="#">Ashon Woodbury</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div class="navbar-nav">
            <a class="nav-item nav-link active" href="#">Home<span class="sr-only">(current)</span></a>
            <a class="nav-item nav-link active" id="daily-journal" href="#">Daily Journal</a>
          </div>
        </div>
      </nav>
    
      <div class="header-container">
        <div class="name-header">
          <h1>Ashon's Website</h1>
        </div>
      </div>
    </div>
    
    `
}