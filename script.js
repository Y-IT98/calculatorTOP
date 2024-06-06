({
    plugins:['jsdom-quokka-plugin']
})

const calcButtons = document.querySelector('.calc-buttons')
const displayArea = document.querySelector('.display')
const buttonNodeList = document.querySelectorAll('button')
const buttonArray = Array.from(buttonNodeList)
const buttonContent = buttonArray.map(button=> button.textContent)

let number1 = null
let number2 = null
let operator  = ''










function displayNum(){
    let buttonClass;
     const numb1 = buttonArray.forEach(button=> button.addEventListener('click',()=>{
        buttonClass = button.textContent
        displayArea.textContent = `${buttonClass}`
    }))
    const numb2 = buttonArray.forEach(button=> button.addEventListener('click',()=>{
        buttonClass = button.textContent
        displayArea.textContent = `${buttonClass}`
    }))
    
}

displayNum()