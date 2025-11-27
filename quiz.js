/* -------------------------------
        QUIZ DATA
--------------------------------*/
const quizData = [
    {
        type: "mcq",
        question: "Which of these is a common sign of a phishing attempt?",
        options: [
            "The email asks for urgent action",
            "The sender is your saved contact",
            "The link looks completely normal",
            "The message contains no spelling mistakes"
        ],
        correct: 0
    },

    {
        type: "mcq",
        question: "Which is the strongest password?",
        options: [
            "password123",
            "Abc123",
            "H!9vT2$qP7",
            "YourName2024"
        ],
        correct: 2
    },

    {
        type: "mcq",
        question: "Which file is MOST likely to contain malware?",
        options: [
            "A PDF from your school website",
            "A game setup from an unknown website",
            "A photo sent by a family member",
            "A document you created yourself"
        ],
        correct: 1
    },

    {
        type: "mcq",
        question: "What should you AVOID on public Wi-Fi?",
        options: [
            "Watching YouTube",
            "Checking the weather",
            "Logging into bank accounts",
            "Reading news articles"
        ],
        correct: 2
    },

    {
        type: "tf",
        question: "Cyberbullying only counts if it happens repeatedly.",
        options: ["True", "False"],
        correct: 1
    },

    {
        type: "tf",
        question: "Reusing the same password for different accounts is dangerous.",
        options: ["True", "False"],
        correct: 0
    },

    {
        type: "mcq",
        question: "Which website looks suspicious?",
        options: [
            "https://www.bankofindia.com",
            "https://secure-login-boi.com-authverify.net",
            "https://www.rbi.org.in",
            "https://www.digilocker.gov.in"
        ],
        correct: 1
    },

    {
        type: "tf",
        question: "Scanning random QR codes at public places is always safe.",
        options: ["True", "False"],
        correct: 1
    }
];

let index = 0;
let score = 0;

/* HTML ELEMENTS */
const instructions = document.getElementById("instructions-card");
const questionCard = document.getElementById("question-card");
const resultCard = document.getElementById("result-card");
const questionText = document.getElementById("question-text");
const optionsBox = document.getElementById("options");

/* START QUIZ */
document.getElementById("startQuiz").addEventListener("click", () => {
    instructions.classList.add("hidden");
    questionCard.classList.remove("hidden");
    questionCard.classList.add("show");
    loadQuestion();
});

/* LOAD QUESTION */
function loadQuestion() {
    const q = quizData[index];
    questionText.textContent = q.question;

    optionsBox.innerHTML = "";

    q.options.forEach((opt, i) => {
        const div = document.createElement("div");
        div.classList.add("option");
        div.textContent = opt;

        div.onclick = () => {
            document.querySelectorAll(".option").forEach(o => o.style.background = "#e7f0ff");
            div.style.background = "#c3d8ff";
            div.dataset.selected = i;
        };

        optionsBox.appendChild(div);
    });
}

/* SUBMIT */
document.getElementById("submitBtn").addEventListener("click", () => {
    let selected = [...document.querySelectorAll(".option")].find(o => o.dataset.selected !== undefined);

    if (selected) {
        if (parseInt(selected.dataset.selected) === quizData[index].correct) {
            score++;
        }
    }

    nextQuestion();
});

/* SKIP */
document.getElementById("skipBtn").addEventListener("click", nextQuestion);

function nextQuestion() {
    index++;
    if (index >= quizData.length) {
        showResults();
        return;
    }
    loadQuestion();
}

/* SHOW RESULTS */
function showResults() {
    questionCard.classList.add("hidden");
    resultCard.classList.remove("hidden");
    resultCard.classList.add("show");

    document.getElementById("scoreText").textContent = `You scored ${score} / ${quizData.length}`;

    let message = "";

    if (score <= 3) message = "⚠️ Needs Improvement — Stay alert!";
    else if (score <= 6) message = "👍 Good Job — You're learning!";
    else message = "🌟 Excellent — You're cyber smart!";

    document.getElementById("scoreMessage").textContent = message;
}
