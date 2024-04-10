// AREA OF TRAPEZOID

// Variables
let calcBtn = document.getElementById("calcbtn");

// Event Listener
calcBtn.addEventListener("click", calculateArea);

// Event Function

function calculateArea() {
  // Input
  let topBase = +document.getElementById("b1-in").value;
  let bottomBase = +document.getElementById("b2-in").value;
  let height = +document.getElementById("h-in").value;

  // Process
  let area = ((topBase + bottomBase) / 2) * height;

  // Output
  let areaOutput = document.getElementById("output");
  areaOutput.innerHTML = area;
  areaOutput.style.fontWeight = "bold";
}
