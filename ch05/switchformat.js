const { constants } = require("buffer");
const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.question("C 드라이브르 포멧하시겠습니까? : ", function(ch) {
    switch(ch) {
        case 'y' : 
            console.log("포멧하겠습니까?");
            break;
        case 'n' :
            console.log("포멧하지 않겠습니다.");
            break;
        default: console.log("유효하지 않은 문자입니다.");
        break;
    }
    rl.close();
});