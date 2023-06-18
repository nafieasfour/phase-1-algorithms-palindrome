function isPalindrome(word) {
    const reversedStr = word.split('').reverse().join('');
    return word === reversedStr;
  
}

/* 
  split => reverse = > rejoin = newstring
  if string === newstring then it is a palindrome.
*/

/*
  the code above split the word into sepearate strings, reverse their order and then rejoin them. if the
  original string is equal to the reveresed one then the string is a palindrome.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
