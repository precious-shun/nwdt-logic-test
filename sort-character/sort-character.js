const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const sortCharacters = () => {
  let vowels = "";
  let consonants = "";
  let words = "";

  rl.question("Input one line of words (S) : ", (input) => {
    words = input.toLocaleLowerCase();
    procSeparator(words);
  });

  const procSeparator = (word) => {
    for (let i = 0; i < word.length; i++) {
      if (word[i].match(/[aeiou]/)) {
        vowels += word[i];
      } else {
        consonants += word[i];
      }
    }
  };

  rl.on("close", () => {
    let sortedVowels = vowels.split("").join("");
    let sortedConsonants = consonants.split("").join("");

    console.log("Vowel Characters : ");
    console.log(sortedVowels);
    console.log("Consonant Characters : ");
    console.log(sortedConsonants);
    process.exit(0);
  });
};

sortCharacters();
