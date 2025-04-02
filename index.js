function isPalindrome(word) {
  // Write your algorithm here
    // Convert the word to lowercase to make the comparison case-insensitive
    const lowerWord = word.toLowerCase();
    // Reverse the word and compare it to the original
    return lowerWord === lowerWord.split('').reverse().join('');
  }
/* 
  Add your pseudocode here
    Pseudocode:
  1. Convert the input word to lowercase to handle case insensitivity
  2. Split the word into an array of characters
  3. Reverse the array of characters
  4. Join the reversed array back into a string
  5. Compare the original lowercase word with the reversed version
  6. Return true if they match, false if they don't
*/


/*
  Add written explanation of your solution here
    Written Explanation:
  This solution checks if a word is a palindrome by comparing the original word
  with its reversed version. First, we convert the word to lowercase to ensure
  the comparison is case-insensitive (though the test cases don't include mixed
  case, this makes the function more robust). Then we:
  1. Split the word into an array of individual characters
  2. Reverse the array
  3. Join the reversed array back into a string
  4. Compare this reversed string with the original
  If they match exactly, the word is a palindrome and we return true.
  Otherwise, we return false.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
  console.log("");

  console.log("Expecting: true");
  console.log("=>", isPalindrome("abba"));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", isPalindrome("a"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("ab"));
}

module.exports = isPalindrome;
