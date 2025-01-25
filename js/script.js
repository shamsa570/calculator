
function clearScreen() {
  document.getElementById('result').value = '';
}


function deleteChar() {
  const result = document.getElementById('result');
  result.value = result.value.slice(0, -1);
}


function appendChar(char) {
  document.getElementById('result').value += char;
}


function calculate() {
  const result = document.getElementById('result');
  
  
  let expression = result.value;

  expression = expression.replace(/sin\(([^)]+)\)/g, (match, p1) => `Math.sin(${p1 * Math.PI / 180})`);
  expression = expression.replace(/cos\(([^)]+)\)/g, (match, p1) => `Math.cos(${p1 * Math.PI / 180})`);
  expression = expression.replace(/tan\(([^)]+)\)/g, (match, p1) => `Math.tan(${p1 * Math.PI / 180})`);
  expression = expression.replace(/cot\(([^)]+)\)/g, (match, p1) => `1 / Math.tan(${p1 * Math.PI / 180})`);

  try {

    let calcResult = eval(expression); 

  
    calcResult = Math.round(calcResult * 1e6) / 1e6;  

    result.value = calcResult;
  } catch (error) {
    result.value = 'Error';
  }
}


function sinFunction() {
  appendChar('sin(');  
}

function cosFunction() {
  appendChar('cos('); 
}

function tanFunction() {
  appendChar('tan(');  // Append "tan(" to input
}

function cotFunction() {
  appendChar('cot(');  // Append "cot(" to input
}
