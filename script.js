// Quiz questions example
const quizQuestions = [
    {
        question: "What is phishing?",
        options: ["A type of dance", "A scam to steal info", "A video game", "An antivirus software"],
        answer: 1
    },
    {
        question: "What does 2FA stand for?",
        options: ["Two-Factor Authentication", "Two Fast Apps", "Two File Access", "Second File Action"],
        answer: 0
    },
    {
        question: "What should you do if you receive a suspicious email?",
        options: ["Click the link", "Ignore or report it", "Reply immediately", "Forward to friends"],
        answer: 1
    }
];

let currentQuestion = 0;
let score = 0;

// Function to start quiz (placeholder)
function startQuiz() {
    if (currentQuestion < quizQuestions.length) {
        const q = quizQuestions[currentQuestion];
        let optionsHTML = '';
        q.options.forEach((opt, index) => {
            optionsHTML += `<button onclick="checkAnswer(${index})">${opt}</button>`;
        });
        document.querySelector('.quiz-box').innerHTML = `<h2>${q.question}</h2>${optionsHTML}`;
    } else {
        document.querySelector('.quiz-box').innerHTML = `<h2>Your score: ${score} / ${quizQuestions.length}</h2>`;
    }
}

function checkAnswer(selected) {
    if (selected === quizQuestions[currentQuestion].answer) {
        score++;
    }
    currentQuestion++;
    startQuiz();
}

// Start quiz when page loads (for quiz.html)
document.addEventListener('DOMContentLoaded', () => {
    if (document.querySelector('.quiz-box')) {
        startQuiz();
    }
});
