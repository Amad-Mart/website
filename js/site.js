function reverseString() {
    let userWord = document.getElementById("tacoCat").value;
    // let rgx = new Regex("\\s+");
    // let cleanedWord = userWord.split(" ").join("");
    let cleanedWord = userWord.replace(/ /g, "");
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
        let repo = "IS";
        let outputWord = document.getElementById("palaOut");
        outputWord.innerText = repo;
    } else {
        let repo = "NOT";
        let outputWord = document.getElementById("palaOut");
        outputWord.innerText = repo;
    }
}