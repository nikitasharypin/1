$(document).ready(function() {
  var prevEntry = 0;
  var operation = null;
  var currentEntry = '0';
  updateScreen(currentEntry);
  
  $('.buttons').on('click', function(evt) {
    var buttonPressed = $(this).html();
    console.log(buttonPressed);
	
    if (buttonPressed === '√') {
      currentEntry = Math.sqrt(currentEntry);
    } else if(buttonPressed === 'x²') {
      currentEntry = Math.pow(currentEntry, 2);
    } else if (buttonPressed === '+/-') {
      currentEntry *= -1;
    } else if (buttonPressed === 'C') {
      currentEntry = '0';
    } else if (buttonPressed === '.') {
      currentEntry += '.';
    } else if (isNumber(buttonPressed)) {
      if (currentEntry === '0') currentEntry = buttonPressed;
      else currentEntry = currentEntry + buttonPressed;
    } else if (isOperator(buttonPressed)) {
      prevEntry = currentEntry;
      operation = buttonPressed;
      currentEntry = '';
    } else if (buttonPressed === '=') {
      currentEntry = operate(prevEntry, currentEntry, operation);
      operation = null;
    }
    
    updateScreen(currentEntry);
  });
});

updateScreen = function(displayValue) {
  var displayValue = displayValue.toString();
  $('.inp').prop('value', displayValue.substring(0, 10));
};

isNumber = function(value) {
  return !isNaN(value);
}

isOperator = function(value) {
  return value === '÷' || value === 'x' || value === '+' || value === '-';
};

operate = function(a, b, operation) {
  a = parseFloat(a);
  b = parseFloat(b);
  console.log(a, b, operation);
  if (operation === '+') return a + b;
  if (operation === '-') return a - b;
  if (operation === 'x') return a * b;
  if (operation === '÷') return a / b;
}