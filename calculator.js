const firstNumberInput = document.getElementById("firstNumber");
const secondNumberInput = document.getElementById("secondNumber");
const resultText = document.getElementById("result");

function calculate(operation) {
  const firstText = firstNumberInput.value.trim();
  const secondText = secondNumberInput.value.trim();

  if (firstText === "" || secondText === "") {
    resultText.textContent = "Please enter both numbers.";
    return;
  }

  const firstNumber = Number(firstText);
  const secondNumber = Number(secondText);

  if (!isFinite(firstNumber) || !isFinite(secondNumber)) {
    resultText.textContent = "Please enter valid numbers.";
    return;
  }

  let answer;

  if (operation === "add") {
    answer = firstNumber + secondNumber;
  } else if (operation === "subtract") {
    answer = firstNumber - secondNumber;
  } else if (operation === "multiply") {
    answer = firstNumber * secondNumber;
  } else if (operation === "divide") {
    if (secondNumber === 0) {
      resultText.textContent = "Cannot divide by zero.";
      return;
    }
    answer = firstNumber / secondNumber;
  }

  resultText.textContent = "Result: " + answer;
}

document.getElementById("addButton").addEventListener("click", function () {
  calculate("add");
});

document.getElementById("subtractButton").addEventListener("click", function () {
  calculate("subtract");
});

document.getElementById("multiplyButton").addEventListener("click", function () {
  calculate("multiply");
});

document.getElementById("divideButton").addEventListener("click", function () {
  calculate("divide");
});
