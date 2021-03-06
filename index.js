// Detecting Button Press

var numberofDrumButtons = document.querySelectorAll(".drum").length;

for (var i = 0; i<numberofDrumButtons; i++) {

  // Adding EventListener to Each Button

  document.querySelectorAll(".drum")[i].addEventListener("click", function () {

    // alert("I got Clicked");
    // var audio = new Audio('sounds/tom-1.mp3')
    // audio.play();
    //
    // this.style.color = "#fff"

      var buttonInnerHTML =  this.innerHTML

      audioSyncWithCode(buttonInnerHTML)

  });

}

// Detecting Key Press

// Adding EventListener to entire document

document.addEventListener("keydown", function() {

  audioSyncWithCode(event.key)

})

// Function for playing audio

function audioSyncWithCode(keyPressed) {

  switch (keyPressed) {
    case "w":
      var tom1 = new Audio('sounds/tom-1.mp3')
      tom1.play();
      break;

    case "a":
      var tom2 = new Audio('sounds/tom-2.mp3')
      tom2.play();
      break;

    case "s":
      var tom3 = new Audio('sounds/tom-3.mp3')
      tom3.play();
      break;

    case "d":
      var tom4 = new Audio('sounds/tom-4.mp3')
      tom4.play();
      break;

    case "j":
      var snare = new Audio('sounds/snare.mp3')
      snare.play();
      break;

    case "k":
      var crash = new Audio('sounds/crash.mp3')
      crash.play();
      break;

    case "l":
      var kick = new Audio('sounds/kick-bass.mp3')
      kick.play();
      break;

    default:
      // if (buttonInnerHTML) {
      //   console.log(buttonInnerHTML)
      // }
      // else if (event.key) {
      //   console.log(event.key)
      // }
      // else {
      //   console("wrong Key")
      // }
      console.log("Wrong Input")
  }
}
