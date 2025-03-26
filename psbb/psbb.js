const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const passangersAllocation = () => {
  let numberOfFamilies = 0;
  let numberOfMembersEachFamily = [];

  const inputNumberOfFamilies = () => {
    rl.question(" * Input the number of families : ", (input) => {
      numberOfFamilies = Number(input);
      inputNumberOfFamilyMembers();
    });
  };

  const inputNumberOfFamilyMembers = () => {
    rl.question(
      " * Input the number of members for each family : ",
      (input) => {
        numberOfMembersEachFamily = input.split(" ").map(Number);
        defineNumberOfBus();
      }
    );
  };

  const defineNumberOfBus = () => {
    if (numberOfFamilies !== numberOfMembersEachFamily.length) {
      console.log(" --> Input must be equal with count of family");
      inputNumberOfFamilies();
    } else {
      let bus = 0;
      let totalPassangers = 0;
      let busCapacity = 4;

      for (let i = 0; i < numberOfMembersEachFamily.length; i++) {
        totalPassangers += numberOfMembersEachFamily[i];
      }

      if (totalPassangers % busCapacity === 0) {
        bus = totalPassangers / busCapacity;
      } else {
        bus = Math.floor(totalPassangers / busCapacity) + 1;
      }

      console.log(` --> Minimum bus required is : ${bus}`);
      restartConfirmation();
    }
  };

  const restartConfirmation = () => {
    rl.question(" * Do you want to try again? (yes/no) : ", (input) => {
      if (input.toLowerCase() === "yes") {
        start();
      } else if (input.toLowerCase() === "no") {
        rl.close();
      } else {
        console.log("Invalid input!");
        restartConfirmation();
      }
    });
  };

  const start = () => {
    inputNumberOfFamilies();
  };

  start();
};

passangersAllocation();
