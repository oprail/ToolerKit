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
  let totalAmount = 0;
  let totalInterest = 0;

  if (interestType === 'simple') {
    totalInterest = (principal * rate * time) / 100;
    totalAmount = principal + totalInterest;
    resultText = `
            Simple Interest: ${totalInterest.toFixed(2)}<br>
            Total Amount: ${totalAmount.toFixed(2)}
        `;
  } else if (interestType === 'compound') {
    totalAmount = principal * Math.pow(1 + rate / 100, time);
    totalInterest = totalAmount - principal;
    resultText = `
            Compound Interest: ${totalInterest.toFixed(2)}<br>
            Total Amount: ${totalAmount.toFixed(2)}
        `;
  }

  // Display the results
  document.getElementById('result').innerHTML = resultText;
}