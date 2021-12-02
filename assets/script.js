var selectors = {
    searchField: document.querySelector('.search-artist'),
    searchButton: document.querySelector('.search-btn'),
    artistPageHeader: document.querySelector('.html2-header')
};



function loadArtist() {
    window.location.href = "./artist.html";
}

function getArtist() {
    var artistSearchText = selectors.searchField.value;
    var myHeaders = new Headers();
    myHeaders.append("x-rapidapi-host", "theaudiodb.p.rapidapi.com");
    myHeaders.append("x-rapidapi-key", "e7e494b4d7msh0a6cfffe1539573p1a2d8bjsn45ebaf632221");

    var requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
    };

    fetch("https://theaudiodb.p.rapidapi.com/search.php?s="+artistSearchText, requestOptions)
        .then(response => response.text())
        .then(result => console.log(result))
        .catch(error => console.log('error', error));
}

selectors.searchButton.addEventListener("click", getArtist)