function reverseString() {
    let userWord = document.getElementById("tacoCat").value;
    let cleanedWord = userWord.replace(/[^a-z0-9]|\s+|\r?\n|\r/gmi, "");
    let start = cleanedWord.length - 1;
    let revString = "";
    for (let i = start; i >= 0; i--) {
        revString += cleanedWord[i];
    }
    let output = document.getElementById("tacoOutput");
    output.innerText = revString;
    isPaladrome(cleanedWord, revString);
}

function isPaladrome(userWord, revWord) {
    let user = userWord.toLowerCase();
    let outWord = revWord.toLowerCase();
    if (user === outWord) {
        let repo = "Yes";
        let outputWord = document.getElementById("palaOut");
        outputWord.innerText = repo;
    } else {
        let repo = "No";
        let outputWord = document.getElementById("palaOut");
        outputWord.innerText = repo;
    }
}