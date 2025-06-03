const botoes = document.querySelectorAll(".botao");
const textos = document.querySelectorAll(".aba-conteudo");

for(let i=0;i <botoes.length;i++){
    botoes[i].onclick = function(){
        
        for(let j=0;j<botoes.length;j++){
            botoes[j].classList.remove("ativo");
            textos[j].classList.remove("ativo");
        }
        botoes[i].classList.add("ativo");
        textos[i].classList.add("ativo");
    }
    console.log(i)
}

const contadores = document.querySelectorAll(".contador");

const tempoObjetivo1 = new Date("31.12.2025");
const tempoObjetivo2 = new Date("01.03.2026");
const tempoObjetivo3 = new Date("22.02.2031");
const tempoObjetivo4 = new Date("01.06.2032");