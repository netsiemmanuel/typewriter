const sentence = "hello there from lighthouse labs\n";
let time = 0
for (let char of sentence ) {
  setTimeout(() => {
    process.stdout.write(char);
  }, time)
    time = time + 50;

}