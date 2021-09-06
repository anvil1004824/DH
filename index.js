const form = document.querySelector(".graph");
const first = document.querySelector(".first");
const second = document.querySelector(".second");
const third = document.querySelector(".third");
const firstX = document.querySelector(".first input:first-child");
const firstY = document.querySelector(".first input:last-child");
const secondX = document.querySelector(".second input:first-child");
const secondY = document.querySelector(".second input:last-child");
const thirdX = document.querySelector(".third input:first-child");
const thirdY = document.querySelector(".third input:last-child");
const result = document.querySelector(".result");

let firstXValue;
let firstYValue;
let secondXValue;
let secondYValue;
let thirdXValue;
let thirdYValue;

let a;
let b;
let c;
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

function Determination() {
  a = yDif3 / aDif3;
  b = (yDif1 - aDif1 * a) / bDif1;
  c = firstYValue - firstXValue ** 2 * a - firstXValue * b;
  if (
    (bDif1 === 0 && yDif1 === 0) ||
    (bDif2 === 0 && yDif2 === 0) ||
    (otDifX === 0 && otDifY === 0)
  ) {
    result.innerText = "Please write three different dots.";
  } else if (bDif1 === 0 || bDif2 === 0 || otDifX === 0) {
    result.innerText = "These are not the dots of quadratic function";
  } else {
    if (c > 0) cStr = ` + ${c}`;
    else if (c === 0) cStr = "";
    else cStr = ` - ${0 - c}`;

    if (b === 1) bStr = ` + x`;
    else if (b > 0) bStr = ` + ${b}x`;
    else if (b === 0) bStr = "";
    else bStr = ` - ${0 - b}x`;

    if (a === 1) aStr = `x²`;
    else if (a > 0 || a < 0) aStr = `${a}x²`;
    else {
      aStr = "";
      if (b === 1) bStr = "x";
      else if (b > 0 || b > 0) bStr = `${b}x`;
      else {
        bStr = "";
        if (c > 0 || c < 0) cStr = `${c}`;
      }
    }
    result.innerText = `y = ${aStr}${bStr}${cStr}`;
  }
}

function Submit(event) {
  event.preventDefault(); //form에서 submit event를 막음
  firstXValue = parseFloat(firstX.value);
  firstYValue = parseFloat(firstY.value);
  secondXValue = parseFloat(secondX.value);
  secondYValue = parseFloat(secondY.value);
  thirdXValue = parseFloat(thirdX.value);
  thirdYValue = parseFloat(thirdY.value);
  //input 값 실수형으로 저장
  if (
    isNaN(firstXValue) ||
    isNaN(firstYValue) ||
    isNaN(secondXValue) ||
    isNaN(secondYValue) ||
    isNaN(thirdXValue) ||
    isNaN(thirdYValue)
  ) {
    result.innerText = "Please write a number."; //숫자 입력받았는지 계산
  } else {
    aDif1 = firstXValue ** 2 - secondXValue ** 2;
    bDif1 = firstXValue - secondXValue;
    yDif1 = firstYValue - secondYValue;
    aDif2 = secondXValue ** 2 - thirdXValue ** 2;
    bDif2 = secondXValue - thirdXValue;
    yDif2 = secondYValue - thirdYValue;
    otDifX = firstXValue - thirdXValue;
    otDifY = firstYValue - thirdYValue;
    aDif3 = aDif1 - aDif2 * (bDif1 / bDif2);
    yDif3 = yDif1 - yDif2 * (bDif1 / bDif2);
    Determination();
  }
}

form.addEventListener("submit", Submit); //form에서 submit event가 발생했을때 Submit() 실행
