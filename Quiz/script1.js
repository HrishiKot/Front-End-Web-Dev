const questionElement = document.getElementById("question");
const optionsElement = document.getElementById("options");

const quizData = [
    {
        question: "What is company is a Camaro from?",
        options: ["Ford", "Chevy", "Dodge", "Pontiac"],
        correctAnswer: "Chevy",
    },
    {
        question: "Which country is Audi from?",
        options: ["America", "Mars", "Italy", "Germany"],
        correctAnswer: "Mars",
    },
    {
        question:
            "Which gas do plants absorb from the atmosphere during photosynthesis?",
        options: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Hydrogen"],
        correctAnswer: "Carbon Dioxide",
    },
];

let currentQuestionIndex = 0;
let correct = 0;

function showQuestion(index) {

    const question = quizData[index];
    questionElement.textContent = question.question;

    optionsElement.innerHTML = "";


    for(let i = 0; i < question.options.length; i++){
        const optionButton = document.createElement("button");
        optionButton.textContent = question.options[i];
        optionButton.addEventListener("click", () => {
            checkAnswer(optionButton.textContent)
        })
        optionsElement.appendChild(optionButton);
    }

}

function checkAnswer(selectedOption) {

    const correctAnswer = quizData[currentQuestionIndex].correctAnswer;

    if(selectedOption === correctAnswer){
        correct++;
        alert("Correct!");
    }
    else {
        alert("Incorrect. The correct answer is: " + correctAnswer);
    }

    currentQuestionIndex++


    if(currentQuestionIndex < quizData.length){
        showQuestion(currentQuestionIndex);
    }
    else {
        questionElement.textContent =   `Quiz complete! You scored ${correct} out of ${quizData.length}!`
        optionsElement.innerHTML = "";
    }

}

showQuestion(currentQuestionIndex);