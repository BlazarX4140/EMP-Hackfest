var score = 0;
var questionsanswered = 0;
var FourthCertificate = false;
var lock1 = true;
var lock2 = true;
var lock3 = true;
var lock4 = true;
var lock5 = true;

function checkAnswer1() {
    var userInput = document.getElementById("answerq1").value;
    var expectedAnswer = "B";
    var resultParagraph = document.getElementById("replace1");
    if (lock1) {
        questionsanswered++;
    }
    if (userInput === expectedAnswer && lock1) {
        resultParagraph.textContent = "Correct!";
        score++;
    } else {
        resultParagraph.textContent = "Incorrect!";
        lock1 = false;
    }
}

function checkAnswer2() {
    var userInput = document.getElementById("answerq2").value;
    var expectedAnswer = "A";
    var resultParagraph = document.getElementById("replace2");
    if (lock2) {
        questionsanswered++;
    }
    if (userInput === expectedAnswer && lock2) {
        resultParagraph.textContent = "Correct!";
        score++;
    } else {
        resultParagraph.textContent = "Incorrect!";
        lock2 = false;
    }
}

function checkAnswer3() {
    var userInput = document.getElementById("answerq3").value;
    var expectedAnswer = "C";
    var resultParagraph = document.getElementById("replace3");
    if (lock3) {
        questionsanswered++;
    }
    if (userInput === expectedAnswer && lock3) {
        resultParagraph.textContent = "Correct!";
        score++;
    } else {
        resultParagraph.textContent = "Incorrect!";
        lock3 = false;
    }
}

function checkAnswer4() {
    var userInput = document.getElementById("answerq4").value;
    var expectedAnswer = "D";
    var resultParagraph = document.getElementById("replace4");
    if (lock4) {
        questionsanswered++;
    }
    if (userInput === expectedAnswer && lock4) {
        resultParagraph.textContent = "Correct!";
        score++;
    } else {
        resultParagraph.textContent = "Incorrect!";
        lock4 = false;
    }
}

function checkAnswer5() {
    var userInput = document.getElementById("answerq5").value;
    var expectedAnswer = "C";
    var resultParagraph = document.getElementById("replace5");
    if (lock5) {
        questionsanswered++;
    }
    if (userInput === expectedAnswer && lock5) {
        resultParagraph.textContent = "Correct!";
        score++;
    } else {
        resultParagraph.textContent = "Incorrect!";
        lock5 = false;
    }
}

function checkAnswer6() {
    var result = score + "/" + questionsanswered;
    var resultParagraph = document.getElementById("replace6");

    if (score % questionsanswered === 0) {
        if (score === 5) {
            resultParagraph.textContent = "Congrats! You passed 4th Grade, you have earned a 4th grade certificate!";
            FourthCertificate = true;
        } 
    } else {
        resultParagraph.textContent = "You only got " + result + ". Please try again.";
    }
}