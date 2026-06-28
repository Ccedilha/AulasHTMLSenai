
function buscaCEP(){
    let cepDigitado = document.getElementById("cep").value;
    let cepLimpo = cepDigitado.replace(/\D/g, ""); //Remove tudo que nao seja número
    if (cepLimpo === ""){
        return;
    }else if(cepLimpo.length !== 8){ //Se o campo "cep" tiver qualquer quantia de números diferente de 8, o JS volta um alerta e retorna ao começo do código
        alert("CEP inválido");
        return;
    }
    fetch(`https://viacep.com.br/ws/${cepLimpo}/json/`)
    .then(function(resposta){
            return resposta.json();
    })
    .then(function(dados){
        if(dados.erro){
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