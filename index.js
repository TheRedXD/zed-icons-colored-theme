let fs = require("fs");
let readline = require("readline");

let interf = readline.createInterface({ input: process.stdin, output: process.stdout });

interf.question("file: ", (file) => {
    interf.question("color: ", (color) => {
        let read_file = fs.readFileSync(file).toString();
        let replaced = read_file.replaceAll("fill=\"black\"", `fill="${color}"`);
        replaced = replaced.replaceAll("stroke=\"black\"", `stroke="${color}"`);
        fs.writeFileSync(file, replaced);
        process.exit();
    });
});
