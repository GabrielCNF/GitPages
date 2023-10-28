const botao1 = document.querySelector('#q1_executa');
const botao2 = document.querySelector('#q2_executa');
const botao3 = document.querySelector('#q3_executa');
const botao4 = document.querySelector('#q4_executa');
const botao5 = document.querySelector('#q5_executa');

botao1.onclick = function() {
    const iptFrase = document.querySelector('#q1_frase');
    const divResposta = document.querySelector("#q1_resposta");
    // const divRespostaInversa = document.querySelector("#respostaInvertida");
    console.log(iptFrase)
    console.log(divResposta)
    let frase = iptFrase.value;
    let vogais = ["a","á","à","ã","â","e","é","è","ê","i","í","ì","î","o","ó","ò","õ","ô","u","ú","ù","û"];

    let count = 0;

    for (let i = 0; i < frase.length; i++) {
        if (vogais.includes(frase[i].toLowerCase())) {
            count++;
        }
    }

    let resposta = "O valor digitado é: " + iptFrase.value + "<br>Quantidade de vogais: " + count;
    divResposta.innerHTML = resposta;
}

    function stringInvertida(str){
        return str.split("").reverse().join("");
    }

    let respostaInversa = stringInvertida(frase.toString());
    divRespostaInversa.innerHTML = respostaInversa;

    //ocorrencia das palavras iguais em uma frase
    function procuraPalavrasIguais(str){
        const PalavrasIguais = str => str.filter((item,index) => str.indexOf(item) !== index);
        return PalavrasIguais(str)
    }

    let palavrasIguais = procuraPalavrasIguais(frase.toString());
    divPalavrasIguais.innerHTML = palavrasIguais;

    //grifa as palavras
    function gri(phrase){}
    //substitui frase do coda fofo
     function subtituteWord(phrase){}
