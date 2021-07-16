const fs = require("fs");

// asynchronous
fs.readFile("./hello.txt", (err, data) => {
  if (err) throw new Error();
  // .toString() does 'utf-8' encoding by default
  console.log("Async", data.toString());
});

// synchronous
const file = fs.readFileSync("./hello.txt");
console.log("Sync", file.toString());

// APPEND METHOD
// ------------------------------------------------
// if it doesn't exist, it will create the file.
// but it does exist.  so it will not create it
fs.appendFile("./hello.txt", " This is super cool", (err) => {
  if (err) console.log(err);
});

// WRITE
fs.writeFile("./bye.txt", "Sad to see you go", (err) => {
  if (err) console.log(err);
});

// DELETE
fs.unlink("./bye.txt", (err) => {
  if (err) console.log(err);
  console.log('inception');
});
