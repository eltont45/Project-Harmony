// mobile menu variable
const btn = document.querySelector('.mobile-menu-button');
const menu = document.querySelector('.mobile-menu');

// mobile menu event listener
btn.addEventListener('click', () => {
    menu.classList.toggle("hidden");
});

//artist search
var selectors = {
    searchField: document.querySelector('.search-artist'),
    searchButton: document.querySelector('.search-btn'),
    artistPageHeader: document.querySelector('.html2-header'),
    bgImage: document.querySelector('.bg-image'),
    searchArtistSection: document.querySelector('.search-artist-section'),
    heroSection: document.querySelector('.hero-section'),
    discographySection: document.querySelector('.discography-section'),
    card1header: document.querySelector('.card-1-header'),
    card1p1: document.querySelector('.card1-p1'),
    card1p2: document.querySelector('.card1-p2'),
    card1p3: document.querySelector('.card1-p3'),
    card1p4: document.querySelector('.card1-p4'),
    card1btn: document.querySelector('.card-1-button'),
    card2header: document.querySelector('.card-2-header'),
    card2p1: document.querySelector('.card2-p1'),
    card2p2: document.querySelector('.card2-p2'),
    card2p3: document.querySelector('.card2-p3'),
    card2p4: document.querySelector('.card2-p4'),
    card2btn: document.querySelector('.card-2-button'),
    card3header: document.querySelector('.card-3-header'),
    card3p1: document.querySelector('.card3-p1'),
    card3p2: document.querySelector('.card3-p2'),
    card3p3: document.querySelector('.card3-p3'),
    card3p4: document.querySelector('.card3-p4'),
    card3btn: document.querySelector('.card-3-button')
};

function liveEvents() {
    var requestOptions = {
        method: 'GET',
        redirect: 'follow'
    };

    fetch("https://api.seatgeek.com/2/events?client_id=MjQ3NzE1NjR8MTYzODU5MTQwNi4zMjUwMjEz&client_secret=8cb245e03974ec5bd0decce0cffdb1472777f71f3850b610bdeb273ac29531d6&type=concert&venue.state=CA", requestOptions)
        .then(response => response.text())
        .then(result => {
            actualResult = JSON.parse(result);
            var concert1Date = new Date(actualResult.events[0].datetime_utc);
            var pstTime1 = concert1Date.toLocaleString("en-US", {timeZone: "America/Los_Angeles"})
            selectors.card1header.textContent = actualResult.events[0].venue.name;
            selectors.card1p1.textContent = "Type: "+actualResult.events[0].type;
            selectors.card1p2.textContent = "Genre: "+actualResult.events[0].performers[0].genres[0].name;
            selectors.card1p3.textContent = "Date: "+pstTime1;
            selectors.card1p4.textContent = "Venue: "+actualResult.events[0].venue.address+", "+actualResult.events[0].venue.city+", "+actualResult.events[0].venue.state+" "+actualResult.events[0].venue.postal_code;
            selectors.card1btn.addEventListener('click',function () {
               window.open(actualResult.events[0].venue.url,'_blank').focus();
            })
            var concert2Date = new Date(actualResult.events[1].datetime_utc);
            var pstTime2 = concert2Date.toLocaleString("en-US", {timeZone: "America/Los_Angeles"})
            selectors.card2header.textContent = actualResult.events[1].venue.name;
            selectors.card2p1.textContent = "Type: "+actualResult.events[1].type;
            selectors.card2p2.textContent = "Genre: "+actualResult.events[1].performers[0].genres[0].name;
            selectors.card2p3.textContent = "Date: "+pstTime2;
            selectors.card2p4.textContent = "Venue: "+actualResult.events[1].venue.address+", "+actualResult.events[1].venue.city+", "+actualResult.events[1].venue.state+" "+actualResult.events[1].venue.postal_code;
            selectors.card2btn.addEventListener('click',function () {
               window.open(actualResult.events[1].venue.url,'_blank').focus();
            })
            var concert3Date = new Date(actualResult.events[2].datetime_utc);
            var pstTime3 = concert3Date.toLocaleString("en-US", {timeZone: "America/Los_Angeles"})
            selectors.card3header.textContent = actualResult.events[2].venue.name;
            selectors.card3p1.textContent = "Type: "+actualResult.events[2].type;
            selectors.card3p2.textContent = "Genre: "+actualResult.events[2].performers[0].genres[0].name;
            selectors.card3p3.textContent = "Date: "+pstTime3;
            selectors.card3p4.textContent = "Venue: "+actualResult.events[2].venue.address+", "+actualResult.events[2].venue.city+", "+actualResult.events[2].venue.state+" "+actualResult.events[2].venue.postal_code;
            selectors.card3btn.addEventListener('click',function () {
               window.open(actualResult.events[2].venue.url,'_blank').focus();
            })
        })
        .catch(error => console.log('error', error));

}
liveEvents();

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
                // selectors.heroSection.style.backgroundImage = "none";
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
                selectors.heroSection.style.backgroundImage = "url(" + artistImage + ")";
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

