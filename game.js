// Catholic Jeopardy - Game Logic

// Game state
const gameState = {
    teams: [],
    currentTeam: 0,
    usedQuestions: new Set(),
    gameStarted: false,
    timerDuration: 30,
    timerInterval: null,
    timeRemaining: 0,
    lastAnswerCorrect: false,
    currentQuestionData: null,
    currentQuestionId: null
};

// Game data
const gameData = {
    "Scripture": {
        100: {
            question: "This Gospel begins with 'In the beginning was the Word, and the Word was with God, and the Word was God.'",
            answers: ["Gospel of Matthew", "Gospel of Mark", "Gospel of Luke", "Gospel of John"],
            correct: 3,
            explanation: "The Gospel of John begins with this beautiful prologue about Jesus as the Word of God."
        },
        200: {
            question: "Jesus said, 'I am the way, the truth, and the ____.'",
            answers: ["Light", "Life", "Love", "Lord"],
            correct: 1,
            explanation: "This is from John 14:6, where Jesus declares 'I am the way, the truth, and the life.'"
        },
        300: {
            question: "How many books are in the Catholic Bible?",
            answers: ["66", "73", "76", "81"],
            correct: 1,
            explanation: "The Catholic Bible contains 73 books, including the deuterocanonical books."
        },
        400: {
            question: "What did Jesus multiply to feed the 5,000?",
            answers: ["Fish and bread", "Wine and bread", "Fruit and nuts", "Meat and vegetables"],
            correct: 0,
            explanation: "Jesus multiplied five loaves and two fish to feed the multitude."
        },
        500: {
            question: "Which apostle denied knowing Jesus three times?",
            answers: ["John", "James", "Peter", "Thomas"],
            correct: 2,
            explanation: "Peter denied Jesus three times before the rooster crowed, as Jesus had predicted."
        }
    },
    "Sacraments": {
        100: {
            question: "How many sacraments are there in the Catholic Church?",
            answers: ["5", "6", "7", "8"],
            correct: 2,
            explanation: "There are seven sacraments: Baptism, Confirmation, Eucharist, Penance, Anointing of the Sick, Holy Orders, and Matrimony."
        },
        200: {
            question: "Which sacrament removes original sin?",
            answers: ["Confirmation", "Baptism", "First Communion", "Penance"],
            correct: 1,
            explanation: "Baptism removes original sin and makes us children of God."
        },
        300: {
            question: "What does the word 'Eucharist' mean?",
            answers: ["Blessing", "Thanksgiving", "Remembrance", "Sacrifice"],
            correct: 1,
            explanation: "Eucharist means 'thanksgiving' in Greek, expressing gratitude for Jesus' sacrifice."
        },
        400: {
            question: "Which sacrament can only be received once?",
            answers: ["Penance", "Eucharist", "Baptism", "Anointing of the Sick"],
            correct: 2,
            explanation: "Baptism, Confirmation, and Holy Orders can only be received once as they leave an indelible mark on the soul."
        },
        500: {
            question: "Who can perform the Sacrament of Baptism in an emergency?",
            answers: ["Only a priest", "Only a deacon", "Any baptized person", "Only a bishop"],
            correct: 2,
            explanation: "In an emergency, any baptized person can perform baptism using the proper form and intention."
        }
    },
    "Mass & Liturgy": {
        100: {
            question: "What are the two main parts of the Mass?",
            answers: ["Entrance and Exit", "Prayer and Song", "Liturgy of the Word and Liturgy of the Eucharist", "Reading and Blessing"],
            correct: 2,
            explanation: "The Mass consists of the Liturgy of the Word and the Liturgy of the Eucharist."
        },
        200: {
            question: "What do we say after the priest says 'The Lord be with you'?",
            answers: ["And also with you", "And with your spirit", "Amen", "Thanks be to God"],
            correct: 1,
            explanation: "The response is 'And with your spirit' in the current translation of the Mass."
        },
        300: {
            question: "What color vestments are worn during Advent?",
            answers: ["Red", "White", "Green", "Purple"],
            correct: 3,
            explanation: "Purple (violet) vestments are worn during Advent as a sign of preparation and penance."
        },
        400: {
            question: "What is the cup that holds the precious blood called?",
            answers: ["Paten", "Ciborium", "Chalice", "Monstrance"],
            correct: 2,
            explanation: "The chalice is the sacred cup used to hold the precious blood of Christ."
        },
        500: {
            question: "What is the prayer that begins 'Holy, Holy, Holy' called?",
            answers: ["Gloria", "Sanctus", "Kyrie", "Agnus Dei"],
            correct: 1,
            explanation: "The Sanctus is the prayer that begins 'Holy, Holy, Holy Lord God of hosts.'"
        }
    },
    "Church History": {
        100: {
            question: "Who was the first Pope?",
            answers: ["St. Paul", "St. Peter", "St. John", "St. James"],
            correct: 1,
            explanation: "St. Peter was the first Pope, chosen by Jesus to lead the early Church."
        },
        200: {
            question: "In what city was Jesus crucified?",
            answers: ["Nazareth", "Bethlehem", "Jerusalem", "Galilee"],
            correct: 2,
            explanation: "Jesus was crucified in Jerusalem on Calvary (Golgotha)."
        },
        300: {
            question: "Which emperor made Christianity legal in the Roman Empire?",
            answers: ["Nero", "Constantine", "Augustus", "Diocletian"],
            correct: 1,
            explanation: "Emperor Constantine issued the Edict of Milan in 313 AD, making Christianity legal."
        },
        400: {
            question: "What does 'Catholic' mean?",
            answers: ["Holy", "One", "Universal", "Apostolic"],
            correct: 2,
            explanation: "Catholic means 'universal,' indicating the Church's mission to all people."
        },
        500: {
            question: "Which council defined the doctrine of the Trinity?",
            answers: ["Council of Trent", "First Vatican Council", "Council of Nicaea", "Second Vatican Council"],
            correct: 2,
            explanation: "The Council of Nicaea (325 AD) defined the doctrine of the Trinity and Jesus' divinity."
        }
    },
    "Saints & Service": {
        100: {
            question: "Who is the patron saint of animals?",
            answers: ["St. Anthony", "St. Francis of Assisi", "St. Joseph", "St. Christopher"],
            correct: 1,
            explanation: "St. Francis of Assisi is the patron saint of animals and ecology."
        },
        200: {
            question: "What are the Works of Mercy divided into?",
            answers: ["Physical and Spiritual", "Personal and Community", "Prayer and Action", "Individual and Group"],
            correct: 0,
            explanation: "The Works of Mercy are divided into Corporal (physical) and Spiritual Works of Mercy."
        },
        300: {
            question: "Which saint is known as the 'Little Flower'?",
            answers: ["St. Teresa of Avila", "St. Thérèse of Lisieux", "St. Joan of Arc", "St. Bernadette"],
            correct: 1,
            explanation: "St. Thérèse of Lisieux is known as the 'Little Flower' and taught the 'little way' of spiritual childhood."
        },
        400: {
            question: "What is the first Corporal Work of Mercy?",
            answers: ["Clothe the naked", "Feed the hungry", "Shelter the homeless", "Visit the sick"],
            correct: 1,
            explanation: "The first Corporal Work of Mercy is to feed the hungry."
        },
        500: {
            question: "Who wrote the prayer 'Prayer of St. Francis' beginning with 'Lord, make me an instrument of your peace'?",
            answers: ["St. Francis of Assisi", "Unknown author", "St. Clare", "St. Bonaventure"],
            correct: 1,
            explanation: "The Prayer of St. Francis was actually written by an unknown author in the early 1900s, not St. Francis himself."
        }
    }
};

