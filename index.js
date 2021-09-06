const form = document.querySelector(".graph");
const first = document.querySelector(".first");
const second = document.querySelector(".second");
const firstX = document.querySelector(".first input:first-child");
const firstY = document.querySelector(".first input:last-child");
const secondX = document.querySelector(".second input:first-child");
const secondY = document.querySelector(".second input:last-child");
const result = document.querySelector(".result");

let difY;
let difX;
let a;
let b;
let firstXValue;
let firstYValue;
let secondXValue;
let secondYValue;

function Determination() {
  if (difX === 0 && difY === 0) {
    result.innerText = `Please write the different dot.`; //점 좌표가 같으면 실행
  } else if (difX === 0) {
    result.innerText = `x = ${firstXValue}`; //X값의 차가 0이면 실행
  } else if (difY === 0) {
    result.innerText = `y = ${firstYValue}`; //Y값의 차가 0이면 실행
  } else {
    if (a === 1) {
      a = ""; //기울기가 1이면 숫자 없앰
    } else if (a === -1) {
      a = "-"; //기울기가 -1이면 숫자 없앰
    }
    if (b > 0) {
      result.innerText = `y = ${a}x + ${b}`; //y절편이 양수이면 그대로 출력
    } else if (b === 0) {
      result.innerText = `y = ${a}x`; //y절편이 0이면 y절편 제외하고 출력
    } else {
      result.innerText = `y = ${a}x - ${0 - b}`; //y절편이 음수이면 +를 -로 출력
    }
  }
}

function Submit(event) {
  event.preventDefault(); //form에서 submit event를 막음
  firstXValue = parseFloat(firstX.value);
  firstYValue = parseFloat(firstY.value);
  secondXValue = parseFloat(secondX.value);
  secondYValue = parseFloat(secondY.value);
  //input 값 실수형으로 저장
  if (
    isNaN(firstXValue) ||
    isNaN(firstYValue) ||
    isNaN(secondXValue) ||
    isNaN(secondYValue)
  ) {
    result.innerText = "Please write a number."; //숫자 입력받았는지 계산
  } else {
    difY = secondYValue - firstYValue;
    difX = secondXValue - firstXValue;
    a = difY / difX;
    b = firstYValue - a * firstXValue;
    //기울기와 y절편 정의
    Determination();
  }
}

form.addEventListener("submit", Submit); //form에서 submit event가 발생했을때 Submit() 실행
