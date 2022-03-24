// 랜덤번호 저장 변수 1.유저는 숫자를 입력할 수 있다(STEP 코드 완)
// document.getElementById : 메서드는 주어진 문자열과 일치하는 id 속성을 가진 요소를 찾고, 이를 나타내는 Element 객체를 반환합니다
let computerNum = 0;
let playButton = document.getElementById("play-Button"); // go 클릭 했을대 클릭 이벤트 호출
let userInput = document.getElementById("user-input");
let resultArea = document.getElementById("result-area");
let resetButton = document.getElementById("reset-button");
let chances = 5;
let gameOver = false;
let chanceArea = document.getElementById("chance-area");
let history = [];

playButton.addEventListener("click", play);
resetButton.addEventListener("click", reset);
userInput.addEventListener("focus", function () {
  userInput.value = "";
});

// play 함수도 매개변수로 넘길 수 있다 매개변수는()를 뺴야된다.
// reset 버튼을 클릭하는 이벤트 호출
// focuse 이벤트를 통해 유저가 클릭을 했을시 숫자가 사라진다.
function pickRandomNum() {
  computerNum = Math.floor(Math.random() * 100) + 1;
  // Math.random() 함수는 0~1사이에 있는 소수를 호출시킨다.
  // Math.floo() 함수를 통해 정수로 변환(소수점 뒤에 두자리 제거)
  console.log("정답", computerNum);
}
pickRandomNum();

function play() {
  let userValue = userInput.value;
  if (userValue < 1 || userValue > 100) {
    resultArea.textContent = "1과100사이 숫자를 입력해 주세요.";
    return;
  }

  if (history.includes(userValue)) {
    resultArea.textContent =
      "이미 입력한 숫자입니다. 다른 숫자를 입력해 주세요.";
    return;
  }
  chances--; // chances가 1씩 줄어든다
  chanceArea.textContent = `남은기회:${chances}번`; // chances 정적인 값"" 대신 `$[]동적인 값으로 `

  if (userValue < computerNum) {
    resultArea.textContent = "UP!!";
  } else if (userValue > computerNum) {
    resultArea.textContent = "DOWN!!";
  } else {
    resultArea.textContent = "정답";
    gameOver = true;
  }

  history.push(userValue);

  if (chances < 1) {
    gameOver = true;
  }
  if (gameOver == true) {
    playButton.disabled = true;
  }
}

function reset() {
  // reset을 하면 input창이 깨긋하게 정리되고,새로운 번호가 생성되고
  userInput.value = "";
  pickRandomNum();
  resultArea.textContent = "결과값이 나옵니다.";
}
pickRandomNum();