// DOM elements
const elements = {
    setupModal: document.getElementById('setupModal'),
    questionModal: document.getElementById('questionModal'),
    gameBoard: document.getElementById('gameBoard'),
    teamsContainer: document.getElementById('teamsContainer'),
    turnIndicator: document.getElementById('turnIndicator'),
    timerContainer: document.getElementById('timerContainer'),
    timerDisplay: document.getElementById('timerDisplay'),
    questionText: document.getElementById('questionText'),
    answerButtons: document.getElementById('answerButtons'),
    feedback: document.getElementById('feedback'),
    numTeams: document.getElementById('numTeams'),
    timerDuration: document.getElementById('timerDuration'),
    teamNames: document.getElementById('teamNames'),
    startGameBtn: document.getElementById('startGameBtn'),
    closeModalBtn: document.getElementById('closeModalBtn'),
    resetBtn: document.getElementById('resetBtn')
};

// Timer functions
function startTimer() {
    if (gameState.timerDuration <= 0) return;

    if (gameState.timerInterval) {
        clearInterval(gameState.timerInterval);
    }

    gameState.timeRemaining = gameState.timerDuration;
    elements.timerDisplay.textContent = gameState.timeRemaining;
    elements.timerDisplay.className = 'timer__display';

    gameState.timerInterval = setInterval(() => {
        gameState.timeRemaining--;
        elements.timerDisplay.textContent = gameState.timeRemaining;

        if (gameState.timeRemaining <= 5) {
            elements.timerDisplay.className = 'timer__display timer__display--danger';
        } else if (gameState.timeRemaining <= 10) {
            elements.timerDisplay.className = 'timer__display timer__display--warning';
        } else {
            elements.timerDisplay.className = 'timer__display';
        }

        if (gameState.timeRemaining <= 0) {
            clearInterval(gameState.timerInterval);
            gameState.timerInterval = null;
            handleTimeout();
        }
    }, 1000);
}

