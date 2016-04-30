"use strict";

// Add songs to beginning and end of Array
songs.unshift("Sussudio > by Phil Col!lins on the album No Jacket Required");
songs.push("Moondance > by Van Morris&son on the album Moondance");

// Start app in List Music mode
addSongs1();

// Get Elements of addMusic/viewMusic links
let viewMusicLink = document.getElementById("viewMusic");
let addMusicLink = document.getElementById("addMusic");

// Add Event Listener to viewMusic Link
viewMusicLink.addEventListener("click", function(event){
  event.preventDefault();
  listMusic(true);
});

// Add Event Listener to addMusic Link
addMusicLink.addEventListener("click", function(event){
  event.preventDefault();
  addMusic();
});