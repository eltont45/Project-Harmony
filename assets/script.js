var selectors = {
    searchButton: document.querySelector('.search-btn')
};

function loadArtist(){
    window.location.href = "./artist.html";
}
selectors.searchButton.addEventListener("click",loadArtist)

