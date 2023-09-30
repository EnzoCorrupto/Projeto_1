const pergunta = [
    {
        pergunta: "Complete a canção: Levo isso a sério, Drip Hard'..",
        resposta: [
            {text: "Sessão de estúdio, mic e placa", correct: true},
            {text: "Plaqtudum", correct: false},
            {text: "Fumaça na minha cabeça", correct: false},
            {text: "Subindo o ceu é o limite", correct: false},
        ]
    },
     {
        pergunta: "Qual a linguagem principal utilizada neste trabalho?",
        resposta: [
            {text: "C++", correct: false},
            {text: "Kotlin", correct: false},
            {text: "Javascript", correct: true},
            {text: "Julia", correct: false},
        ]
    },
    {
        pergunta: "Qual a cor do cavalo branco de napoleão",
        resposta: [
            {text: "Cinza", correct: false},
            {text: "Verde", correct: false},
            {text: "Preto", correct: false},
            {text: "Branco", correct: true},
        ],

    },
    {
       pergunta: "Qual é o nome do pai de Naruto Uzumaki?",
        resposta: [
        {text: "Jiraya", correct: false},
        {text: "Kakashi", correct: false},
        {text: "Gai", correct: false},
        {text: "Minato", correct: true},
        ]
    },
    {
        pergunta: "Do que é feito a pamonha??",
        resposta: [
        {text: "Côco", correct: false},
        {text: "Banana", correct: false},
        {text: "Milho", correct: true},
        {text: "Arroz", correct: false},
        ]
    }
];

const perguntaElement = document.getElementById("pergunta");
const respostaButton = document.getElementById("respostaBotao");
const proximaButton = document.getElementById("proximaBtn");

let currentPerguntaIndex = 0;
let score = 0;

function inicioQuiz(){
    currentPerguntaIndex = 0;
    score = 0;
    proximaButton.innerHTML="Proximo";
    mostrarPergunta();
}

function mostrarPergunta(){
    let currentPergunta = pergunta(currentPerguntaIndex);
    let perguntaNo = currentPerguntaIndex + 1;
    perguntaElement.innerHTML = perguntaNo + ". " + currentPergunta.pergunta;

    currentPergunta.resposta.forEach(resposta => {
        const button = document.createElement("button");
        button.innerHTML = resposta.text;
        button.classList.add("btn");
        respostaButton.appendChild(button);
    });
}
inicioQuiz();