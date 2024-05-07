let displayValue = '';
let isNegative = false;

function appendToDisplay(value) {
  displayValue += value;
  document.getElementById('result').value = displayValue;
}

function clearDisplay() {
  displayValue = '';
  isNegative = false;
  document.getElementById('result').value = '';
}

function deleteLastDigit() {
  displayValue = displayValue.slice(0, -1);
  document.getElementById('result').value = displayValue;
}

function toggleSign() {
  isNegative = !isNegative;
  displayValue = (isNegative ? '-' : '') + displayValue.replace(/^-/, '');
  document.getElementById('result').value = displayValue;
}

function calculateResult() {
  try {
    const result = eval(displayValue);
    displayValue = result.toString();
    isNegative = false;
    document.getElementById('result').value = displayValue;
  } catch (error) {
    displayValue = 'Error';
    document.getElementById('result').value = displayValue;
  }
}