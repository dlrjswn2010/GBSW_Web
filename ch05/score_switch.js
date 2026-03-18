const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.question("점수를 입력하세요. : ", function(score) {

    switch(score) {
        case score > 100 || score < 0 :
            console.log("범위를 벗어났습니다");
            break;
        case score >= 91 :
            console.log("A학점")
            break;
        case score >= 81 :
            console.log("B학점")
            break;
        case score >= 71 :
            console.log("C학점")
            break;
        case score >= 61 :
            console.log("D학점")
            break;
        case score <= 51 :
            console.log("F학점")
            break;
    }
    rl.close();
});