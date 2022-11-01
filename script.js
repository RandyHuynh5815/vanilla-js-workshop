const firstNum = document.getElementById("num1");
const op = document.getElementById("op");     
const secondNum = document.getElementById("num2"); 

const form = document.getElementById("question");                  
form.addEventListener('submit', (event) => {
    num1 = parseInt(firstNum.value);
    num2 = parseInt(secondNum.value);
    switch(op.value) {
        case '+':
            answer = num1 + num2;
            break;
        case '-':
            answer = num1 - num2;
            break;
        case '*':
            answer = num1 * num2;
            break;
        default:
            answer = num1 / num2;
    }
    let answerElement = document.getElementById("answer");
    answerElement.innerHTML = answer;
    event.preventDefault();
});