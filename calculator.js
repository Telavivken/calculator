let num1 = ""
let num2 = ""
let operator = ""
let total = 0
let flag = false 

//does operations based on inputs 
const operate = function(operator,num1,num2){
    let sum_=0
   
    if (operator == "add")
    {
         sum_ = add(parseInt(num1),parseInt(num2))
        
    }
    else if (operator == "subtract"){
         sum_ = subtract(parseInt(num1),parseInt(num2))
    }
    else if (operator == "divide"){
         sum_ = divide(parseInt(num1),parseInt(num2))
    }
    else if (operator == "multiply"){
         sum_ = multiply(parseInt(num1),parseInt(num2))
         
    }
    total = sum_   
    
}
//operation functions
const add = function(num1,num2) {
    let sum = num1+num2;
    return sum;  
  };
const subtract = function(num1,num2) {
    let sum = num1-num2;
    return sum;  
  };

  
const multiply = function(num1,num2) {
    let product = num1*num2;
    return product;
  };
const divide = function(num1,num2) {
    let sum = num1/num2;
    return sum;  
  };
//displays operations as it is being clicked 
//converts class name to operation symbol 
  const display = function(flag){
    const display_ = document.querySelector('.display');
    let operator_ =""
    
    if (operator == "add"){
        operator_ = "+"

    }
    else if (operator == "subtract"){
        operator_ = "-"

    }
    else if (operator == "multiply"){
        operator_ = "x"

    }
    else if (operator == "divide"){
        operator_ = "÷"

    }
    display_.textContent = `${num1} ${operator_} ${num2}  `;
  };
  //processes string to allow for multiple number values 
  const stringProcess = function(string){
    if (string =="add"||string =="subtract"||string =="divide"||string =="multiply"){
        if (operator == ""){
            operator = string
            return
        }
    }
    if(string == "equal"){ 
        return
    }
    if (operator == ""){
        num1= num1+string
        return   
    }
    else 
    {num2= num2+string }
  }
  const buttons = document.querySelectorAll('button');
//adds event listeners to all buttons 
  buttons.forEach((button)=>{
                button.addEventListener('click',()=> {
                    let value = button.className
                    stringProcess(value)
                    display("")
                  
                })
                })
const equals = document.querySelector(".equal")
//hadles equals button event 
equals.addEventListener('click',()=>{
  
    operate(operator,num1,num2)
    const display_ = document.querySelector('.display');
    //handles empty variable error 
    if (num2 == ""){
        
        return
    }
    //handles divide by 0 error 
    if (total == Infinity){
        display_.textContent = "error"
        cleared()
        return
      }
    rounded = Math.round(total * 100) / 100;
    display_.textContent = `${rounded}  `
    num1 = total
    num2 = ""
    operator = ""
    
    })
//clears calculator
    const cleared = function (){
        num1 = ""
        num2 = ""
        total = ""
        operator = ""
        flag = false
    }
    const clear = document.querySelector(".clear")
//listens for clear button 
    clear.addEventListener('click',()=>{
        cleared() 
        const display_ = document.querySelector('.display');
        display_.textContent = `${total}  `
        
        })        
  
//parseInt cannot start with 0
//record num1 --records an array of parseInt strings
//wait for operator --records only one symbol
//record num 2 --records an array of parseInt strings
//wait for equals or another operator 
//display result of two nums 
  
  