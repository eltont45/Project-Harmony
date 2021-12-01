function save() {
    var dataToSave =document.getElementById("myInput").value;
    localStorage.setItem("data", dataToSave);
}
