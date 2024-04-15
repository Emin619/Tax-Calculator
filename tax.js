function calculateTax() {
  var salary = document.getElementById("salary").value;
  var otherIncome = parseFloat(document.getElementById("otherIncome").value);
  var deduction = parseFloat(document.getElementById("deduction").value);
  var age = parseInt(document.getElementById("age").value);

  toggleAlertIcon("salary");
  toggleAlertIcon("deduction");
  toggleAlertIcon("otherIncome");


  var totalIncome = parseFloat(salary) + otherIncome - deduction ;
  var taxRate = 0;
  var taxAmount = 0;

  if (age < 18) {
    document.getElementById("taxResult").innerHTML =
      "Invalid Age. Please enter a valid age (18 or above).";
    return;
  } else if (age > 150) {
    document.getElementById("taxResult").innerHTML =
      "Invalid Age. Please enter a valid age (150 or below).";
    return;
  }

  if (
    isNaN(parseFloat(salary)) ||
    isNaN(parseFloat(otherIncome)) ||
    isNaN(parseFloat(deduction))
  ) {
    document.getElementById("taxResult").innerHTML =
      "Please enter correct values for all fields.";
    return;
  }




  if (totalIncome <= 800000) {
    document.getElementById("taxResult").innerHTML =
      "Congratulations! You don't have to pay any tax this year.";
  } else {
    if (age < 40) {
      taxRate = 0.3;
    } else if (age < 60) {
      taxRate = 0.4;
    } else {
      taxRate = 0.1;
    }
    taxAmount = (totalIncome - 800000) * taxRate;
    document.getElementById("taxResult").innerHTML =
      "Your estimated tax amount is: ₹" + taxAmount.toFixed(2);
  }
}

function toggleAlertIcon(fieldId) {
  var inputField = document.getElementById(fieldId);
  var alertIcon = document.getElementById(`${fieldId}-alert-icon`);

  if (inputField.value.trim() === "") {
    alertIcon.style.display = "none";
  } else if (isNaN(parseFloat(inputField.value))) {
    alertIcon.style.display = "inline-block";
  } else {
    alertIcon.style.display = "none";
  }
}


function resetFields() {
  document.getElementById("salary").value = "";
  document.getElementById("otherIncome").value = "";
  document.getElementById("deduction").value = "";
  document.getElementById("age").value = "";
  document.getElementById("taxResult").innerHTML = "";
  toggleAlertIcon("salary");
  toggleAlertIcon("deduction");
  toggleAlertIcon("otherIncome");
}

document.getElementById("Reset").addEventListener("click", resetFields);