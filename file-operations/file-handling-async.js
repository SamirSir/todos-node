const fs = require("fs");

/**
 * Non-blocking
 * Asynchronous way
 */
fs.readFile("./docs/key.txt", "utf-8", (error, data1) => {
    fs.readFile(`./docs/${data1}.txt`, "utf-8", (error, data2) => {
        fs.readFile("./docs/guest-list.txt", "utf-8", (error, data3) => {
            fs.writeFile(
                "./docs/people.txt",
                data2 + "\n" + data3,
                "utf-8",
                (error) => {
                    if (error) console.log(error);
                }
            );
        });
    });
});

console.log("File handling is being done");
