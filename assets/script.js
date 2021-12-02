// mobile menu variable
const btn = document.querySelector('.mobile-menu-button');
const menu = document.querySelector('.mobile-menu');

// mobile menu event listener
btn.addEventListener('click', ()=> {
    menu.classList.toggle("hidden");
});


//favorite or saved artist variables
var storedFavorite = localStorage.getItem('favorite');

function save() {
    //get data from favorite button
    var newFavorite = document.getElementsByClassName('favorite-artist-button').value;

    //if there is nothing saved at the start then save an empty array
    if(localStorage.getItem('favorite') == 'null'){
        localStorage.setItem('favorite','[]');
    }

    //get old data and add it to the new data
    var oldFavorites = JSON.parse(localStorage.getItem('favorite'));
    oldFavorites.push(newFavorite);

    //save new favorites and old favorites to local storage
    localStorage.setItem('favorite', JSON.stringify(oldFavorites));
};
//I didn't get to finish the button yet
function viewFavorites(){
    //if there is artists saved then continue
    if(localStorage.getItem('favorite') != 'null'){
        document.getElementsByClassName()
    }
}