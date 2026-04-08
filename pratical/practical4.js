function generateTable() {
    let n = Number(document.getElementById("num").value);
    let output = "";

    for (let i = 1; i <= 10; i++) {
        output += n + " × " + i + " = " + (n * i) + "<br>";
    }

    document.getElementById("result").innerHTML = output;
}