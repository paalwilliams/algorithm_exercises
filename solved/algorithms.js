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

// Write a function that returns an array consisting of the largest number from each provided sub-array. For simplicity, the provided array will contain exactly 4 sub-arrays.
// Remember, you can iterate through an array with a simple for loop, and access each member with array syntax arr[i].
// largestOfFour([[13, 27, 18, 26], [4, 5, 1, 3], [32, 35, 37, 39], [1000, 1001, 857, 1]]) should return [27, 5, 39, 1001].
// largestOfFour([[4, 9, 1, 3], [13, 35, 18, 26], [32, 35, 97, 39], [1000000, 1001, 857, 1]]) should return [9, 35, 97, 1000000].
// largestOfFour([[17, 23, 25, 12], [25, 7, 34, 48], [4, -10, 18, 21], [-72, -3, -17, -10]]) should return [25, 48, 21, -3].

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

// Return true if the string in the first element of the array contains all of the letters of the string in the second element of the array.
// For example, ["hello", "Hello"], should return true because all of the letters in the second string are present in the first, ignoring case.
// The arguments ["hello", "hey"] should return false because the string "hello" does not contain a "y".
// Lastly, ["Alien", "line"], should return true because all of the letters in "line" are present in "Alien".

const mutation = (arr) => {
    for(let i = 0; i < arr[1].length; i++) {
        if(arr[0].toLowerCase().indexOf(arr[1][i].toLowerCase()) < 0) {
            return false;
        }
    }
        return true;
    }
mutation(["hello", "hey"]);