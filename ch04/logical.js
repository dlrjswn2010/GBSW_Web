const isLogin = true;
const isAdmin = false;

// &&(And) 연산 -> 모둔 항이 참이어야 true 반환
console.log(isLogin && isAdmin); // false

// ||(OR) 연산 -> 둘 중 하나만 참이어도 true 반환
console.log(true || false); // true
console.log(false || false); // false

let id = "asdf";
let pw = "1234";
let correctId = "asdf"
let correctPw = "1234"

let result = (id === correctId && pw === correctPw)
 ? "로그인되었습니다." : "아이디 또는 비밀번호가 틀렸습니다.";

 console.log(result)

 // ! 뒤에 오는 값을 반전시킨다.
 console.log(!true);
 console.log(!false);
 
 // ?? - Nullish 병합 연산자
 // data ?? default -> data가 null이거나 undefined인 경우, default를 반환.
 let email = "jmt";
 let result2 = (id !== null && email !== undefined) ? "이메일 확인" : "이메일 입력되지 않음"
 let result3 = (email ?? null) ?  "이메일 확인" : "이메일 입력되지 않음"

 console.log(result2)
 console.log(result3)
 console.log(null ?? "기본값"); // 기본값
 console.log(undefined ?? "기본값"); // 기본값
 console.log("안녕하세요" ?? "기본값"); // 기본값