function stopTimer() {
    if (gameState.timerInterval) {
        clearInterval(gameState.timerInterval);
        gameState.timerInterval = null;
    }
    elements.timerDisplay.className = 'timer__display';
    if (gameState.timerDuration > 0) {
        elements.timerDisplay.textContent = gameState.timerDuration;
    }
}

function handleTimeout() {
    const currentQuestion = gameState.currentQuestionData;
    if (!currentQuestion) return;

    const answerButtons = elements.answerButtons.children;

    for (let i = 0; i < answerButtons.length; i++) {
        answerButtons[i].onclick = null;
        if (i === currentQuestion.correct) {
            answerButtons[i].classList.add('answer-btn--correct');
        } else {
            answerButtons[i].style.opacity = '0.5';
        }
    }

    elements.feedback.className = 'feedback feedback--incorrect feedback--visible';
    elements.feedback.innerHTML = `<strong>Time's Up!</strong><br>${currentQuestion.explanation}<br><br><em>Turn passes to the next team.</em>`;

    gameState.lastAnswerCorrect = false;

    const tileId = gameState.currentQuestionId;
    if (tileId) {
        gameState.usedQuestions.add(tileId);
        const tile = document.getElementById(tileId);
        if (tile) {
            tile.classList.add('question-tile--used');
        }
    }
}

// Team management
function updateTeamDisplay() {
    elements.teamsContainer.innerHTML = '';

    gameState.teams.forEach((team, index) => {
        const teamDiv = document.createElement('div');
        teamDiv.className = `team-score ${index === gameState.currentTeam ? 'team-score--active' : ''}`;
        teamDiv.innerHTML = `
            <div class="team-score__name">${team.name}</div>
            <div class="team-score__points">${team.score}</div>
        `;
        elements.teamsContainer.appendChild(teamDiv);
    });
}

function updateTurnIndicator() {
    if (gameState.teams.length > 1) {
        elements.turnIndicator.textContent = `${gameState.teams[gameState.currentTeam].name}'s Turn - Select a Category`;
        elements.turnIndicator.style.display = 'block';
    } else {
        elements.turnIndicator.style.display = 'none';
    }
}

function nextTeam() {
    if (gameState.teams.length > 1) {
        gameState.currentTeam = (gameState.currentTeam + 1) % gameState.teams.length;
        updateTeamDisplay();
        updateTurnIndicator();
    }
}

function updateScore(points) {
    gameState.teams[gameState.currentTeam].score += points;
    updateTeamDisplay();
}

// Game board
function initializeGame() {
    elements.gameBoard.innerHTML = '';

    const categories = Object.keys(gameData);
    const values = [100, 200, 300, 400, 500];

    categories.forEach(category => {
        const categoryDiv = document.createElement('div');
        categoryDiv.className = 'category-header';
        categoryDiv.textContent = category;
        elements.gameBoard.appendChild(categoryDiv);
    });

    values.forEach(value => {
        categories.forEach(category => {
            const tileDiv = document.createElement('div');
            tileDiv.className = 'question-tile';
            tileDiv.textContent = `$${value}`;
            tileDiv.id = `${category}-${value}`;
            tileDiv.addEventListener('click', () => showQuestion(category, value));
            elements.gameBoard.appendChild(tileDiv);
        });
    });
}

function showQuestion(category, value) {
    if (!gameState.gameStarted) return;

    const tileId = `${category}-${value}`;
    if (gameState.usedQuestions.has(tileId)) return;

    const question = gameData[category][value];
    if (!question) return;

    gameState.currentQuestionData = question;
    gameState.currentQuestionId = tileId;

    elements.questionText.textContent = question.question;
    elements.answerButtons.innerHTML = '';
    elements.feedback.className = 'feedback';

    question.answers.forEach((answer, index) => {
        const button = document.createElement('button');
        button.className = 'answer-btn';
        button.textContent = answer;
        button.addEventListener('click', () => selectAnswer(index, question.correct, question.explanation, category, value));
        elements.answerButtons.appendChild(button);
    });

    elements.questionModal.classList.add('modal--visible');
    startTimer();
}

