function calculateInterest() {
  const principal = parseFloat(document.getElementById('principal').value);
  const rate = parseFloat(document.getElementById('rate').value);
  const time = parseFloat(document.getElementById('time').value);
  const interestType = document.getElementById('interestType').value;

  if (isNaN(principal) || isNaN(rate) || isNaN(time)) {
    document.getElementById('result').textContent = 'Please enter valid numbers for all fields.';
    return;
  }

  let resultText = '';

  if (interestType === 'simple') {
    const simpleInterest = (principal * rate * time) / 100;
    resultText = `Simple Interest: ${simpleInterest.toFixed(2)}`;
  } else if (interestType === 'compound') {
    const compoundInterest = principal * Math.pow(1 + rate / 100, time) - principal;
    resultText = `Compound Interest: ${compoundInterest.toFixed(2)}`;
  }

  document.getElementById('result').textContent = resultText;
}