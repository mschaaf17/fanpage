
//get items from local storage and display them
var savedSong = JSON.parse(localStorage.getItem('savedSong')) || [];
var playlist = document.getElementById('playlist')
var thePlaylist = function() {
for(i=0; i<savedSong.length; i++) {
    var songAdded= document.createElement("li")
    songAdded.textContent= savedSong[i]
    playlist.prepend(songAdded)
}
}

thePlaylist()

//clear the local storage
var clearList = document.getElementById('clearList')
var clearPlaylist = function(){
    playlist.classList.add('hide')
    localStorage.clear(clearList)
}

clearList.addEventListener("click", clearPlaylist)
