function imprimirNome() {
    let nome = document.getElementById("nome").value;
    let idade = document.getElementById("idade").value;
    let cargo = document.getElementById("cargo").value;
    let temAcessoRestrito = document.getElementById("temAcessoRestrito").checked;

    console.log("======== DADOS DO CRACHÁ VIRTUAL =======");
    console.log("Nome (String): ", nome);
    console.log("Idade (Number): ", idade)
    console.log("Cargo (String): ", cargo)
    console.log("Acesso restrito (Boolean): ", temAcessoRestrito)
    console.log("==========================================")

    window.alert(
        "DADOS DO CRACHÁ\n" +
        "Nome:" + nome + "\n" +
        "Idade:" + idade + "\n" +
        "Cargo: " + cargo + "\n" +
        "Acesso restrito: " + temAcessoRestrito + "\n"
    )

    if (temAcessoRestrito) { 
        window.location.href = "pages/gerente.html"
    } else {
        window.location.href = "pages/funcionario.html"
    }
}