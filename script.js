// State Variables can be declared outside of the onReady
// Feel free to make this to what you want!
// Example:
// let fungusHP = 100;

let fungusHP = 100;
let playerAP = 100;


function onReady() {
    console.log("Ready to go!")
    // Make sure you check the index.html file! 
    // There are lots of buttons and things ready for you to hook into here!


    // 🧠 Remember
    // - Handle events that ->
    // - Updates state which is ->
    // - Rendered to the DOM
}
function handleArcaneScepter(event) {

    fungusHP -= 14;
    playerAP -= 12;
    negativeCheck();
    render();
};
function handleEntangle(event) {
    fungusHP -= 9;
    playerAP -= 23;
    negativeCheck();
    render();

};
function handleDragonBlade(event) {
    fungusHP -= 47;
    playerAP -= 38;
    negativeCheck();
    render();
};
function handleStarFire(event) {
    fungusHP -= 25;
    playerAP -= 33;
    negativeCheck();
    render();
};
function render() {
    let healthContainer = document.querySelector('.hp-text');
    healthContainer.innerText = `${fungusHP} HP`;
    let apContainer = document.querySelector('.ap-text');
    apContainer.innerText = `${playerAP} AP`;

};
function negativeCheck() {
    let fungusElement = document.querySelector('.freaky-fungus.walk');
    if (fungusHP <= 0) {
        fungusHP = 0;
        fungusElement.classList.remove("freaky-fungus.walk");
        fungusElement.classList.add('freaky-fungus', 'dead');

    };
    if (playerAP <= 0 && fungusHP > 0) {
        playerAP = 0;
        fungusElement.classList.remove("freaky-fungus.walk");
        fungusElement.classList.add('freaky-fungus', 'jump');
        document.getElementById("button1").disabled = true;
        document.getElementById("button2").disabled = true;
        document.getElementById("button3").disabled = true;
        document.getElementById("button4").disabled = true;
    };

};



onReady();