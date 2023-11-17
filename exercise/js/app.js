let answer;
let probNum = 1;
let score = 0;
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
        buildDisplayAnswers(num1 + num2);
    } else if (selectedOperator === "-") {
        answer = num1 - num2;
        buildDisplayAnswers(num1 - num2);
    } else if (selectedOperator === "*") {
        answer = num1 * num2;
        buildDisplayAnswers(num1 * num2);
    } else if (selectedOperator === "/") {
        answer = num1 / num2;
        buildDisplayAnswers(num1/num2);
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
    for(let i = 0; i < ansItems.length; i++){
        ansItems[i].innerText = ansArr[i];
        ansItems[i].addEventListener("click", (event) => {
            selectAns(event.target.value);
        })
    }
}

function selectAns(userAnswer) {
    let currentProblem = document.querySelector(".currentProblem");
    probNum++;
    currentProblem.innerText = probNum;

    if(userAnswer === answer){
        let scoreBox = document.querySelector(".currentScore");
        score++;
        scoreBox.innerText = score;
    }
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