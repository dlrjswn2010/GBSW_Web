function solution(money) {
  let count = Math.floor(money / 5500);
  let change = money % 5500;
  return [count, change];
}
