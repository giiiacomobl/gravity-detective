let clues = {
    sun: false,
    earth: false,
    distance: false
};

function getClue(type) {

    if (type === "sun" && !clues.sun) {
        clues.sun = true;
        document.getElementById("sun").innerHTML = "☑ Sun";
    }

    if (type === "earth" && !clues.earth) {
        clues.earth = true;
        document.getElementById("earth").innerHTML = "☑ Earth";
    }

    if (type === "distance" && !clues.distance) {
        clues.distance = true;
        document.getElementById("distance").innerHTML = "☑ Distance";
    }

    updateCase();
}

function updateCase() {

    const caseBox = document.getElementById("case");

    if (clues.sun && clues.earth && clues.distance) {
        caseBox.innerHTML = `
            <h3>CASE SUMMARY</h3>
            ✓ The Sun has mass<br>
            ✓ The Earth has mass<br>
            ✓ No physical contact exists<br><br>
            <b>QUESTION:</b><br>
            How can one body influence another through empty space?
        `;
    }

    else {
        caseBox.innerHTML = "Collect all clues...";
    }
}
