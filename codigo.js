const perguntas = [
    {
        pergunta: "Complete a canção: Levo isso a sério, Drip Hard'..",
        respostas: [
            { a: "Sessão de estúdio, mic e placa", correct: true },
            { b: "Plaqtudum", correct: false },
            { c: "Fumaça na minha cabeça", correct: false },
            { d: "Subindo o ceu é o limite", correct: false },
        ]
    },
    {
        pergunta: "Qual a linguagem principal utilizada neste trabalho?",
        respostas: [
            { a: "C++", correct: false },
            { b: "Kotlin", correct: false },
            { c: "Javascript", correct: true },
            { d: "Julia", correct: false },
        ]
    },
    {
        pergunta: "Qual a cor do cavalo branco de napoleão",
        respostas: [
            { a: "Cinza", correct: false },
            { b: "Verde", correct: false },
            { c: "Preto", correct: false },
            { d: "Branco", correct: true },
        ]
    },
    {
        pergunta: "Qual é o nome do pai de Naruto Uzumaki?",
        respostas: [
            { a: "Jiraya", correct: false },
            { b: "Kakashi", correct: false },
            { c: "Gai", correct: false },
            { d: "Minato", correct: true },
        ]
    },
    {
        pergunta: "Do que é feito a pamonha??",
        respostas: [
            { a: "Côco", correct: false },
            { b: "Banana", correct: false },
            { c: "Milho", correct: true },
            { d: "Arroz", correct: false },
        ]
    }
];

;let currentQuestion = 0;

loadQuiz();

const questionId = document.getElementById(perguntas)
a_text= document.getElementById("a_text");
b_text= document.getElementById("b_text");
c_text= document.getElementById("c_text");
d_text= document.getElementById("d_text");

function loadQuiz() {

}
