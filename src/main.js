import ReadLine from 'readline';
import { logQuizOptions, handleOptions } from './quizOptions';
//const readline = require("readline");
const ac = new AbortController();
const signal = ac.signal;

const rl = ReadLine.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function handleSelection() {

}

signal.addEventListener(
    "abort",
    () => {
      console.log("The name question timed out!");
    },
    { once: true }
  );
  
setTimeout(() => {
    ac.abort();
    process.exit();
}, 10000); // 10 seconds

function main() {
    console.log('Hello, thank you for using this quiz generator.')
    console.log('Please pick from the avaliable options: ');
    logQuizOptions();
    const options = rl.question('Enter your option: ', { signal },  function (answer) {
        return answer;
    });

    console.log(options);

    const result = handleOptions(options);
    console.log('Result is: ' + result);
}

main();