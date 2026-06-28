
function buscaCEP(){
    let cepDigitado = document.getElementById("cep").value;

    if (cepDigitado === ""){
        return;
    }
    let cepLimpo = cepDigitado.replace(/\D/g, "");
    fetch(`https://viacep.com.br/ws/${cepLimpo}/json/`)
    .then(function(resposta){
            return resposta.json();
    })
    .then(function(dados){
        if(dados.erro || cepDigitado.length < 8 || cepDigitado.length > 9){
            alert("CEP não encontrado")
            return;
        }
        document.getElementById("rua").value = dados.logradouro;
        document.getElementById("bairro").value = dados.bairro;
        document.getElementById("cidade").value = dados.localidade;
        document.getElementById("uf").value = dados.uf;
    })
}

const campoCEP = document.getElementById("cep");
campoCEP.addEventListener('focusout', buscaCEP);