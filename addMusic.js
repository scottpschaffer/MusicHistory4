"use strict";

function addMusic(){
  // Get element of Add Music div 
  let addDiv = document.getElementById("add1");
  // Make addDiv visible by adding "visible" class
  addDiv.classList.add("visible");
  // Make addDiv visible by removing "hidden" class
  addDiv.classList.remove("hidden");
  
  // Get element of View List div
  let viewDiv = document.getElementById("view1");
  // Make viewDiv hidden by adding "hidden" class
  viewDiv.classList.add("hidden");
  // Make viewDiv hidden by removing "visible" class
  viewDiv.classList.remove("visible");

  // Get elements of text boxes and Add button
  var addButton = document.getElementById("addButton");
  var songNameText = document.getElementById("song");
  var artistNameText = document.getElementById("artist");
  var albumNameText = document.getElementById("album");

  // Initialize/empty the textboxes
  songNameText.value = "";
  artistNameText.value = "";
  albumNameText.value = "";

  // Add Event Listener for Click Event to Add Button
  addButton.addEventListener("click", function(){

    // Check if any textboxes are empty
    if ((songNameText.value.length !== 0) && (artistNameText.value.length !== 0) && (albumNameText.value.length !== 0)){
      // Put text string together
      let songsListEntry = songNameText.value + " - by " + artistNameText.value + " on the album " + albumNameText.value;
      // Add text to end of array
      songs.push(songsListEntry);
      alert("Song information added!");
      songNameText.value = "";
      artistNameText.value = "";
      albumNameText.value = "";
    }
  });

}