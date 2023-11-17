let answer;
let userAnswer;
function getRandomNumber(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

function buildDisplayProblem(num1, num2, operator) {
    let probString = num1 + operator + num2;
    const probBar = document.querySelector(".expression");
    probBar.innerText = probString;
}

function buildDisplayAnswers(answer) {
    let ansArr = [answer, getRandomNumber(81), getRandomNumber(81), getRandomNumber(81)];
    ansArr = shuffleArray(ansArr);

    const ansItems = document.querySelectorAll("li");
    for(let i = 0; i < ansItems.length; i++){
        ansItems[i].innerText = ansArr[i];
        ansItems[i].addEventListener("click", (event) => {
            selectAns(event.target);
        })
    }
}

function selectAns(answer) {
    
}

/**
* Utility function to shuffle the items in an array
* @param {object} arr
*/
function shuffleArray(arr) {
    return arr.sort(function (a, b) { return Math.random() - 0.5 })
}

document.addEventListener("DOMContentLoaded", () => {
    buildDisplayProblem(4, 9, "+");

    buildDisplayAnswers(13);
})