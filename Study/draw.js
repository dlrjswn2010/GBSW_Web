// draw(n) 함수를 작성하시오.
// draw(5)

// *
// **
// ***
// ****
// *****

function draw(number) {
  // 반복문을 중첩해서 사용할 것
  for (let i = 1; i <= number; i++) {
    let str = "";
    // i는 현재 줄을 담당한다.
    for (let j = 1; j <= i; j++) {
      // i번째 줄의 별의 개수를 담당한다.
      str += "*";
      // console.log("*" * j); // js에서는 문자열에 곱셈
    }
    console.log(str);
  }
}
draw(5);
