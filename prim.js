const primForm = document.querySelector(".prim");
const primFirst = primForm.querySelector(".first");
const primSecond = primForm.querySelector(".second");
const primFirstX = primForm.querySelector(".first input:first-child");
const primFirstY = primForm.querySelector(".first input:last-child");
const primSecondX = primForm.querySelector(".second input:first-child");
const primSecondY = primForm.querySelector(".second input:last-child");
const primResult = primForm.querySelector(".result");

let difY;
let difX;
let primA;
let primB;
let primFirstXValue;
let primFirstYValue;
let primSecondXValue;
let primSecondYValue;

function primDetermination() {
  if (difX === 0 && difY === 0) {
    primResult.innerText = `Please write the different dot.`; //점 좌표가 같으면 실행
  } else if (difX === 0) {
    primResult.innerText = `x = ${primFirstXValue}`; //X값의 차가 0이면 실행
  } else if (difY === 0) {
    primResult.innerText = `y = ${primFirstYValue}`; //Y값의 차가 0이면 실행
  } else {
    if (primA === 1) {
      primA = ""; //기울기가 1이면 숫자 없앰
    } else if (primA === -1) {
      primA = "-"; //기울기가 -1이면 숫자 없앰
    }
    if (primB > 0) {
      primResult.innerText = `y = ${primA}x + ${primB}`; //y절편이 양수이면 그대로 출력
    } else if (primB === 0) {
      primResult.innerText = `y = ${primA}x`; //y절편이 0이면 y절편 제외하고 출력
    } else {
      primResult.innerText = `y = ${primA}x - ${0 - primB}`; //y절편이 음수이면 +를 -로 출력
    }
  }
}

function primSubmit(event) {
  event.preventDefault(); //form에서 submit event를 막음
  primFirstXValue = parseFloat(primFirstX.value);
  primFirstYValue = parseFloat(primFirstY.value);
  primSecondXValue = parseFloat(primSecondX.value);
  primSecondYValue = parseFloat(primSecondY.value);
  //input 값 실수형으로 저장
  if (
    isNaN(primFirstXValue) ||
    isNaN(primFirstYValue) ||
    isNaN(primSecondXValue) ||
    isNaN(primSecondYValue)
  ) {
    primResult.innerText = "Please write primA number."; //숫자 입력받았는지 계산
  } else {
    difY = primSecondYValue - primFirstYValue;
    difX = primSecondXValue - primFirstXValue;
    primA = difY / difX;
    primB = primFirstYValue - primA * primFirstXValue;
    //기울기와 y절편 정의
    primDetermination();
  }
}

primForm.addEventListener("submit", primSubmit); //form에서 submit event가 발생했을때 Submit() 실행
