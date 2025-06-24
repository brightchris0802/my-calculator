function calculate() {
    const num1 = parseFloat(document.getElementById("num1").value);
    const num2 = parseFloat(document.getElementById("num2").value);

    if (isNaN(num1) || isNaN(num2)) {
        document.getElementById("result").textContent = "숫자를 올바르게 입력하세요.";
        return;
    }

    const sum = num1 + num2;
    const product = num1 * num2;

    document.getElementById("result").textContent =
        `덧셈 결과: ${sum}, 곱셈 결과: ${product}`;
}
