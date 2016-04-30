"use strict";

function addSongs1(){
  let songs1 = [];
  let songs1Loader = new XMLHttpRequest();
      songs1Loader.addEventListener("load", function(){
        songs1 = JSON.parse(this.responseText).songs1;
        
        // Callback and pass list of cars (inventory)
        addSongsToList(songs1);
        listMusic();
      });
      songs1Loader.open("GET", "songs1.json");
      songs1Loader.send();
}

function addSongs2(){
  let songs2 = [];
  let songs2Loader = new XMLHttpRequest();
      songs2Loader.addEventListener("load", function(){
        songs2 = JSON.parse(this.responseText).songs2;
        
        // Callback and pass list of cars (inventory)
        addSongsToList(songs2);
        // let divSongs2 = document.getElementById()
        // for (let z=songs.length - songs2.length; z<songs.length; z++){

        // }
        listMusic();
      });
      songs2Loader.open("GET", "songs2.json");
      songs2Loader.send();
}

function addSongsToList(songs0){
  for (let i=0; i<songs0.length; i++){
    console.log("songs0", songs0[i].song);
    let tempSong = songs0[i].song + " - by " + songs0[i].artist + " on the album " + songs0[i].album;
    songs.push(tempSong);
  }

}

// This variable x is used for preventing the More button in List View
// from clicking more than once  
let x = true;

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
    var songSplit = songs[k].split("-");
    // Print out Song Title and other info
    viewDiv.innerHTML += `<article><header class='songTitle' id='art--${k}'>${songSplit[0]}</header> - ${songSplit[1]}<button class='dButton'>Delete</button></article><br>`;
  }
  // Add More button
  viewDiv.innerHTML += "<div id='buttonDiv'><button id='more'>More</button></div>";
  
  // Add Event Handler
  let moreButton = document.getElementById("more");

  moreButton.addEventListener("click", function(){
    console.log("x", x);
    if (x){
      addSongs2();
      x = false;
      console.log("x1", x);
    }

  });

  let delButtons = document.getElementsByClassName("dButton");
  for (let l=0; l<delButtons.length; l++){
    delButtons[l].addEventListener("click", function(e){
      // console.log("this", this);
      // console.log("this.parentNode", this.parentNode);
      // console.log("this.parentNode.parentNode", this.parentNode.parentNode);
      // console.log("this.parentNode.innerText", this.parentNode.innerText);
      // alert(songs);
      // alert(songs.indexOf(this.parentNode.innerText, 10));
      this.parentNode.parentNode.removeChild(this.parentNode);
    });
  }

}
