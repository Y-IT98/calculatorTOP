({
    plugins:['jsdom-quokka-plugin']
})

const calcButtons = document.querySelector('.calc-buttons');
const displayArea = document.querySelector('.display');
const buttonNodeList = document.querySelectorAll('.numbers');
const buttonArray = Array.from(buttonNodeList);
const operatorNodeList = document.querySelectorAll('.operator');
const operatorArray = Array.from(operatorNodeList);

let calculator = {
    number1: [],
    number2: null,
    
    add(){
        return this.number1 + this.number2
    },
    subtract(){
        return this.number1 - this.number2
    },
    displayNum(){
        let numberClass;
    
        buttonArray.forEach(button=> button.addEventListener('click',()=>{
            numberClass = button.textContent;
            this.number1 = `${(numberClass)}`
            displayArea.textContent += this.number1
            console.log((this.number1))
        }))
        return numberClass
        
    }, selectOperator(){
        let operatorClass ; 
        operatorArray.forEach(button=> button.addEventListener('click',()=>{
            operatorClass = button.textContent;
            displayArea.textContent += operatorClass
           
        }))
        return operatorClass

    }
    
}

calculator.displayNum()
calculator.selectOperator()










