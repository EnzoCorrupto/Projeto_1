const perguntas = [
    {
        pergunta: "Complete a canção: Levo isso a sério, Drip Hard'..",
        respostas: [
            {text: "Sessão de estúdio, mic e placa", correct: true},
            {text: "Plaqtudum", correct: false},
            {text: "Fumaça na minha cabeça", correct: false},
            {text: "Subindo o ceu é o limite", correct: false},
        ]
    },
     {
        pergunta: "Qual a linguagem principal utilizada neste trabalho?",
        respostas: [
            {text: "C++", correct: false},
            {text: "Kotlin", correct: false},
            {text: "Javascript", correct: true},
            {text: "Julia", correct: false},
        ]
    },
    {
        pergunta: "Qual a cor do cavalo branco de napoleão",
        respostas: [
            {text: "Cinza", correct: false},
            {text: "Verde", correct: false},
            {text: "Preto", correct: false},
            {text: "Branco", correct: true},
        ],

    },
    {
       pergunta: "Qual é o nome do pai de Naruto Uzumaki?",
        respostas: [
        {text: "Jiraya", correct: false},
        {text: "Kakashi", correct: false},
        {text: "Gai", correct: false},
        {text: "Minato", correct: true},
        ]
    },
    {
        pergunta: "Do que é feito a pamonha??",
        respostas: [
        {text: "Côco", correct: false},
        {text: "Banana", correct: false},
        {text: "Milho", correct: true},
        {text: "Arroz", correct: false},
        ]
    }
];

const perguntaElement = document.getElementById("pergunta");
const respostaButtons = document.getElementById("respostaBotao");
const proximaButton = document.getElementById("proximaBtn");

let currentPerguntaIndex = 0;
let pontos = 0;

function inicioQuiz(){
    currentPerguntaIndex = 0;
    pontos = 0;
    proximaButton.innerHTML= "Proximo";
    mostrarPergunta();
} 

function mostrarPergunta(){
    redefinirEstado();
    let currentPergunta = perguntas[currentPerguntaIndex];
    let perguntaNo = currentPerguntaIndex + 1;
    perguntaElement.innerHTML = perguntaNo + ". " + currentPergunta.pergunta;

    currentPergunta.respostas.forEach(resposta => {
        const button = document.createElement("button");
        button.innerHTML = resposta.text;
        button.classList.add("btn");
        respostaButtons.appendChild(button);
        if(resposta.correct){
            button.dataset.correct = resposta.correct;
        }
        button.addEventListener("click", selecionarResposta);
    });
}

function redefinirEstado(){
    proximaButton.style.display = "none";
    while(respostaButtons.firstChild){
        respostaButtons.removeChild(respostaButtons.firstChild);
    }
}

function selecionarResposta(e){
    const btnSelecionado = e.target;
    const estaCorreto = btnSelecionado.dataset.correct === "true";
    if(estaCorreto){
        btnSelecionado.classList.add("correto");
        pontos++;
    }else{
        btnSelecionado.classList.add("incorreto");
    }
    Array.from(respostaButtons.children).forEach(button =>{
        if(button.dataset.correct === "true"){
            button.disabled = "true";
        }
    });
    proximaButton.style.display = "block";
}

function mostrarPontos(){
    redefinirEstado();
    perguntaElement.innerHTML = 'Voçê pontuou ${pontos} de ${perguntas.llenght}!';
    proximaButton.innerHTML = "Jogar Novamente";
    proximaButton.style.display = "block";
}

function handleNextButton(){
    currentPerguntaIndex++;
    if(currentPerguntaIndex < respostas.length){
        mostrarPergunta();
    }else{
        mostrarPontos();
    }
}

proximaButton.addEventListener("click", ()=>{
if(currentPerguntaIndex < perguntas.length){
    handleNextButton();
}else{
    inicioQuiz();
}
})

inicioQuiz();