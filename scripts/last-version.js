let buttons = document.querySelectorAll(".button-1");

let outputSection = document.querySelector(".output-section-text");

buttons.forEach(button => button.addEventListener("click" , handlCalculatorClick));

function handlCalculatorClick(e){
    let button = e.target ;
    const index = button.dataset.index;

    let sign_icon ;
    console.log(e);
    
    
    if (index <= 9){
        outputSection.textContent += button.textContent;
    }
    else if(index == 11) {
        outputSection.textContent = "";
    }
    else if (index == 10){
        outputSection.textContent = outputSection.textContent.slice(0, -1);
       
       
    }
    else if (index == 17){
        if (outputSection.textContent === ""){
            outputSection.textContent = "0.";
            return ;
        }
        else if(outputSection.textContent.includes(".")){
            return;
        }
        
        outputSection.textContent += button.textContent;
       
        
    }
    else if (index >= 13 && index <= 16){
        sign_icon = button.textContent;
        if(outputSection.textContent != ""){
            number_1 = outputSection.textContent;
             
        }
        outputSection.textContent += sign_icon;
        
        
    }

    else if (index == 12){
        let oldString = outputSection.textContent;
        // alert(oldString);
        // alert(oldString[0]);
        let string ;
        if (outputSection.textContent === "" || outputSection.textContent === "Input is empty"){
            outputSection.textContent = "Input is empty";
            return ;
        }
        if (oldString[0] === "x" || oldString[0] === "/") {
            outputSection.textContent = "Syntax Error";
            return;
        }
        else if (oldString[0] === "+" || oldString[0] === "-"){
            string = oldString.slice(1);
        } else {
          string = oldString;  
        }
        // alert(string)
        let stringNumbers = string.split(/[+\-\/x]/);
        let numbers = stringNumbers.map(Number);
        if (oldString[0] === "-"){
            numbers[0] = -numbers[0] 
        }
        let mathematicalOperators = string.replace(/\d/g, ""); 
        
        // alert(`signs : ${mathematicalOperators}`);
        let result = 0;
        // for(let i = 0 ; i < number.length ; i++){
        // alert(numbers);
            switch(mathematicalOperators[0]){
                case "+" :
                    result = numbers[0] + numbers[1];
                    break;
                case "-" :
                    result = numbers[0] - numbers[1];
                    break;
                case "x" :
                    result = numbers[0] * numbers[1];
                    break;
                case "/" :
                    
                    if (numbers[1] === 0) {
                       
                        outputSection.textContent = "Unknown Error: null";
                        return;
                    }
                    else {
                        result = numbers[0] / numbers[1];
                    }
                    break;
                    
            }
            outputSection.textContent = result ;
            return ;
        
        


    }


    
}