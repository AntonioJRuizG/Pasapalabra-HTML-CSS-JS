const questions = [
    {
        letter: "a",
        answer: "abducir",
        status: 0,
        question:
            "CON LA A. Dicho de una supuesta criatura extraterrestre: Apoderarse de alguien",
    },
    {
        letter: "b",
        answer: "bingo",
        status: 0,
        question:
            "CON LA B. Juego que ha sacado de quicio a todos los 'Skylabers' en las sesiones de precurso",
    },
    {
        letter: "c",
        answer: "churumbel",
        status: 0,
        question: "CON LA C. Niño, crío, bebé",
    },
    {
        letter: "d",
        answer: "diarrea",
        status: 0,
        question:
            "CON LA D. Anormalidad en la función del aparato digestivo caracterizada por frecuentes evacuaciones y su consistencia líquida",
    },
    {
        letter: "e",
        answer: "ectoplasma",
        status: 0,
        question:
            "CON LA E. Gelatinoso y se encuentra debajo de la membrana plasmática. Los cazafantasmas medían su radiación",
    },
    {
        letter: "f",
        answer: "facil",
        status: 0,
        question: "CON LA F. Que no requiere gran esfuerzo, capacidad o dificultad",
    },
    {
        letter: "g",
        answer: "galaxia",
        status: 0,
        question:
            "CON LA G. Conjunto enorme de estrellas, polvo interestelar, gases y partículas",
    },
    {
        letter: "h",
        answer: "harakiri",
        status: 0,
        question: "CON LA H. Suicidio ritual japonés por desentrañamiento",
    },
    {
        letter: "i",
        answer: "iglesia",
        status: 0,
        question: "CON LA I. Templo cristiano",
    },
    {
        letter: "j",
        answer: "jabali",
        status: 0,
        question:
            "CON LA J. Variedad salvaje del cerdo que sale en la película 'El Rey León', de nombre Pumba",
    },
    {
        letter: "k",
        answer: "kamikaze",
        status: 0,
        question:
            "CON LA K. Persona que se juega la vida realizando una acción temeraria",
    },
    {
        letter: "l",
        answer: "licantropo",
        status: 0,
        question: "CON LA L. Hombre lobo",
    },
    {
        letter: "m",
        answer: "misantropo",
        status: 0,
        question:
            "CON LA M. Persona que huye del trato con otras personas o siente gran aversión hacia ellas",
    },
    {
        letter: "n",
        answer: "necedad",
        status: 0,
        question: "CON LA N. Demostración de poca inteligencia",
    },
    {
        letter: "ñ",
        answer: "señal",
        status: 0,
        question:
            "CONTIENE LA Ñ. Indicio que permite deducir algo de lo que no se tiene un conocimiento directo.",
    },
    {
        letter: "o",
        answer: "orco",
        status: 0,
        question:
            "CON LA O. Humanoide fantástico de apariencia terrible y bestial, piel de color verde creada por el escritor Tolkien",
    },
    {
        letter: "p",
        answer: "protoss",
        status: 0,
        question:
            "CON LA P. Raza ancestral tecnológicamente avanzada que se caracteriza por sus grandes poderes psíonicos del videojuego StarCraft",
    },
    {
        letter: "q",
        answer: "queso",
        status: 0,
        question:
            "CON LA Q. Producto obtenido por la maduración de la cuajada de la leche",
    },
    { letter: "r", answer: "raton", status: 0, question: "CON LA R. Roedor" },
    {
        letter: "s",
        answer: "stackoverflow",
        status: 0,
        question: "CON LA S. Comunidad salvadora de todo desarrollador informático",
    },
    {
        letter: "t",
        answer: "terminator",
        status: 0,
        question:
            "CON LA T. Película del director James Cameron que consolidó a Arnold Schwarzenegger como actor en 1984",
    },
    {
        letter: "u",
        answer: "unamuno",
        status: 0,
        question:
            "CON LA U. Escritor y filósofo español de la generación del 98 autor del libro 'Niebla' en 1914",
    },
    {
        letter: "v",
        answer: "vikingos",
        status: 0,
        question:
            "CON LA V. Nombre dado a los miembros de los pueblos nórdicos originarios de Escandinavia, famosos por sus incursiones y pillajes en Europa",
    },
    {
        letter: "w",
        answer: "sandwich",
        status: 0,
        question:
            "CONTIENE LA W. Emparedado hecho con dos rebanadas de pan entre las cuales se coloca jamón y queso",
    },
    {
        letter: "x",
        answer: "botox",
        status: 0,
        question: "CONTIENE LA X. Toxina bacteriana utilizada en cirujía estética",
    },
    {
        letter: "y",
        answer: "peyote",
        status: 0,
        question:
            "CONTIENE LA Y. Pequeño cáctus conocido por sus alcaloides psicoactivos utilizado de forma ritual y medicinal por indígenas americanos",
    },
    {
        letter: "z",
        answer: "zen",
        status: 0,
        question:
            "CON LA Z. Escuela de budismo que busca la experiencia de la sabiduría más allá del discurso racional",
    },
];

