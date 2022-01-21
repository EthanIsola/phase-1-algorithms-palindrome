function isPalindrome(word) {
  // Write your algorithm here
  let letters = word.split('')
  let newLetters = []
  let newWord = ''
  for(let i = 0; i < letters.length; i++){
    newLetters.unshift(letters[i])
  }
  console.log(newLetters.join(''))
  newWord = newLetters.join('')
  return newWord == word
}

/* 
  Add your pseudocode here
  make new array of letters in string
  make new array of letters in string but reversed
  check to see if arrays are the same
  if so, true, if not, false
*/

/*
  Add written explanation of your solution here
  I want to take the word as a string and split it into an array where each element in the array is a seperate letter.
  I then will loop through the array and create a new array with the letters in reverse.
  I then will combine the letters into a string and check it against the original string.
  If the strings are the same, it will return true
  If the strings are different, it will return false
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("race car"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
