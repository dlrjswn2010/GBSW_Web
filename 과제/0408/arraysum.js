// 배열 자르기
function solution(numbers, num1, num2) {
  let answer = [];

  for (let i = num1; i <= num2; i++) {
    answer.push(numbers[i]);
  }

  return answer;
}

console.log(solution([1, 2, 3, 4, 5], 1, 3));

// 줄인거
function solution(numbers, num1, num2) {
  return numbers.slice(num1, num2 + 1);
}

console.log(solution([1, 2, 3, 4, 5], 1, 3));

// 배열의 원소 삭제
function solution(arr, del_list) {
  let answer = [];

  for (let i = 0; i < arr.length; i++) {
    if (!del_list.includes(arr[i])) {
      answer.push(arr[i]);
    }
  }

  return answer;
}

console.log(solution([293, 1000, 395, 678, 94], [94, 777, 104, 1000, 1, 12]));

줄인거;
function solution(arr, del_list) {
  return arr.filter((v) => !del_list.includes(v));
}

console.log(solution([293, 1000, 395, 678, 94], [94, 777, 104, 1000, 1, 12]));
