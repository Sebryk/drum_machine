//NATIVE JAVASCRIPT

let numberOfButtons = document.querySelectorAll(".pad").length;
let drumScreen = document.querySelector(".drum-machine__title");

// Mouse clicks on drum pads

for (let i = 0; i < numberOfButtons; i++) {
  document.querySelectorAll(".pad")[i].addEventListener("click", function () {
    let buttonInnerHTML = this.innerHTML;

    makeSound(buttonInnerHTML);

    pressedButton(buttonInnerHTML);
  });
}

// Keyboard keypresses

document.addEventListener("keypress", function (event) {
  makeSound(event.key);

  pressedButton(event.key);
});

// Drum pad sounds and instrument names on drum machine screen

function makeSound(key) {
  switch (key) {
    case "q":
      let kick = new Audio("sounds/kick.wav");
      kick.play();
      drumScreen.innerHTML = "Kick";
      break;

    case "w":
      let snare = new Audio("sounds/snare.wav");
      snare.play();
      drumScreen.innerHTML = "Snare";
      break;

    case "e":
      let clap = new Audio("sounds/clap.wav");
      clap.play();
      drumScreen.innerHTML = "Clap";
      break;

    case "a":
      let snap = new Audio("sounds/snap.wav");
      snap.play();
      drumScreen.innerHTML = "Snap";
      break;

    case "s":
      let closedHat = new Audio("sounds/closed-hat.wav");
      closedHat.play();
      drumScreen.innerHTML = "Closed Hi-Hat";
      break;

    case "d":
      let openHat = new Audio("sounds/open-hat.wav");
      openHat.play();
      drumScreen.innerHTML = "Open Hi-Hat";
      break;

    case "z":
      let tom1 = new Audio("sounds/tom-1.wav");
      tom1.play();
      drumScreen.innerHTML = "Tom 1";
      break;

    case "x":
      let tom2 = new Audio("sounds/tom-2.wav");
      tom2.play();
      drumScreen.innerHTML = "Tom 2";
      break;

    case "c":
      let tom3 = new Audio("sounds/tom-3.wav");
      tom3.play();
      drumScreen.innerHTML = "Tom 3";
      break;

    default:
      console.log(buttonInnerHTML);
  }
}

// Pressed button animation

function pressedButton(button) {
  document.querySelector("." + button).classList.add("pressed-pad");
  setTimeout(function () {
    document.querySelector("." + button).classList.remove("pressed-pad");
  }, 100);
}

// // JAVASCRIPT WITH JQUERY

// let numberOfButtons = $(".drum").length;
// let drumScreen = $(".screen__title");

// // Mouse clicks on drum pads

// $(".drum").on("click", function () {
//   let buttonInnerHTML = this.innerHTML;

//   makeSound(buttonInnerHTML);

//   pressedButton(buttonInnerHTML);
// });

// // Keyboard keypresses

// $(document).on("keypress", function (event) {
//   makeSound(event.key);

//   pressedButton(event.key);
// });

// // Drum pad sounds and instrument names on drum machine screen

// function makeSound(key) {
//   switch (key) {
//     case "q":
//       let kick = new Audio("sounds/kick.wav");
//       kick.play();
//       drumScreen.innerHTML = "Kick";
//       break;

//     case "w":
//       let snare = new Audio("sounds/snare.wav");
//       snare.play();
//       drumScreen.innerHTML = "Snare";
//       break;

//     case "e":
//       let clap = new Audio("sounds/clap.wav");
//       clap.play();
//       drumScreen.innerHTML = "Clap";
//       break;

//     case "a":
//       let snap = new Audio("sounds/snap.wav");
//       snap.play();
//       drumScreen.innerHTML = "Snap";
//       break;

//     case "s":
//       let closedHat = new Audio("sounds/closed-hat.wav");
//       closedHat.play();
//       drumScreen.innerHTML = "Closed Hi-Hat";
//       break;

//     case "d":
//       let openHat = new Audio("sounds/open-hat.wav");
//       openHat.play();
//       drumScreen.innerHTML = "Open Hi-Hat";
//       break;

//     case "z":
//       let tom1 = new Audio("sounds/tom-1.wav");
//       tom1.play();
//       drumScreen.innerHTML = "Tom 1";
//       break;

//     case "x":
//       let tom2 = new Audio("sounds/tom-2.wav");
//       tom2.play();
//       drumScreen.innerHTML = "Tom 2";
//       break;

//     case "c":
//       let tom3 = new Audio("sounds/tom-3.wav");
//       tom3.play();
//       drumScreen.innerHTML = "Tom 3";
//       break;

//     default:
//       console.log(buttonInnerHTML);
//   }
// }

// // Pressed button animation

// function pressedButton(button) {
//   $("." + button).addClass("pressed-pad");
//   setTimeout(function () {
//     $("." + button).removeClass("pressed-pad");
//   }, 100);
// }
