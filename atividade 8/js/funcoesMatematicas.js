const historico = []
const historicoImposto = []
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
function impostron2000() {
    let num3 = document.getElementById("num3").value;
    let resultadoImposto;

    if (Number(num3) >= 50){
        resultadoImposto = (Number(num3) * 1.2) * 1.9
    }else{
        resultadoImposto = Number(num3) * 1.2
    }

    document.getElementById("resultadoImposto").innerText = resultadoImposto.toFixed(2)
    historicoImportacao("calculaImposto", num3, resultadoImposto)
}
function salvarHistorico(nomeDaFuncao, num1, num2, resultado) {
    let historicoCalculos = {
        funcao: nomeDaFuncao,
        numero_1: num1,
        numero_2: num2,
        resultado: resultado
    };
    historico.push(historicoCalculos);
    localStorage.setItem("historico", JSON.stringify(historico))

    console.log(historico);
}
function historicoImportacao(nomeDaFuncao, num3, resultadoImposto){
        let historicoImportacao = {
        funcao: nomeDaFuncao,
        valorInicial: num3,
        valorFinal: resultadoImposto.toFixed(2)
    };
    historicoImposto.push(historicoImportacao);
    localStorage.setItem("historicoImposto", JSON.stringify(historicoImposto))

    console.log(historicoImposto);
}
function apagarLocalStorage(){
    let confirmaApagar = window.confirm("Você deseja apagar seu histórico?")
    if(confirmaApagar){
        localStorage.clear();
}
}