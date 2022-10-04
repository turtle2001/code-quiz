# code-quiz

## Description 

This project was to create a quiz and to store the scores as LocalStorage for the highscore page. I was supposed to use the new javaScript elements that I learned to create a page that showed a quiz with a timer. At the end initials were entered and stored which could be viewed by visiting the highscore page.

## [Webpage](https://github.com/turtle2001/code-quiz)

## Code Snippet
```jS
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
}
```

## Author Links
[LinkedIn](https://www.linkedin.com/in/alexis-zaragoza-5baa51242/)
[GitHub](https://github.com/turtle2001)