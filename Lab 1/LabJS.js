function slides(){
    let currIndex = 0;
    let list = document.querySelectorAll(".divImg img");

    list[currIndex].classList.remove("hidden");

    document.getElementById("Next").addEventListener("click", function(){
        if(currIndex <= 3){
            list[currIndex].classList.add("hidden");
            list[currIndex+1].classList.remove("hidden");
            currIndex++;
        }
    });

    document.getElementById("Previous").addEventListener("click", function(){
        if(currIndex >= 1){
            list[currIndex].classList.add("hidden");
            list[currIndex-1].classList.remove("hidden");
            currIndex--;
        }
    });
}

function quiz(){
    const questionElement = document.getElementById("question");
    const answersElement = document.getElementById("answer");

    const quizData = [
        {
            question: "What is company is a Camaro from?",
            options: ["Ford", "Chevy", "Dodge", "Pontiac"],
            correctAnswer: "Chevy",
        },
        {
            question: "Which country is Audi from?",
            options: ["America", "Japan", "Italy", "Germany"],
            correctAnswer: "Germany",
        },
        {
            question:
                "What year was the Tesla Roadster's debut?",
            options: ["2001", "2007", "2008", "2006"],
            correctAnswer: "2008",
        },
        {
            question:
                "What Volkswagon model was fully discountinued?",
            options: ["Beetle", "Atlas", "Tiguan", "Jetta"],
            correctAnswer: "Beetle",
        },
    ];

    let currQIndex = 0;
    let correct = 0;

    function showQuestion(index) {
        const question = quizData[index];
        questionElement.textContent = question.question;

        answersElement.innerHTML = "";

        for(let i = 0; i < question.options.length; i++){
            const answerButton = document.createElement("button");
            answerButton.textContent = question.options[i];
            answerButton.addEventListener("click", () => {
                checkAnswer(answerButton.textContent)
            })
            answersElement.appendChild(answerButton);
        }
    }

    function checkAnswer(selectedOption) {
        const correctAnswer = quizData[currQIndex].correctAnswer;

        if(selectedOption === correctAnswer){
            correct++;
            alert("Correct!");
        } else {
            alert("Incorrect. The correct answer is: " + correctAnswer);
        }

        currQIndex++

        if(currQIndex < quizData.length){
            showQuestion(currQIndex);
        } else {
            questionElement.textContent =   `Quiz complete! You scored ${correct} out of ${quizData.length}!`
            answersElement.innerHTML = "";
        }
    }

    showQuestion(currQIndex);
}

slides();
quiz();