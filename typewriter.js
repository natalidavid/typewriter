const sentence = "hello there from lighthouse labs";

let i = 0; // start at 0;
for (let char of sentence) {
  setTimeout(() => {
    process.stdout.write(char);
  }, i); // starting time interval here
  i += 50; //increment time by 50ms
}

setTimeout(() => {
  process.stdout.write("\n"); //add new character at the end of string
}, i);

//grab index
//assign 50ms to each -> but increment by 50
