function press(value) {
    document.getElementById("display").value += value;
}

function calculate() {
    try {
        const result = eval(document.getElementById("display").value);
        document.getElementById("display").value = result;
    } catch {
        document.getElementById("display").value = "에러";
    }
}

function clearDisplay() {
    document.getElementById("display").value = "";
}
