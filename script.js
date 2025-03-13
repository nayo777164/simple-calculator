// Function to add clicked button value to the display
function appendValue(value) {
  document.getElementById("display").value += value;
}

// Function to clear the display
function clearDisplay() {
  document.getElementById("display").value = "";
}

// Function to calculate the result
function calculateResult() {
  try {
      document.getElementById("display").value = eval(document.getElementById("display").value);
  } catch {
      document.getElementById("display").value = "Error";
  }
}
// Listen for keyboard input
document.addEventListener("keydown", function (event) {
  let key = event.key;

  // Check if key is a number or operator
  if (!isNaN(key) || "+-*/.".includes(key)) {
      appendValue(key);
  } else if (key === "Enter") {
      calculateResult();
  } else if (key === "Backspace") {
      backspace();
  } else if (key === "Escape") {
      clearDisplay();
  }
});

// Function to delete the last character (Backspace)
function backspace() {
  let display = document.getElementById("display");
  display.value = display.value.slice(0, -1); // Remove last character
}
