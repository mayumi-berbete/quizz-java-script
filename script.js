const question = [
    {
        question: "Qual é o maior animal do mundo",
        answers: [
            { id: 1, text: "tubarão", correct:false},
            { id: 2, text: "girafa", correct:false},
            { id: 3, text: "baleia azul", correct:true},
            { id: 4, text: "elefante", correct:false},
        ]
    },

    {
        question: "Quantas cores tem no arco-íris?",
        answers: [
            { id: 1, text: "8", correct:false},
            { id: 2, text: "6", correct:false},
            { id: 3, text: "9", correct:false},
            { id: 4, text: "7", correct:true},
        ]
    },

    {
        question: "Qual é o maior continente?",
        answers: [
            { id: 1, text: "Europa", correct:false},
            { id: 2, text: "Asia", correct:true},
            { id: 3, text: "oceania", correct:false},
            { id: 4, text: "africa", correct:false},
        ]
    },

    {
        question: "Qual é o maior oceano?",
        answers: [
            { id: 1, text: "pacifico", correct:true},
            { id: 2, text: "atlantico", correct:false},
            { id: 3, text: "mediterraneo", correct:false},
            { id: 4, text: "artico", correct:false},
        ]
    },
]

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answear-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz () {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Próxima";
    showQuestion();
}

function resetState() {
    nextButton.style.display = "none";
    while (answerButtons.firstChild) {
        answerButtons.removeChild(answerButtons.firstChild);
      }
    }

function showQuestion() {
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    currentQuestion.answers.array.forEach((answer) => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.dataset.id = answer.id;
        button.classList.add("btn");
        button.addEventListener("click", selectAnswer);
        answerButtons.appendChild(button);
    })
}

function selectAnswer(e) {
    answers = questions[currentQuestionIndex].answers;
    const correctAnswer = answers.filter ((answer) => answer.correct == true)[0]; 

    const selectedBtn = e.target;
    const isCorrect= selectedBtn.dataset.id == correctAnswer.id;
    if (isCorrect) {
        selectedBtn.classList.add("correct");
        score++;
    } else {
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach((button) => {
        button.disabled = true;
    });
    nextButton.style.display = "block";
}

function showScore() {
    resetState();
    questionElement.innerHTML = `Você acertou ${score} de ${questions.lenght}!`;
    nextButton.innerHTML = "Play Again";
    nextButton.style.display = "block";
}

function handleNextButton() {
    currentQuestionIndex++;
    if (currentQuestionIndex <question.length) {
        showQuestion();
    } else {
        showScore();
    }
}

nextButton.addEventListener("click", () => {
    if (durrentQuestionIndex < question.lenght) {
        handleNextButton();
    } else {
        startQuiz();
    }
    })


startQuiz();