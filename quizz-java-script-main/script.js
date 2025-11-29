const questions = [
    {
        question: "Qual é o maior animal do mundo?",
        answers[
            {id: 1, text:"tubarão", correct: false}
            {id: 2, text:"baleia azul", correct: true}
            {id: 3, text:"elefante", correct: false}
            {id: 4, text:"girafa", correct: false}
        ];
    },
     {
        question: "Qual é o maior contiente?",
        answers[
            {id: 1, text:"Europa", correct: false}
             {id: 2, text:"Oceania", correct: true}
              {id: 3, text:"Africa", correct: false}
               {id: 4, text:"Asia", correct: true}
        ]
    },
     {
        question: "Quantas cores tem no árco-íris?",
        answers[
            {id: 1, text:"8", correct: false}
             {id: 2, text:"7", correct: true}
              {id: 3, text:"9", correct: false}
               {id: 4, text:"6", correct: false}
        ]
    },
     {
        question: "Qual é o maior animal do mundo?",
        answers[
            {id: 1, text:"Gobi", correct: false}
             {id: 2, text:"Saara", correct: true}
              {id: 3, text:"atacama", correct: false}
               {id: 4, text:"o grande deserto de vitória", correct: false}
        ]
    },
]

const questionElement = document .getElementById("question")
const answersButtons = document .getElementById("answers-buttons")
const nextButton = document . getElementById("next-bnt")

let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "proxima";
    showQuestion();
}

function showQuestion(){
    let currentQuestionIndex = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + "." + currentQuestion.question
}