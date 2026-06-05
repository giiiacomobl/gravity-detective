let cluesFound = 0;
let correct = false;
let sun = false;
let earth = false;
let distance = false;

function startGame() {
    document.getElementById("intro").classList.add("hidden");
    document.getElementById("scene").classList.remove("hidden");
}

function showClues() {
    document.getElementById("scene").classList.add("hidden");
    document.getElementById("clues").classList.remove("hidden");
}

function clue(n) {

    if (n === 1 && !sun) {
        sun = true;
        cluesFound++;
        document.getElementById("c1").innerHTML = "☑ Sun";
        document.getElementById("clueText").innerHTML = "CLUE FOUND<br><br>The Sun has mass.";
    }

    if (n === 2 && !earth) {
        earth = true;
        cluesFound++;
        document.getElementById("c2").innerHTML = "☑ Earth";
        document.getElementById("clueText").innerHTML = "CLUE FOUND<br><br>The Earth has mass.";
    }

    if (n === 3 && !distance) {
        distance = true;
        cluesFound++;
        document.getElementById("c3").innerHTML = "☑ Distance";
        document.getElementById("clueText").innerHTML = "CLUE FOUND<br><br>There is no physical contact between them.";
    }

    if (cluesFound >= 3) {
        setTimeout(() => {
            document.getElementById("clues").classList.add("hidden");
            document.getElementById("question").classList.remove("hidden");
        }, 5000);
    }
}

function wrong() {
    document.getElementById("answer").innerHTML =
        "INCORRECT<br><br>The Sun and Earth are separated by empty space.";
}

function right() {
    correct = true;

    document.getElementById("answer").innerHTML =
        "CORRECT<br><br>A gravitational influence seems to exist.<br><br>But a deeper question remains...";

    document.getElementById("continueBtn").classList.remove("hidden");
}

function next() {
    alert("Next chapter: The Birth of the Field");
}
