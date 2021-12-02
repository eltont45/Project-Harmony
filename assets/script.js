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
            }
        })
        .catch(error => console.log('error', error));
}

selectors.searchButton.addEventListener("click", function () {
    getArtistHeroImageAndBio();
});