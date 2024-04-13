function calculateTax() {
    var salary = parseFloat(document.getElementById("salary").value);
    var otherIncome = parseFloat(document.getElementById("otherIncome").value);
    var age = parseInt(document.getElementById("age").value);
    var totalIncome = salary + otherIncome;
    var taxRate = 0;
    var taxAmount = 0;
  

    if (age < 18) {
      document.getElementById("taxResult").innerHTML = "Invalid Age. Please enter a valid age (18 or above).";
      return;
    } else if (age > 150) {
        document.getElementById("taxResult").innerHTML = "Invalid Age. Please enter a valid age (150 or below).";
        return;  
    }
  

    if (totalIncome <= 800000) {
      taxResult.innerHTML = "Congratulations! You don't have to pay any tax this year.";
    } else {
     
      if (age < 40) {
        taxRate = 0.3;
      } else if (age < 60) {
        taxRate = 0.4;
      } else {
        taxRate = 0.1;
      }
  
      
      taxAmount = (totalIncome - 800000) * taxRate;
      document.getElementById("taxResult").innerHTML = "Your estimated tax amount is: ₹" + taxAmount.toFixed(2);
    }
  }
  function resetFields() {
    document.getElementById("salary").value = "";
    document.getElementById("otherIncome").value = "";
    document.getElementById("age").value = "";
    document.getElementById("taxResult").innerHTML = "";
}
document.getElementById("Reset").addEventListener("click", resetFields);