// 1 ~ 10 내의 홀수만 출력하겠다.

let i = 0;
while(i < 10) {
    // i가 짝수일때 continue;
    i++;
    if (i % 2 == 0) {
        continue;
    }
    console.log(i)
}
