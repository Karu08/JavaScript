  function press(value) {
    document.getElementById("display").value += value;
  }

  function calculate() {
    let result = eval(document.getElementById("display").value);
    document.getElementById("display").value = result;
  }

  function clearDisplay() {
    document.getElementById("display").value = '';
  }

  function backspace() {
    let display = document.getElementById("display");
    display.value = display.value.slice(0, -1);
  }