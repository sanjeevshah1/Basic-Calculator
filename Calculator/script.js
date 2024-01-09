const display1 = document.querySelector(".exp");
const display2 = document.querySelector(".ans");
let answer = 0;
let expression = "";

const handleNumberClick = (number) => {
  display1.innerText += `${number}`;
  expression += `${number}`;
};
const handleOperatorClick = (operator) => {
  display1.innerText += ` ${operator} `;
  expression += `${operator}`;
};

for (let i = 0; i <= 9; i++) {
  document.querySelector(`.num${i}`).addEventListener("click", () => {
    handleNumberClick(i);
  });
}

document.querySelector(".numd").addEventListener("click", () => {
  handleNumberClick(`.`);
});

document.querySelector(".add").addEventListener("click", () => {
  handleOperatorClick("+");
});

document.querySelector(".sub").addEventListener("click", () => {
  handleOperatorClick("-");
});

document.querySelector(".mul").addEventListener("click", () => {
  display1.innerText += " x ";
  expression += "*";
});

document.querySelector(".div").addEventListener("click", () => {
  handleOperatorClick("/");
});

document.querySelector(".equal").addEventListener("click", () => {
  answer = eval(expression);
  display2.innerText = answer;
});

document.querySelector(".clear").addEventListener("click", () => {
  expression = "";
  answer = 0;
  display1.innerText = "";
  display2.innerText = "";
});
