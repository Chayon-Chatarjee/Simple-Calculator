function appendValue(value) {
  document.getElementById("display").value += value;
}

function clearDisplay() {
  document.getElementById("display").value = "";
}

function deleteLast() {
  let current = document.getElementById("display").value;
  document.getElementById("display").value = current.slice(0, -1);
}

function calculate() {
  try {
    let result = eval(document.getElementById("display").value);
    document.getElementById("display").value = result;
  } catch {
    document.getElementById("display").value = "Error";
  }
}

function squareRoot() {
  try {
    let current = document.getElementById("display").value;
    if (current === "") return;
    let result = Math.sqrt(eval(current));
    document.getElementById("display").value = result;
  } catch {
    document.getElementById("display").value = "Error";
  }
}
