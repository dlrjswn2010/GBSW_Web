const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.question("단 수를 입력하세요. : ", function(dan) {
    for (let i = 1; i <= 9; i++) {
        console.log(dan * i);
    }
    rl.close();
});