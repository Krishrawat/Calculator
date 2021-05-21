let num1 = "";
let operator = "";
let decimal = false;

const add = (num1, num2) => {
  return num1 + num2;
};
const subtract = (num1, num2) => {
  return num1 - num2;
};
const multiply = (num1, num2) => {
  return num1 * num2;
};
const divide = (num1, num2) => {
  if (num2 === 0) alert("Division by 0 is not allowed");
  else return num1 / num2;
};
const remainder = (num1, num2) => {
  if (num2 === 0) alert("Division by 0 is not allowed");
  else return num1 % num2;
};

const signInverse = () => {
  const div = document.querySelector(".screen");
  div.innerHTML = (parseInt(div.innerHTML) * -1).toString();
};

const operate = () => {
  const div = document.querySelector(".screen");
  num1 = parseFloat(num1);
  let num2 = parseFloat(div.innerHTML);
  let res = 0;

  if (operator === "+") {
    res = add(num1, num2);
  } else if (operator === "-") {
    res = subtract(num1, num2);
  } else if (operator === "*") res = multiply(num1, num2);
  else if (operator === "/") res = divide(num1, num2);
  else if (operator === "%") res = remainder(num1, num2);
  res = res.toFixed(2).toString();
  console.log(res);

  while (
    res.indexOf(".") != -1 &&
    (res[res.length - 1] === "0" || res[res.length - 1] === ".")
  ) {
    res = res.slice(0, -1);
    console.log(res);
  }
  if (res.length <= 9) {
    div.innerHTML = res;
    num1 = "";
    decimal = false;
  } else alert("cannot display");
  console.log(num1, operator, num2, res);
};

const display = (value) => {
  const div = document.querySelector(".screen");
  if (div.innerHTML.length === 9) alert("Cannot take more than 9 numbers");
  else {
    let val = div.innerHTML.toString();
    if (val.indexOf(".") === -1 && parseInt(div.innerHTML) === 0)
      div.innerHTML = "";
    div.innerHTML += value;
  }
};

const erase = () => {
  const div = document.querySelector(".screen");
  if (div.innerHTML.length > 0) {
    div.innerHTML = div.innerHTML.slice(0, -1);
  }
};

const myDiv = document.querySelector(".grid");

myDiv.addEventListener("click", (e) => {
  if (e.target.id !== "") {
    const key = document.querySelector(`#${e.target.id}`);
    console.log(key.innerHTML);

    if (key.innerHTML >= 0 && key.innerHTML <= 9) {
      if (operator !== "" && num1 === "") {
        num1 = document.querySelector(".screen").innerHTML;
        document.querySelector(".screen").innerHTML = "";
        decimal = false;
        display(key.innerHTML);
      } else {
        display(key.innerHTML);
      }
    } else {
      if (e.target.id === "remove") erase();
      else if (e.target.id === "equals") {
        operate();
        operator = "";
      } else if (e.target.id === "clear")
        document.querySelector(".screen").innerHTML = "";
      else if (e.target.id === "all-clear") {
        document.querySelector(".screen").innerHTML = "";
        num1 = "";
        operator = "";
      } else if (e.target.id === "equals") {
        operate();
      } else if (e.target.id === "signInverse") {
        signInverse();
      } else if (e.target.id === "decimal") {
        if (!decimal) {
          display(".");
          decimal = true;
        }
      } else {
        if (operator === "") operator = `${key.innerHTML}`;
        else {
          operate();
          operator = `${key.innerHTML}`;
        }
      }
    }
  }
});