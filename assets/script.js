// mobile menu variable
const btn = document.querySelector('.mobile-menu-button');
const menu = document.querySelector('.mobile-menu');

// mobile menu event listener
btn.addEventListener('click', ()=> {
    menu.classList.toggle("hidden");
});

//artist search
var selectors = {
    searchField: document.querySelector('.search-artist'),
    searchButton: document.querySelector('.search-btn'),
    artistPageHeader: document.querySelector('.html2-header'),
    bgImage: document.querySelector('.bg-image'),
    searchArtistSection: document.querySelector('.search-artist-section')
};

function loadArtist() {
    window.location.href = "./artist.html";
}

function getArtistHeroImageAndBio() {
    var searchKey = selectors.searchField.value;
    var myHeaders = new Headers();
    myHeaders.append("x-rapidapi-host", "theaudiodb.p.rapidapi.com");
    myHeaders.append("x-rapidapi-key", "e7e494b4d7msh0a6cfffe1539573p1a2d8bjsn45ebaf632221");

    var requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
    };

    fetch("https://theaudiodb.p.rapidapi.com/search.php?s=" + searchKey, requestOptions)
        .then(response => response.text())
        .then(result => {
            actualResult = JSON.parse(result);
            if (actualResult.artists && actualResult.artists[0].strArtistFanart) {
            selectors.bgImage.remove();
            selectors.searchField.remove();
            selectors.searchButton.remove();
            selectors.searchArtistSection.remove();
            var artistImage = actualResult.artists[0].strArtistFanart;
            var artistName = actualResult.artists[0].strArtist;
            var heroSection = document.querySelector('.hero-section');
            var heroDiv = document.createElement("div");
            heroDiv.className = "py-20";
            heroDiv.style.height = "400px";
            heroDiv.style.backgroundImage="url("+artistImage+")";
            heroSection.appendChild(heroDiv);
            var heroTextContainer = document.createElement("div");
            heroTextContainer.className = "container mx-auto px-6";
            heroDiv.appendChild(heroTextContainer);
            var heroTextContent = document.createElement("h2");
            heroTextContent.className = "text-4xl font-bold mb-2 text-white";
            heroTextContent.textContent = artistName;
            heroTextContainer.appendChild(heroTextContent);
            var bioSection = document.createElement("div");
            bioSection.className = "font-semibold text-lg pb-5";
            bioSection.textContent = artistName;
            bioSection.style.backgroundColor = "aliceblue";
            heroSection.appendChild(bioSection);
            var bioContent = document.createElement("p");
            bioContent.className = "text-gray-500 px-4 font-light";
            bioContent.textContent = actualResult.artists[0].strBiographyEN;
            bioSection.appendChild(bioContent);
            } else {
                window.alert("Sorry, please try a different artist");
            }
        })
        .catch(error => console.log('error', error));
}

selectors.searchButton.addEventListener("click", function () {
    getArtistHeroImageAndBio();
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
