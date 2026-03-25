// 2중 for 문을 사용해 2단 ~ 9단 구구단을 출력하세요

for (let i = 2; i <= 9; i++) {
    for (let j = 1; j <= 9; j++) {
        console.log(`${i} x ${j} = ${i * j}`);
    }
}