function selectAnswer(selected, correct, explanation, category, value) {
    stopTimer();

    gameState.currentQuestionData = null;
    gameState.currentQuestionId = null;

    const answerButtons = elements.answerButtons.children;
    const tileId = `${category}-${value}`;

    for (let i = 0; i < answerButtons.length; i++) {
        const button = answerButtons[i];
        button.onclick = null;
        if (i === correct) {
            button.classList.add('answer-btn--correct');
        } else if (i === selected && i !== correct) {
            button.classList.add('answer-btn--incorrect');
        }
    }

    if (selected === correct) {
        elements.feedback.className = 'feedback feedback--correct feedback--visible';
        elements.feedback.innerHTML = `<strong>Correct!</strong><br>${explanation}<br><br><em>${gameState.teams[gameState.currentTeam].name} keeps control of the board!</em>`;
        updateScore(value);
        gameState.lastAnswerCorrect = true;
    } else {
        elements.feedback.className = 'feedback feedback--incorrect feedback--visible';
        elements.feedback.innerHTML = `<strong>Incorrect.</strong><br>${explanation}<br><br><em>Turn passes to the next team.</em>`;
        updateScore(-value);
        gameState.lastAnswerCorrect = false;
    }

    gameState.usedQuestions.add(tileId);
    const tile = document.getElementById(tileId);
    if (tile) {
        tile.classList.add('question-tile--used');
    }
}

function closeModal() {
    elements.questionModal.classList.remove('modal--visible');
    stopTimer();

    gameState.currentQuestionData = null;
    gameState.currentQuestionId = null;

    if (gameState.teams.length > 1 && !gameState.lastAnswerCorrect) {
        nextTeam();
    }
}

// Setup functions
function updateTeamInputs() {
    const numTeams = parseInt(elements.numTeams.value) || 2;
    elements.teamNames.innerHTML = '';

    for (let i = 1; i <= numTeams; i++) {
        const input = document.createElement('input');
        input.type = 'text';
        input.className = 'setup__input';
        input.placeholder = `Team ${i} Name`;
        input.id = `team${i}Name`;
        input.value = `Team ${i}`;
        elements.teamNames.appendChild(input);
    }
}

function startGame() {
    const numTeams = parseInt(elements.numTeams.value) || 2;
    gameState.timerDuration = parseInt(elements.timerDuration.value) || 0;
    gameState.teams = [];

    for (let i = 1; i <= numTeams; i++) {
        const nameInput = document.getElementById(`team${i}Name`);
        const teamName = nameInput.value.trim() || `Team ${i}`;
        gameState.teams.push({
            name: teamName,
            score: 0
        });
    }

    gameState.currentTeam = 0;
    gameState.usedQuestions.clear();
    gameState.gameStarted = true;
    gameState.lastAnswerCorrect = false;

    elements.setupModal.classList.remove('modal--visible');
    initializeGame();
    updateTeamDisplay();
    updateTurnIndicator();

    if (gameState.timerDuration > 0) {
        elements.timerContainer.classList.add('timer-container--visible');
        elements.timerDisplay.textContent = gameState.timerDuration;
    } else {
        elements.timerContainer.classList.remove('timer-container--visible');
    }
}

function showSetupModal() {
    elements.setupModal.classList.add('modal--visible');
    updateTeamInputs();
}

function resetGame() {
    gameState.gameStarted = false;
    gameState.usedQuestions.clear();
    stopTimer();

    const tiles = document.querySelectorAll('.question-tile');
    tiles.forEach(tile => {
        tile.className = 'question-tile';
    });

    closeModal();
    showSetupModal();
}

// Event listeners
elements.numTeams.addEventListener('input', updateTeamInputs);
elements.startGameBtn.addEventListener('click', startGame);
elements.closeModalBtn.addEventListener('click', closeModal);
elements.resetBtn.addEventListener('click', resetGame);

// Close modal when clicking outside
elements.questionModal.addEventListener('click', (event) => {
    if (event.target === elements.questionModal) {
        closeModal();
    }
});

// Initialize on page load
window.addEventListener('DOMContentLoaded', () => {
    showSetupModal();
});