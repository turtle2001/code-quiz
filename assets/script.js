var question0 = {
    question: q1,
    answers: ["q", "w", "e", "r"],
    answer: answers[0]
}

var questions = [question0];
var highscores;
var numScores;
//var currentQ;

startButton.addEventListener("clcik", function () {
    var cuurentQ = 0;
    var correct = 0;

    quizStart();
})

function quizStart() {
    if (currentQuestion < questions.length) {
        var question = questions[currentQuestion];
        var qHeader = document.createElement("h2");
        qHeader.setAttribute("id", "qHeader");
        qHeader.textContent(questions[cuurentQ]);

        for (i = 0; i < questions.answer.length; i++) {
            var answer = questions;
            var aHeader = document.createElement("h2");
            aHeader.setAttribute("id", "aHeader")
            aHeader.textContent(questions.answer[i]);

            aHeader.addEventListener("click", checkCorrect(textContent))
        }
    }

    checkCorrect(textContent); {
        if (question.answer == textContent)
            ++correct;
        else
            time -= 10;
        return;
    }
    quizStart();
}