function getDiscography() {
    var searchKey = selectors.searchField.value;
    var myHeaders = new Headers();
    myHeaders.append("x-rapidapi-host", "theaudiodb.p.rapidapi.com");
    myHeaders.append("x-rapidapi-key", "e7e494b4d7msh0a6cfffe1539573p1a2d8bjsn45ebaf632221");

    var requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
    };

    fetch("https://theaudiodb.p.rapidapi.com/discography.php?s=" + searchKey, requestOptions)
        .then(response => response.text())
        .then(result => {
            actualResult = JSON.parse(result);
            var discographyContainer = document.createElement("div");
            discographyContainer.className = "p-10";
            discographyContainer.style.backgroundColor = "aliceblue";
            selectors.discographySection.append(discographyContainer);
            var discoCard = document.createElement("div");
            discoCard.className = " w-full lg:max-w-full lg:flex";
            discographyContainer.appendChild(discoCard);
            var discoImageSection = document.createElement("div");
            discoImageSection.className = "h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden";
            discoImageSection.style.backgroundImage = "url('./assets/images/mic.png')";
            discoCard.appendChild(discoImageSection);
            var discoTextContent = document.createElement("div");
            discoTextContent.className = "border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal";
            discoCard.appendChild(discoTextContent);
            var discoContentContainer = document.createElement("div");
            discoContentContainer.className = "mb-8";
            discoTextContent.appendChild(discoContentContainer);
            var discoContentHeader = document.createElement("div");
            discoContentHeader.className = "text-gray-900 font-bold text-xl mb-2";
            searchKeyUpperCase = searchKey.toUpperCase();
            discoContentHeader.textContent = searchKeyUpperCase + " Albums Discography";
            discoContentContainer.appendChild(discoContentHeader);
            if (actualResult.album) {
                var discoList = document.createElement("ul");
                discoList.className = "text-gray-700 text-base ml-8 list-disc";
                discoContentContainer.appendChild(discoList);
                for (var i = 0; i < actualResult.album.length; i++) {
                    var discography = document.createElement("li");
                    discography.textContent = actualResult.album[i].strAlbum + " released on " + actualResult.album[i].intYearReleased;
                    discoList.appendChild(discography);
                }
            } else {
                var noDiscoFoundText = document.createElement("p");
                noDiscoFoundText.className = "text-gray-700 text-base";
                noDiscoFoundText.textContent = "No discography found for " + searchKey;
                discoContentContainer.appendChild(noDiscoFoundText);
            }
        })
        .catch(error => console.log('error', error));
}

selectors.searchButton.addEventListener("click", function () {
    getArtistHeroImageAndBio();
    getDiscography();
});

//favorite or saved artist variables
var storedFavorite = localStorage.getItem('favorite');

function save() {
    //get data from favorite button
    var newFavorite = document.getElementsByClassName('favorite-artist-button').value;

    //if there is nothing saved at the start then save an empty array
    if (localStorage.getItem('favorite') == 'null') {
        localStorage.setItem('favorite', '[]');
    }

    //get old data and add it to the new data
    var oldFavorites = JSON.parse(localStorage.getItem('favorite'));
    oldFavorites.push(newFavorite);

    //save new favorites and old favorites to local storage
    localStorage.setItem('favorite', JSON.stringify(oldFavorites));
};

//I didn't get to finish the button yet
function viewFavorites() {
    //if there is artists saved then continue
    if (localStorage.getItem('favorite') != 'null') {
        document.getElementsByClassName()
    }
}