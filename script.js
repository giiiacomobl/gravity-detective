let step = 0;

function investigate() {

    const message = document.getElementById("message");

    step++;

    if (step === 1) {
        message.innerText = "CLUE FOUND: The Sun has mass.";
    }

    else if (step === 2) {
        message.innerText = "CLUE FOUND: The Earth has mass.";
    }

    else if (step === 3) {
        message.innerText = "CLUE FOUND: There is no physical contact between them.";
    }

    else if (step === 4) {
        message.innerText = "QUESTION: How do the Sun and Earth interact?";
    }

}
