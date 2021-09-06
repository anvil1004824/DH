const quadForm = document.querySelector(".quad");
const quadFirst = quadForm.querySelector(".first");
const quadSecond = quadForm.querySelector(".second");
const quadThird = quadForm.querySelector(".third");
const quadFirstX = quadForm.querySelector(".first input:first-child");
const quadFirstY = quadForm.querySelector(".first input:last-child");
const quadSecondX = quadForm.querySelector(".second input:first-child");
const quadSecondY = quadForm.querySelector(".second input:last-child");
const quadThirdX = quadForm.querySelector(".third input:first-child");
const quadThirdY = quadForm.querySelector(".third input:last-child");
const quadResult = quadForm.querySelector(".result");

let quadFirstXValue;
let quadFirstYValue;
let quadSecondXValue;
let quadSecondYValue;
let quadThirdXValue;
let quadThirdYValue;

let quadA;
let quadB;
let quadC;
let aDif1;
let aDif2;
let aDif3;
let bDif1;
let bDif2;
let yDif1;
let yDif2;
let yDif3;
let otDifX;
let otDifY;
let aStr;
let bStr;
let cStr;

function quadDetermination() {
  quadA = yDif3 / aDif3;
  quadB = (yDif1 - aDif1 * quadA) / bDif1;
  quadC =
    quadFirstYValue - quadFirstXValue ** 2 * quadA - quadFirstXValue * quadB;
  if (
    (bDif1 === 0 && yDif1 === 0) ||
    (bDif2 === 0 && yDif2 === 0) ||
    (otDifX === 0 && otDifY === 0)
  ) {
    quadResult.innerText = "Please write three different dots.";
  } else if (bDif1 === 0 || bDif2 === 0 || otDifX === 0) {
    quadResult.innerText = "These are not the dots of quadratic function";
  } else {
    if (quadC > 0) cStr = ` + ${quadC}`;
    else if (quadC === 0) cStr = "";
    else cStr = ` - ${0 - quadC}`;

    if (quadB === 1) bStr = " + x";
    else if (quadB === -1) bStr = " - x";
    else if (quadB > 0) bStr = ` + ${quadB}x`;
    else if (quadB === 0) bStr = "";
    else bStr = ` - ${0 - quadB}x`;

    if (quadA === 1) aStr = `x²`;
    else if (quadA === -1) aStr = `-x²`;
    else if (quadA > 0 || quadA < 0) aStr = `${quadA}x²`;
    else {
      aStr = "";
      if (quadB === 1) bStr = "x";
      else if (quadB === -1) bStr = "-x";
      else if (quadB > 0 || quadB > 0) bStr = `${quadB}x`;
      else {
        bStr = "";
        if (quadC > 0 || quadC < 0) cStr = `${quadC}`;
      }
    }
    quadResult.innerText = `y = ${aStr}${bStr}${cStr}`;
  }
}

function quadSubmit(event) {
  event.preventDefault(); //form에서 submit event를 막음
  quadFirstXValue = parseFloat(quadFirstX.value);
  quadFirstYValue = parseFloat(quadFirstY.value);
  quadSecondXValue = parseFloat(quadSecondX.value);
  quadSecondYValue = parseFloat(quadSecondY.value);
  quadThirdXValue = parseFloat(quadThirdX.value);
  quadThirdYValue = parseFloat(quadThirdY.value);
  //input 값 실수형으로 저장
  if (
    isNaN(quadFirstXValue) ||
    isNaN(quadFirstYValue) ||
    isNaN(quadSecondXValue) ||
    isNaN(quadSecondYValue) ||
    isNaN(quadThirdXValue) ||
    isNaN(quadThirdYValue)
  ) {
    quadResult.innerText = "Please write quadA number."; //숫자 입력받았는지 계산
  } else {
    aDif1 = quadFirstXValue ** 2 - quadSecondXValue ** 2;
    bDif1 = quadFirstXValue - quadSecondXValue;
    yDif1 = quadFirstYValue - quadSecondYValue;
    aDif2 = quadSecondXValue ** 2 - quadThirdXValue ** 2;
    bDif2 = quadSecondXValue - quadThirdXValue;
    yDif2 = quadSecondYValue - quadThirdYValue;
    otDifX = quadFirstXValue - quadThirdXValue;
    otDifY = quadFirstYValue - quadThirdYValue;
    aDif3 = aDif1 - aDif2 * (bDif1 / bDif2);
    yDif3 = yDif1 - yDif2 * (bDif1 / bDif2);
    quadDetermination();
  }
}

quadForm.addEventListener("submit", quadSubmit); //form에서 submit event가 발생했을때 Submit() 실행
