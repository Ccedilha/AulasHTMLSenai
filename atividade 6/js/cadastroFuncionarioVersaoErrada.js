const funcionarios = [];
function cadastrarFuncionario() {
    let nomeFuncionario = document.getElementById("nome-funcionario").value.trim();
    let horario = document.getElementById("horas-funcionario").value.trim();
    let cargo = document.getElementById("cargo-funcionario").value.trim();
    
    if (nomeFuncionario === "" || cargo === "") {
        alert("Por favor, preencha todos os campos.");
        return;
    }

    let funcionarioCadastrado = {
        nome: nomeFuncionario,
        horas: horario,
        cargo: cargo
    };
    funcionarios.push(funcionarioCadastrado);
    localStorage.setItem("funcionarios", JSON.stringify(funcionarios))
    
    console.log(funcionarios);
}