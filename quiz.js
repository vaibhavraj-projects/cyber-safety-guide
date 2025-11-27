const questions = [
  {
    type: "MCQ",
    q: "Which message is MOST likely a phishing attempt?",
    options: [
      "Your bank contacts you through the official app",
      "An email saying you won a prize + asks to click a strange link",
      "Your teacher sends homework on the school platform"
    ],
    answer: 1
  },
  {
    type: "MCQ",
    q: "Which is a strong password?",
    options: [
      "123456",
      "mypassword",
      "Frog!72Sky*9"
    ],
    answer: 2
  },
  {
    type: "MCQ",
    q: "What can malware do?",
    options: [
      "Protect your device",
      "Slow devices and steal data",
      "Make internet faster"
    ],
    answer: 1
  },
  {
    type: "MCQ",
    q: "What should you NOT do on public Wi-Fi?",
    options: [
      "Watch videos",
      "Do online school work",
      "Log in to bank / enter personal details"
    ],
    answer: 2
  },
  {
    type: "TF",
    q: "Cyberbullying is never okay.",
    options: ["True", "False"],
    answer: 0
  },
  {
    type: "TF",
    q: "Reusing the same password everywhere is safe.",
    options: ["True", "False"],
    answer: 1
  },
  {
    type: "MCQ",
    q: "Which website is safest?",
    options: [
      "http://freestuff.com",
      "https://school.edu",
      "A site with misspelled URL"
    ],
    answer: 1
  },
  {
    type: "TF",
    q: "Scanning unknown QR codes is always safe.",
    options: ["True", "False"],
    answer: 1
  }
];

let score = 0;
let current = 0;

const card = document.getElementById("card");
const instructions = document.getElementById("instructions");

const questionText = document.getElementById("question-text");
const optionsDiv = document.getElementById("options");
const feedback = document.getElementById("feedback");

document.getElementById("startBtn").onclick = () => {
  instructions.style.display = "none";
  card.classList.remove("hidden");
  loadQuestion();
};

function loadQuestion() {
  card.classList.remove("flip");
  const q = questions[current];

  questionText.textContent = q.q;
  optionsDiv.innerHTML = "";

  q.options.forEach((opt, idx) => {
    const btn = document.createElement("button");
    btn.textContent = opt;
    btn.onclick = () => checkAnswer(idx);
    optionsDiv.appendChild(btn);
  });
}

function checkAnswer(choice) {
  const q = questions[current];
  feedback.textContent = choice === q.answer ? "Correct! 🎉" : "Oops! ❌";
  if (choice === q.answer) score++;

  card.classList.add("flip");
}

document.getElementById("skipBtn").onclick = () => {
  next();
};

document.getElementById("submitBtn").onclick = () => {
  // Do nothing—buttons handled by option click
};

document.getElementById("nextBtn").onclick = next;

function next() {
  current++;
  if (current >= questions.length) {
    endQuiz();
  } else {
    loadQuestion();
  }
}

function endQuiz() {
  card.classList.add("flip");
  feedback.innerHTML = `You scored <b>${score}/${questions.length}</b> 🎉<br><br>
    Cyber Awareness Level:<br>
    ${score >= 7 ? "🟢 Cyber Star!" :
      score >= 4 ? "🟡 Getting There!" :
                   "🔴 Needs Practice!"}`;
  document.getElementById("nextBtn").style.display = "none";
}

<script>
/* Fail-safe starter: makes the "Let's Go!" button work */
(function(){
  function startHandler(){
    // hide instructions card (if present)
    const instr = document.getElementById('instructions') || document.querySelector('.instructions-card');
    if(instr) instr.style.display = 'none';

    // reveal quiz card (if present)
    const quizCard = document.getElementById('card') || document.querySelector('.card');
    if(quizCard) quizCard.classList.remove('hidden');

    // call common initializer functions if they exist (covers multiple implementations)
    if(typeof loadQuestion === 'function') {
      try { loadQuestion(); } catch(e){ console.warn('loadQuestion error:', e); }
    }
    if(typeof renderDeck === 'function') {
      try { renderDeck(); } catch(e){ console.warn('renderDeck error:', e); }
    }
    if(typeof renderDeck === 'undefined' && typeof initQuiz === 'function') {
      try { initQuiz(); } catch(e){ console.warn('initQuiz error:', e); }
    }
  }

  // attach after DOM ready
  function attachStart(){
    const btn = document.getElementById('startBtn') || document.querySelector('#startBtn, .go, .start-btn');
    if(btn){
      btn.addEventListener('click', startHandler);
      return;
    }
    // if button not yet in DOM, try again shortly
    const retry = setInterval(()=>{
      const b = document.getElementById('startBtn') || document.querySelector('#startBtn, .go, .start-btn');
      if(b){
        clearInterval(retry);
        b.addEventListener('click', startHandler);
      }
    }, 150);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', attachStart);
  } else {
    attachStart();
  }
})();
</script>
