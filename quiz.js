const card = document.getElementById("quiz-card");
let index = 0;
let score = 0;

const quiz = [
    {
        type: "info",
        title: "🧠 Cyber Safety Awareness Mini-Quiz",
        text: `Instructions:<br><br>
        • Choose the correct option for each question.<br>
        • Each correct answer = 1 point.<br><br>
        Click “Let's Go!” to begin.`,
        button: "Let's Go!"
    },
    {
        type: "mcq",
        title: "Which of these is a sign of a phishing attempt?",
        options: [
            "An email asking for your password",
            "A message from a friend you usually talk to",
            "A verified website login"
        ],
        answer: 0
    },
    {
        type: "mcq",
        title: "Which password is the safest?",
        options: [
            "123456",
            "mycat123",
            "L8@nF#92qP!"
        ],
        answer: 2
    },
    {
        type: "mcq",
        title: "What does malware do?",
        options: [
            "Protects your device",
            "Slows or damages your device",
            "Improves WiFi speed"
        ],
        answer: 1
    },
    {
        type: "mcq",
        title: "What should you AVOID doing on public Wi-Fi?",
        options: [
            "Watching YouTube",
            "Checking social media",
            "Accessing your bank account"
        ],
        answer: 2
    },
    {
        type: "tf",
        title: "Cyberbullying is a serious online safety threat.",
        options: ["True", "False"],
        answer: 0
    },
    {
        type: "tf",
        title: "Reusing the same password increases your risk during data breaches.",
        options: ["True", "False"],
        answer: 0
    },
    {
        type: "mcq",
        title: "Which website looks suspicious?",
        img: "fakeweb.png", 
        options: [
            "https://real-bank.com",
            "http://secure-bank-login.cc",
            "https://bankofindia.co.in"
        ],
        answer: 1
    },
    {
        type: "tf",
        title: "Scanning unknown QR codes is safe.",
        options: ["True", "False"],
        answer: 1
    }
];

function loadCard() {
    card.classList.remove("show");

    setTimeout(() => {
        let q = quiz[index];

        if (q.type === "info") {
            card.innerHTML = `
                <h2 class="quiz-title">${q.title}</h2>
                <p>${q.text}</p>
                <button class="action-btn" onclick="nextCard()">${q.button}</button>
            `;
        }

        else {
            let html = `
            <h2 class="quiz-title">${q.title}</h2>
            ${q.img ? `<img src="${q.img}" class="quiz-img">` : ""}
            `;

            q.options.forEach((op, i) => {
                html += `<button class="option-btn" onclick="selectOption(${i})">${op}</button>`;
            });

            html += `
            <div class="card-buttons">
                <button class="action-btn" onclick="skip()">Skip</button>
                <button class="action-btn" onclick="nextCard()">Submit</button>
            </div>`;

            card.innerHTML = html;
        }

        card.classList.add("show");
    }, 250);
}

function selectOption(i) {
    let q = quiz[index];
    if (i === q.answer) score++;
    nextCard();
}

function skip() {
    nextCard();
}

function nextCard() {
    index++;

    if (index >= quiz.length) {
        showScore();
        return;
    }

    loadCard();
}

function showScore() {
    card.innerHTML = `
        <h2 class="quiz-title">🎉 Quiz Complete!</h2>
        <div class="score-box">Your Score: ${score} / 8</div>
        <p>${score <= 3 ? "Keep learning — you're improving! 💡" :
           score <= 6 ? "Great job! You know your cyber basics. 🔐" :
           "Cyber Safety Pro! You're hard to trick. 🛡️"}</p>
    `;
    card.classList.add("show");
}

loadCard();
