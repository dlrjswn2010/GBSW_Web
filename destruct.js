// 비구조화 할당

const color = ["R", "G", "B"];
const langs = ["C#", "JS", "JAVA", "PHP", "RUST", "C++", "Kotlin"];

// 전개 연산자 사용하여 배열의 나머지 부분을 처리하거나, 배열끼리 결합 가능
let [first, second, third = "C", ...rest] = langs;
const arr1 = [1, 2];
const arr2 = [3, 4];
const arr3 = [...arr1, ...arr2];

const user = {
  id: "gbsw",
  pw: "1234",
  name: "이건주",
  age: "17",
};

let { id, pw, name, age };
// 구조분해할당을 사용하지 않을때
// let r = color[0];
// let g = color[1];
// let b = color[2];

// 배열이나 객체를 해체하여 변수에 할당하는 것을 비구조화 할당이라고 한다.
// 구조 분해 할당
let [r, g, b] = color;
// [b, g, r] = [r, g, b];
// console.log(r);
// console.log(b);
// console.log(b);

// 대괄호를 사용해 배열 구조 분해 할당
let [r, g, b] = color;

// 표현식에 = {기본값} 형태로 기본값 지정 가능
let [first, second, third = "C", ...rest] = langs;
console.log(rest);

// ,를 이용해 다음 요소로 건너뛰기 가능
let [csharp, , java, php] = langs;

let asdf = 10;
let zxcv = 15;

let { id, pw, name, age } = user;
console.log(age);

// Object에서도 전개 연산자 사용가능
// let { id2, ...others } = user;
// console.log(others);
