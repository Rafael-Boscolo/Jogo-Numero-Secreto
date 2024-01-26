let listaNumeroEscolhido = [];
let numeroLimite = 10;
let numeroSecreto = NumeroSecreto() ;
let tentativas = 1;

ExibirTextoTela("h1", "Jogo Número Screto");
ExibirTextoTela("p", `Escolha o número de 1 a ${numeroLimite}`);

function ExibirTextoTela(tag, texto) {
  let campo = document.querySelector(tag);
  campo.innerHTML = texto;
  responsiveVoice.speak(texto, "Brazilian Portuguese Female", {rate:1.2});
}

function MensagemInicial() {
  ExibirTextoTela("h1", "Jogo Número Screto");
  ExibirTextoTela("p", `Escolha o número de 1 a ${numeroLimite}`);
}

function VerificarNumero() {
  let valor = document.querySelector("input").value;

  if(valor == numeroSecreto){
    let palavraMensagem = tentativas > 1 ? "tentatvas" : "tentativa";

    let mensagemTentativa = `Parabens você acerto o número secreto ${numeroSecreto} com ${tentativas} ${palavraMensagem}.`;
    
    ExibirTextoTela("h1", "Acerto!");
    ExibirTextoTela("p", mensagemTentativa);

    document.getElementById("reiniciar").removeAttribute("disabled");
  } else {
    if(valor > numeroSecreto){
      ExibirTextoTela("p", "O número secreto é menor!");
    } else {
      ExibirTextoTela("p", "O número secreto é maior!");
    }
    tentativas++;
    LimparCampo();
  }
}

function NumeroSecreto() {
  let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);

  if(listaNumeroEscolhido.length == numeroLimite) {
    listaNumeroEscolhido = [];
  }

  if(listaNumeroEscolhido.includes(numeroEscolhido)) {
    return NumeroSecreto();
  } else {
    listaNumeroEscolhido.push(numeroEscolhido);
    console.log(listaNumeroEscolhido);
    return numeroEscolhido;
  }
}

function LimparCampo() {
  let valor = document.querySelector("input");
  valor.value = "";
}

function NovoJogo() {
  tentativas = 1;
  numeroSecreto = NumeroSecreto();
  
  LimparCampo();
  MensagemInicial();
  
  document.getElementById("reiniciar").setAttribute("disabled", true);
}