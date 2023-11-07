// 1. Reverse A String Using Loops.
function reverse(str) {
    let reversedString = "";
    for (let i = str.length - 1; i >=0; i--){
        reversedString += str[i]
    }
    return reversedString
}

console.log(reverse("Greetings from The Hacker Collective"))

// 2. Same Back And Forth - Is a string the same backwards and forwards? Return true if it is, false if it is not.
function sameBackAndForth(str){
    // find the length of a string
    const len = str.length;

    // loop through half of the string
    for (let i = 0; i < len / 2; i++) {

        // check if first and last string are same
        if (str[i] !== str[len - 1 - i]) {
            return false;
        }
    }
    return true;
}

console.log(sameBackAndForth("abba"))
console.log(sameBackAndForth("abcdefg"))

// 3. Given an integer, return an integer that is the reverse ordering of numbers.
function reverseInt(num){
    let numStr = num.toString();
    let newStr = '';

    for (let i = numStr.length - 1; i >= 0; i--){
        newStr += numStr[i];
    }
    return parseInt(newStr) * Math.sign(num)
}

console.log(reverseInt(87654))
console.log(reverseInt(-98))


// 4. SumArr - Find the sum of all items in an array, using loops.
function sumArr(arr){
    let sum = 0;
    for (i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum
}

console.log(sumArr([123,456,789]))

// 5. Angry Grandma
function deafGrandma(sentence) {
    let yelledSentence = '';  // Initialize an empty string to store the yelled sentence
  let word = '';  // Initialize an empty string to build each yelled word

  for (let i = 0; i < sentence.length; i++) {
    const char = sentence[i];

    if (char === ' ' || i === sentence.length - 1) {
      // If a space is encountered or it's the last character, consider it the end of a word
      if (i === sentence.length - 1) {
        word += char;  // Include the last character in the word
      }

      // Convert the word to uppercase and add '!!'
      word = word.toUpperCase() + '!! ';

      // Add the yelled word to the yelledSentence
      yelledSentence += word;

      // Reset the word for the next word
      word = '';
    } else {
      // If the character is not a space, add it to the word
      word += char;
    }
  }

  return yelledSentence;
}

// Example usage:
const inputSentence = "I have a bad feeling about this";
const yelledResult = deafGrandma(inputSentence);
console.log(yelledResult);

// 6. What Is Missing - Find the missing letter in the passed letter range and return it. If all letters are present in the range, return undefined.

function whatIsMissing(str) {
    // Convert the input string to lowercase for consistent comparison
    str = str.toLowerCase();
  
    // Iterate through the characters
    for (let i = 0; i < str.length - 1; i++) {
      // Check if the ASCII code of the current character is not consecutive to the next character
      if (str.charCodeAt(i + 1) - str.charCodeAt(i) > 1) {
        // If there's a gap, return the missing letter
        return String.fromCharCode(str.charCodeAt(i) + 1);
      }
    }
  
    // If no missing letter is found, return undefined
    return undefined;
  }
 
  console.log(whatIsMissing('ghjklmno'));
  console.log(whatIsMissing('abcdefghijklmnopqrstuvwxyz'));

// 7. Do a swap on the sentence using the arguments provided and return the new sentence.

function myReplace(sentence, before, after) {
    const sentenceWords = sentence.split(' ');
  
    for (let i = 0; i < sentenceWords.length; i++) {
      if (sentenceWords[i] === before) {
        // Preserve the case of the first character
        if (before[0] === before[0].toUpperCase()) {
          after = after[0].toUpperCase() + after.slice(1);
        }
  
        // Replace the word in the array
        sentenceWords[i] = after;
      }
    }
  
    // Join the modified words back into a sentence
    const replacedSentence = sentenceWords.join(' ');
  
    return replacedSentence;
  }
  
  const replacedSentence = myReplace("Let us get back to more Coding", "Coding", "algorithms");
  console.log(replacedSentence);
