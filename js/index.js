function goHome() {
    document.querySelector("#home").style.display= "block";
    document.querySelector("#more-me").style.display= "none";
    document.querySelector("#game").style.display= "none";
    document.querySelector("#workflow").style.display= "none";
}
    
function goMe() {
    document.querySelector("#home").style.display= "none";
    document.querySelector("#more-me").style.display= "block";
    document.querySelector("#game").style.display= "none";
    document.querySelector("#workflow").style.display= "none";
}

function goWorkflow() {
    document.querySelector("#home").style.display= "none";
    document.querySelector("#more-me").style.display= "none";
    document.querySelector("#game").style.display= "none";
    document.querySelector("#workflow").style.display= "block";
}

function goGame() {
    document.querySelector("#home").style.display= "none";
    document.querySelector("#more-me").style.display= "none";
    document.querySelector("#game").style.display= "block";
    document.querySelector("#workflow").style.display= "none";
}

