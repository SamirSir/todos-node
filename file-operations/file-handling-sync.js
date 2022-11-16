/**
 * Blocking
 * Synchronous way
 */

const fs = require("fs");

// read operation
const textIn = fs.readFileSync("./docs/input.txt", "utf-8");

console.log({ textIn });

// write operation
fs.writeFileSync(
    "./docs/output.txt",
    `${textIn} Created on ${Date.now()} using fs module.`
);
