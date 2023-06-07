/*
    CIT 281 Project 2
    Name: Connor Pfeiffer
*/

// Returns a random number between min (inclusive) and max (exclusive)
const getRandomInteger = function(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}

const getRandomLetter = function(){
    const alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
    const randomLetter = alphabet[getRandomInteger(0, 25)];
    return randomLetter;
}

//creates a random string of lowercase letters that is between minLength and maxLength long. Both are included in random string length possibilities
const getRandomString = function(minLength, maxLength){
    let result = "";
    for (let i = 0; i < getRandomInteger(minLength, maxLength); i++) {
        result += getRandomLetter();
    }
    return result;
}

//takes string and breaks into an array. Sorts array and then rejoins array in letter order
const getSortedString = function(string){
    return string.split('').sort().join('');
}

console.log(getSortedString(getRandomString(10,20)));