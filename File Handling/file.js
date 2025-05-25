
const fs = require("fs");

// Write to file
    // Sync... write call
        fs.writeFileSync('./Test.txt', 'Hey bro ,How are you');

    // Async... write call
        fs.writeFile('./Test.txt', 'Hey bro ,How are you', (er) => { });



// Read from file
    // Sync... read
        // const result = fs.readFileSync("./contact.txt", "utf-8");
        // console.log(result);


    // Async... read
        // fs.readFile("./contact.txt", "utf-8", (err, result) => {
        //     if (err) {
        //         console.log("Error : ", err);
        //     }

        //     else {
        //         console.log(result);
        //     }
        // });
    


// Append to file
    // fs.appendFileSync('./Test.txt', new Date().getDate().toLocaleString());



// Copy a file data and paste in another file
    // fs.cpSync("./contact.txt", "./Test.txt");



// Delete a file
    // fs.unlinkSync("./Test.txt");



// Data about any file
    // console.log(fs.statSync("./contact.txt"));


// Create a directory
    // fs.mkdirSync('my-folder');