let turno = 0;
let maxTime = 130;

const gameLetters = document.querySelectorAll(".item");
const scoreField = document.querySelector(".score");
const timeField = document.querySelector(".timer");
const letterDefinition = document.querySelector(".question-text");
const userAnswer = document.querySelector(".answer-text");
const sendButton = document.querySelector(".send-button");
const pasarPalabra = document.querySelector(".pasapalabra-button");
const startGame = document.querySelector('.start-button');
const finishGame = document.querySelector(".end-button");

pasarPalabra.addEventListener("click", function () {
    addTurn();
    updateDisplay();
})

const updateTimeField = () => {
    if (maxTime >= 0) {
        timeField.value = maxTime--;
    }
}

const addTurn = () => {
    do {
        turno++;
        if (turno > questions.length - 1) {
            turno = 0;
        }
    } while (questions[turno].status !== 0 && !allLettersCompleted());
}

const restartScore = () => {
    scoreField.value = 25;
}

const updateScore = () => {
    scoreField.value = questions.filter(letter => letter.status === 0).length;
}

const restartTimer = () => {
    maxTime = 130;
}

const restartQuestionsObject = () => {
    questions.forEach(question => question.status = 0);
}

const restartAlphabetColors = () => {
    gameLetters.forEach(letter => letter.classList.remove('acertada'));
    gameLetters.forEach(letter => letter.classList.remove('mistaken'));
}

const updateDisplay = () => {
    letterDefinition.innerHTML = questions[turno].question;
    userAnswer.value = "";
    gameLetters.forEach(letter => letter.classList.remove("blink"));
    gameLetters[turno].classList.add('blink');
}

let countdownTimer
const startTimer = () => {
    if (countdownTimer) clearInterval(countdownTimer);
    countdownTimer = setInterval(updateTimeField, 1000);
}

const stopTimer = () => {
    clearInterval(countdownTimer);
}

startGame.addEventListener("click", function () {
    sendButton.disabled = false;
    pasarPalabra.disabled = false;
    finishGame.disabled = false;
    turno = 0;
    restartTimer();
    updateScore();
    updateDisplay();
    startTimer();
    restartQuestionsObject();
    restartAlphabetColors();
})

sendButton.addEventListener("click", (event) => {
    
    event.preventDefault();
    const answer = userAnswer.value;
    if (questions[turno].status === 0) {
        hacerPregunta(answer, turno);
        updateDisplay();  
    }

    addTurn();
    updateDisplay();

    if (allLettersCompleted() || timeField.value < 0) {
        gameOver();
        return;
    }
});

finishGame.addEventListener("click", function () {
    turno = 0;
    restartTimer();
    letterDefinition.innerHTML = '';
    timeField.value = '';
    scoreField.value = '';
    restartAlphabetColors();
    stopTimer();
    sendButton.disabled = true;
    pasarPalabra.disabled = true;
    finishGame.disabled = true;
    gameLetters.forEach(letter => letter.classList.remove("blink"));
    
})

const hacerPregunta = (answer, i) => {
    if (answer.toLowerCase() === questions[i].answer.toLowerCase()) {
        questions[i].status = 1; 
        gameLetters[i].classList.add('acertada');
    } else if (answer.toLowerCase() === 'pasapalabra') {
        //Pasa turno
    } else {
        questions[i].status = 1; //Respuesta fallada
        gameLetters[i].classList.add('mistaken');
    }
    updateScore();
}

const allLettersCompleted = () => {
    return questions.every(word => word.status === 1);
}
const gameOver = () => {
    sendButton.disabled = true;
    pasarPalabra.disabled = true;
    letterDefinition.innerHTML = 'GAME OVER! Push START to begin a new game';
    stopTimer();
    gameLetters.forEach(letter => letter.classList.remove("blink"));   
}