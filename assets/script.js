var questionBox = document.getElementById("question-box");
var startButton = document.getElementById("start-button");
var timer = document.getElementById("timer");

//question list
var questionList = [{
    question: "q1",
    answers: ["q", "w", "e", "r"],
    answer: "q"
}, {
    question: "q2",
    answers: ["a", "s", "d", "f"],
    answer: "f"
}];

var highscores;
var numScores;

startButton.addEventListener("click", quizStart);

function quizStart() {
    var currentQuestion = 0;
    //prints question
    if (currentQuestion < questionList.length) {
        var qHeader = document.createElement("h2");
        qHeader.setAttribute("id", "qHeader");
        qHeader.textContent = questionList[currentQuestion].question;
        questionBox.append(qHeader);

        //lists answer
        for (i = 0; i < questionList[currentQuestion].answers.length; i++) {
            var aHeader = document.createElement("h2");
            aHeader.setAttribute("id", "aHeader");
            aHeader.textContent = questionList[currentQuestion].answers[i];
            questionBox.append(aHeader);
        }

        aHeader.addEventListener("click", checkCorrect(aHeader.textContent));

        function checkCorrect(textContent) {
            //console.log("reach");
            if (questionList[currentQuestion].answer === textContent)
                ++numScores;
            qHeader.textContent = "";
            aHeader.textContent = "";
            ++currentQuestion;
        }
    }
}