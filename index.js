for (let i = 0; i < document.querySelectorAll(".drum").length; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function(){
        let buttonInnerHTML = this.innerHTML;
        makeSound(buttonInnerHTML);
        buttonAnimation(buttonInnerHTML);
    });
}

document.addEventListener("keypress",function(event){
    makeSound(event.key);
    buttonAnimation(event.key)
});

function makeSound(key){
    switch (key) {
        case "q":
            let snare = new Audio("sounds/snare.mp3");
            snare.play();
            break;
        case "w":
            let hiHat = new Audio("sounds/Hi-Hat.mp3");
            hiHat.play();
            break;
        case "e":
            let crashCymbal = new Audio("sounds/Crash-Cymbal.mp3");
            crashCymbal.play();
            break;
        case "r":
            let highTom = new Audio("sounds/small-tom.mp3");
            highTom.play();
            break;
        case "v":
        case "b":
            let bass = new Audio("sounds/Bass-Drum.mp3");
            bass.play();
            break;
        case "i":
            let medTom = new Audio("sounds/medium-tom.mp3");
            medTom.play();
            break;
        case "o":
            let rideCymbal = new Audio("sounds/Ride-Cymbal.mp3");
            rideCymbal.play();
            break;
        case "p":
            let floorTom = new Audio("sounds/floor-tom.mp3");
            floorTom.play();
            break;
        default:
            console.log(buttonInnerHTML);
    }
}

function buttonAnimation(currentKey){
    let activeButton = document.querySelector("." + currentKey);

    activeButton.classList.add("pressed");

    setTimeout(function(){
        activeButton.classList.remove("pressed");
    }, 100);
}
