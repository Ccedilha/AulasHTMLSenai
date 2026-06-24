const historico = []

function soma() {
    let num1 = document.getElementById("num1").value;
    let num2 = document.getElementById("num2").value;

    let resultado = Number(num1) + Number(num2);

    document.getElementById("resultado").innerText = resultado
    salvarHistorico("Soma", num1, num2, resultado)
}
function subtracao() {
    let num1 = document.getElementById("num1").value;
    let num2 = document.getElementById("num2").value;

    let resultado = Number(num1) - Number(num2);

    document.getElementById("resultado").innerText = resultado
    salvarHistorico("Subtração", num1, num2, resultado)
}
function multiplicacao() {
    let num1 = document.getElementById("num1").value;
    let num2 = document.getElementById("num2").value;

    let resultado = Number(num1) * Number(num2);

    document.getElementById("resultado").innerText = resultado
    salvarHistorico("Multiplicação", num1, num2, resultado)
}
function divisao() {
    let num1 = document.getElementById("num1").value;
    let num2 = document.getElementById("num2").value;

    let resultado = Number(num1) / Number(num2);

    document.getElementById("resultado").innerText = resultado
    salvarHistorico("Divisão", num1, num2, resultado)
}
function salvarHistorico(nomeDaFuncao, num1, num2, resultado) {
    let historicoSalvo = {
        funcao: nomeDaFuncao,
        numero_1: num1,
        numero_2: num2,
        resultado: resultado
    };
    historico.push(historicoSalvo);
    localStorage.setItem("historico", JSON.stringify(historico))

    console.log(historico);
}
