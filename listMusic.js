"use strict";

// Call to add songs from first JSON file
function addSongs1(){
  let songs1 = [];
  let songs1Loader = new XMLHttpRequest();
      songs1Loader.addEventListener("load", function(){
        songs1 = JSON.parse(this.responseText).songs1;
        
        // Callback and pass list of cars (inventory)
        addSongsToList(songs1);
        // Call to repaint div  with current list of songs
        listMusic();
      });
      songs1Loader.open("GET", "songs1.json");
      songs1Loader.send();
}

// Call to add songs from second JSON file
function addSongs2(){
  let songs2 = [];
  let songs2Loader = new XMLHttpRequest();
      songs2Loader.addEventListener("load", function(){
        songs2 = JSON.parse(this.responseText).songs2;
        
        // Callback and pass list of cars (inventory)
        addSongsToList(songs2);
        // Call to repaint with current list
        listMusic();
      });
      songs2Loader.open("GET", "songs2.json");
      songs2Loader.send();
}

// formats each song and adds it to the array of songs
function addSongsToList(songs0){
  for (let i=0; i<songs0.length; i++){
    let tempSong = songs0[i].song + " - by " + songs0[i].artist + " on the album " + songs0[i].album;
    songs.push(tempSong);
  }

}

// This variable x is used for preventing the More button in List View
// from clicking more than once  
let stopMoreButton = true;

function listMusic(){
  // Get element of Add Music div
  let addDiv = document.getElementById("add1");
  // Make addDiv hidden by adding "hidden" class
  addDiv.classList.add("hidden");
  // Make addDiv hidden by removing "visible" class
  addDiv.classList.remove("visible");
  
  // Get element of View List div
  let viewDiv = document.getElementById("view1");
  // Make viewDiv visible by adding "visible" class
  viewDiv.classList.add("visible");
  // Make viewDiv visible by removing "hidden" class
  viewDiv.classList.remove("hidden");



  // For every song in array, edit to remove stray characters (MH2)
  for (let i=0; i<songs.length; i++){
    // For every character in every song in array
    for (let j=0; j<songs[i].length; j++){
      // If character not a letter or number
      if (!((songs[i][j] >= "a") && (songs[i][j] <= "z") || (songs[i][j] >= "A") && (songs[i][j] <= "Z") || (songs[i][j] >= "0") && (songs[i][j] <= "9"))){
        // If ">" then replace with "-"
        if (songs[i][j] === ">"){
          songs[i] = songs[i].replace(">", "-");
        } else if ((songs[i][j] === " ") || (songs[i][j] === "-")){
          // If " " or "-", then skip
          continue;
        } else if ((songs[i][j] == "&") && (songs[i][j-1] === " ") && (songs[i][j+1] === " ")){
          // If "&" is part of title of Guns & Roses (space before and after) then skip
          continue;
        } else {
          // Otherwise replace extraneous character with Null
          songs[i] = songs[i].replace(songs[i][j], "");
        }
      }
    }
  }

  // Get div element to write out songs
  viewDiv.innerHTML = "";
  // For every song
  for (let k=0; k<songs.length; k++){
    // Split song to get title
    let songSplit = songs[k].split("-");
    // Print out Song Title and other info
    viewDiv.innerHTML += `<article><header class='songTitle' id='art--${k}'>${songSplit[0]}</header> - ${songSplit[1]}<button class='dButton'>Delete</button></article><br>`;
  }
  // Add More button
  viewDiv.innerHTML += "<div id='buttonDiv'><button id='more'>More</button></div>";
  
  // Add Event Handler
  let moreButton = document.getElementById("more");

  // When More button clicked, check if clicked already. If not add songs from 2nd JSON file
  moreButton.addEventListener("click", function(){
    if (stopMoreButton){
      addSongs2();
      // if clicked, then set to false so can't click again
      stopMoreButton = false;
    }
  });

  // Get array of dButton elements
  let delButtons = document.getElementsByClassName("dButton");
  for (let l=0; l<delButtons.length; l++){
    // Add Event Listener to every dButton element
    delButtons[l].addEventListener("click", function(e){
      // Get id of Article's Header whose dButton was selected and get #
      console.log("ddd");
      let idToRemove = this.parentNode.firstChild.getAttribute('id').split("--")[1];
      // Remove selected song from array and discard it
      let discardedVariable1 = songs.splice(idToRemove, 1);
      // remove selected Song from DOM
      this.parentNode.parentNode.removeChild(this.parentNode);
      // Repaint with current array of songs
      listMusic();
    });
  }

}
