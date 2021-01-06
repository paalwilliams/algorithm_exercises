// Write a function that takes in a string and returns true if it's a pangram or false otherwise.
// Pangram: a sentence that contains every letter in the alphabet.
// Ex:
// Input: "Watch Jeopardy, Alex Trebek's fun TV quiz game"
// Output: true
// Input: "Five hexing wizard bots jump quickly"
// Output: true
// Input: "JavaScript is the best"
// Output: false

const alphCheckerTwo = (string) => {
    const alphabet = "abcdefghijklmnopqrstuvwxyz";
    string = string.toLowerCase();
    for(let i = 0; i < string.length; i++) {
      alphabet.splice(alphabet.indexOf(string[i]), 1);
    }
    return alphabet.length == 0;
}


const largestOfFour = (arr) => {
    let retArr = []
    for(let subArr of arr) {
        let greatest;
        for(let index of subArr) {
            if(index > greatest || !greatest) {
                greatest = index;
            }
        }
        retArr.push(greatest)
    }
    return retArr;
}