const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const sortCharacters = () => {
  let vowels = "";
  let consonants = "";
  let sortedVowels = "";
  let sortedConsonants = "";
  let words = "";

  rl.question("Input one line of words (S) : ", (input) => {
    words = input.toLocaleLowerCase();
    procSeparator(words);
  });

  const procSeparator = (word) => {
    for (let i = 0; i < word.length; i++) {
      if (word[i].match(/[aeiou]/)) {
        vowels += word[i];
      } else if (word[i].match(/[a-z]/)) {
        consonants += word[i];
      }
    }
    rl.close();
  };

  const sortByAppearanceVowel = () => {
    for (let i = 0; i < vowels.length; i++) {
      if (!sortedVowels.includes(vowels[i])) {
        for (let j = 0; j < vowels.length; j++) {
          if (vowels[j] === vowels[i]) {
            sortedVowels += vowels[j];
          }
        }
      }
    }
  };

  const sortByAppearanceConsonant = () => {
    for (let i = 0; i < consonants.length; i++) {
      if (!sortedConsonants.includes(consonants[i])) {
        for (let j = 0; j < consonants.length; j++) {
          if (consonants[j] === consonants[i]) {
            sortedConsonants += consonants[j];
          }
        }
      }
    }
  };

  rl.on("close", () => {
    sortByAppearanceVowel();
    sortByAppearanceConsonant();

    console.log("Vowel Characters : ");
    console.log(sortedVowels);
    console.log("Consonant Characters : ");
    console.log(sortedConsonants);
    process.exit(0);
  });
};

sortCharacters();
