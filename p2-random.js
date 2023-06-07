/*
    CIT 281 Project 2
    Name: Connor Pfeiffer
*/

// Returns a random number between min (inclusive) and max (exclusive)
function getRandomInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}

function getRandomLetter(){
    const alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
    const randomLetter = alphabet[getRandomInteger(0, 25)];
    return randomLetter;
}

//creates a random string of lowercase letters that is between minLength and maxLength. Both are included in random string length possibilities
function getRandomString(minLength, maxLength){
    let result = "";
    for (let i = 0; i < getRandomInteger(minLength, maxLength); i++) {
        result += getRandomLetter();
    }
    return result;
}

//takes string and breaks into an array. Sorts array and then rejoins array in letter order
function getSortedString(string){
    return string.split('').sort().join('');
}

console.log(getSortedString(getRandomString(10,20)));