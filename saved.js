//select the <ul> with the class="saved-artists"
const savedArtists = document.querySelector('.save-artists');
// Create ordered list element
var listEl = document.createElement("ol");
// Create ordered list items
var li1 = document.createElement("li");
var li2 = document.createElement("li");
var li3 = document.createElement("li");
var li4 = document.createElement("li");
//array which stores every saved artist
let savedArtists = [];

// function helps to get everything from local storage
function getFromLocalStorage() {
    const reference = localStorage.getItem('saved-artists');
    // if reference exists
    if (reference) {
      // converts back to array and store it in todos array
      todos = JSON.parse(reference);
      renderTodos(saved-artist);
    }
  }

function show() {
    var dataToSave = localStorage.getItem('artist')
}
