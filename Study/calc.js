// 1부터 n까지 반복하면서,
// 짝수는 더하고, 홀수는 빼는 함수 calc(n)을 작성하시오
// 최종 결과값을 반환하시오.

function calc(n) {
  let sum = 0;
  // 1부터 n까지 반복
  for (let i = 1; i <= n; i++) {
    if (i % 2 == 0) {
      sum += i;
    } else {
      sum -= i;
    }
  }
  return sum;
}

console.log(calc(6));
