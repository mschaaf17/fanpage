//variable for modal
const modal = document.querySelector(".modal");
const trigger = document.querySelectorAll(".trigger");
const closeButton = document.querySelector(".close-button");



//fun fact button information
var funFactBtn = document.getElementById('funFactBtn')
//use api to gather infomation or use api for albums
var randomFacts = ["They started with YouTube covers.",
"Their first gig was in front of only 20 people.",
"The band and Ashton said that they pretty much hated each other before they got together, but now they are like brothers."
]
//change fun fact after each click
function changeFacts(e) {
    funFactBtn= e.target
    console.log('clicked')
    var funFact = document.getElementById('funFact');
    var randomTrivia= Math.floor(Math.random() * (randomFacts.length));
    //you can do text.content or innerHTML
    funFact.textContent= randomFacts[randomTrivia]     
}  
funFactBtn.addEventListener("click", changeFacts);



//save the clicked songs in local storage
var topHitsListEl= document.getElementById("topHits");
//setting up local storage with only songs clicked
var savedSong = JSON.parse(localStorage.getItem('savedSong')) || [];
var songClicked = function(e) {
    var song = e.target.innerHTML
    console.log(song)
    savedSong.push(song)
    localStorage.setItem('savedSong', JSON.stringify(savedSong));
    //run the next function so we can work with the var song in this variable
    toggleModal(song)
}

//make modal appear after click
function toggleModal() {
    modal.classList.toggle("show-modal");
}


function windowOnClick(event) {
    if (event.target === modal) {
        toggleModal();
    }
}


topHitsListEl.addEventListener("click", songClicked)
//trigger.addEventListener("click", songClicked);
closeButton.addEventListener("click", toggleModal);
window.addEventListener("click", windowOnClick);

















