let answer;
let probNum = 1;
let score = 0;
const opArr = ["+", "-", "*", "/"];
function getRandomNumber(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

function buildProblem(opArr) {
    let num1 = getRandomNumber(9);
    let num2 = getRandomNumber(9);
    opArr = shuffleArray(opArr);
    let selectedOperator = opArr[0];
    displayProblem(num1, num2, selectedOperator);
    if(selectedOperator === "+") {
        answer = num1 + num2;
        buildDisplayAnswers(answer);
    } else if (selectedOperator === "-") {
        answer = num1 - num2;
        buildDisplayAnswers(answer);
    } else if (selectedOperator === "*") {
        answer = num1 * num2;
        buildDisplayAnswers(answer);
    } else if (selectedOperator === "/") {
        answer = num1 / num2;
        buildDisplayAnswers(answer);
    }
}

function displayProblem(num1, num2, operator) {
    let probString = num1 + operator + num2;
    const probBar = document.querySelector(".expression");
    probBar.innerText = probString;
}

function buildDisplayAnswers(answer) {
    let ansArr = [answer, getRandomNumber(81) - getRandomNumber(81), getRandomNumber(81) - getRandomNumber(81), getRandomNumber(81) - getRandomNumber(81)];
    ansArr = shuffleArray(ansArr);

    const ansItems = document.querySelectorAll("li");
    for (let i = 0; i < ansItems.length; i++) {
        ansItems[i].innerText = ansArr[i];
        ansItems[i].removeEventListener("click", gamerMan);
        ansItems[i].addEventListener("click", gamerMan);
    }
}

function gamerMan(event) {
    selectAns(parseInt(event.target.innerText));
}

function selectAns(userAnswer) {
    let currentProblem = document.querySelector(".currentProblem");
    probNum = probNum + 1;
    currentProblem.innerText = probNum;

    if (answer == userAnswer) {
        let scoreBox = document.querySelector(".currentScore");
        score = score + 1;
        scoreBox.innerText = score;
    }

    // Move the call to buildProblem outside of the event listener
    buildProblem(opArr);
}

/**
* Utility function to shuffle the items in an array
* @param {object} arr
*/
function shuffleArray(arr) {
    return arr.sort(function (a, b) { return Math.random() - 0.5 });
}

document.addEventListener("DOMContentLoaded", () => {
    
        buildProblem(["+", "-", "*", "/"]);
})