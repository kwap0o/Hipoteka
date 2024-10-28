document.addEventListener("DOMContentLoaded", () => {
  const mortgageAmountInput = document.querySelector(
    'input[name="Mortgage_amount"]'
  );
  const termInput = document.querySelector('input[name="years"]');
  const interestRateInput = document.querySelector('input[name="procent"]');
  const repaymentRadio = document.querySelector('input[name="Repayment"]');
  const interestOnlyRadio = document.querySelector(
    'input[name="Interest_only"]'
  );
  const calculateButton = document.querySelector(".Calculate");
  const resultContainer = document.querySelector(".right");

  calculateButton.addEventListener("click", () => {
    const principal = parseFloat(mortgageAmountInput.value);
    const termInYears = parseFloat(termInput.value);
    const annualRate = parseFloat(interestRateInput.value);
    const termInMonths = termInYears * 12;
    const monthlyRate = annualRate / 100 / 12;

    let monthlyPayment;
    let totalRepayment;

    if (repaymentRadio.checked) {
      // Obliczenia dla opcji "Repayment"
      monthlyPayment =
        (principal * (monthlyRate * Math.pow(1 + monthlyRate, termInMonths))) /
        (Math.pow(1 + monthlyRate, termInMonths) - 1);
      totalRepayment = monthlyPayment * termInMonths;
    } else if (interestOnlyRadio.checked) {
      // Obliczenia dla opcji "Interest Only"
      monthlyPayment = principal * monthlyRate;
      totalRepayment = monthlyPayment * termInMonths;
    } else {
      alert("Please select a mortgage type.");
      return;
    }

    // Wyświetlenie wyników
    resultContainer.innerHTML = `
        <h3>Your Results</h3>
        <p>Your results are shown below based on the information you provided. To adjust the restult,edit the form and click "calculate repayments" anain</p>
        <h1>£${monthlyPayment.toFixed(2)}</h1>
        <p>Total you'll repay over the term:</p>
        <h3>£${totalRepayment.toFixed(2)}</h3>
      `;
  });
});
