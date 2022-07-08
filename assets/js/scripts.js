var currentNumberWrapper = document.getElementById('currentNumber')
var currentNumber = 0

var incrementBtn = document.getElementById('INC')
var decrementBtn = document.getElementById('DEC')

function increment(){
    currentNumber += 1;
    currentNumberWrapper.innerHTML = currentNumber
    checkNegative()
    disableBtn()
}

function decrement(){
    currentNumber -= 1;
    currentNumberWrapper.innerHTML = currentNumber
    checkNegative()
    disableBtn()
}

function checkNegative(){
    if(currentNumber < 0){
        currentNumberWrapper.style.color = 'red'
    }
    else{
        currentNumberWrapper.style.color = 'black'
    }
}

function disableBtn(){
    if(currentNumber >= 10){
        incrementBtn.disabled = true
    }
    else{
        incrementBtn.disabled = false
    }

    if(currentNumber <= -10){
        decrementBtn.disabled = true
    }
    else{
        decrementBtn.disabled = false
    }
}

incrementBtn.addEventListener('click', increment)
decrementBtn.addEventListener('click', decrement)
