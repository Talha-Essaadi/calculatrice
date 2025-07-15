let buttons = document.querySelectorAll(".button-1");
const switchThemeButton = document.querySelector(".switch-button");
const theme_1 = document.querySelector(".theme-1");
const theme_2 = document.querySelector(".theme-2");
const theme_3 = document.querySelector(".theme-3");
const headerTitle = document.querySelector(".header-title");
const switchThemeButtonDesignTitle = document.querySelector(".switch-theme-button-design-title");
const containerBackground = document.querySelector(".container");
const calculatorBody = document.querySelector(".calculator-body");
const outputSectionText = document.querySelector(".output-section-text");
const outputSection = document.querySelector(".output-section");
const resetButton = document.querySelector(".reset-button");
const delButton = document.querySelector(".del-button");
const switchButton = document.querySelector(".switch-button");
const equalButton = document.querySelector(".equal-button");
const switchButtonCircle = document.querySelector(".switch-button-circle");

buttons.forEach(button => button.addEventListener("click", handlCalculatorClick));

switchThemeButton.addEventListener("click", handlSwitchThemeButton);
let switchThemeButtonClicks = 1;
function handlSwitchThemeButton() {
    if (switchThemeButtonClicks === 1) {
        handlThemeOne();
    } else if (switchThemeButtonClicks === 2) {
        handlThemeTwo();
    } else if (switchThemeButtonClicks === 3) {
        handlThemeThree();
        switchThemeButtonClicks = 0;
    }

    switchThemeButtonClicks += 1;
}


function handlThemeThree() {
    theme_3.style.color = "black";
    theme_2.style.color = "black";
    switchThemeButton.style.justifyContent = "start";

    theme_1.style.color = "var(--white)";



    buttons.forEach(button => {
        button.style.color = "var(--buttons-background-color)";
        button.style.backgroundColor = "var(--buttons-color)";
        button.style.borderBottomColor = "var(--buttons-border-bottom-color)";


        button.addEventListener("mouseover", () => {
            button.style.backgroundColor = "var(--hover-buttons-color)";
        });
        button.addEventListener("mouseout", () => {
            button.style.backgroundColor = "var(--buttons-color)";
        });


    });
    outputSectionText.style.color ="var(--white)";
    containerBackground.style.backgroundColor = "var(--Background-color)";
    calculatorBody.style.backgroundColor = "var(--buttons-background)";

    headerTitle.style.color = "var(--white)";
    switchThemeButtonDesignTitle.style.color = "var(--white)";
    outputSectionText.style.color = "var(--white)";
    outputSection.style.backgroundColor = "var(--output-section)";
    resetButton.style.backgroundColor = "var(--reset-button)";
    delButton.style.backgroundColor = "var(--reset-button)";
    switchButton.style.backgroundColor = "var(--buttons-background)";


    delButton.style.color = "var(--white)";
    resetButton.style.color = "var(--white)";
    equalButton.style.color = "var(--white)";
    equalButton.style.borderBottomColor = "var(--equal-button-order-bottom-color)";
    resetButton.style.borderBottomColor = "var(--reset-button-border-bottom-color)";
    delButton.style.borderBottomColor = "var(--reset-button-border-bottom-color)";
    switchButtonCircle.style.backgroundColor = "var(--equal-button)";
    switchButtonCircle.addEventListener("mouseover", () => {
        switchButtonCircle.style.backgroundColor = "var(--hover-equal-button)";
    });
    switchButtonCircle.addEventListener("mouseout", () => {
        switchButtonCircle.style.backgroundColor = "var(--equal-button)";
    });
    equalButton.style.backgroundColor = "var(--equal-button)";

    equalButton.addEventListener("mouseover", () => {
        equalButton.style.backgroundColor = "var(--hover-equal-button)";
    });
    equalButton.addEventListener("mouseout", () => {
        equalButton.style.backgroundColor = "var(--equal-button)";
    });
    delButton.addEventListener("mouseover", () => {
        delButton.style.backgroundColor = "var(--hover-reset-button)";
    });
    delButton.addEventListener("mouseout", () => {
        delButton.style.backgroundColor = "var(--reset-button)";
    });

    resetButton.addEventListener("mouseover", () => {
        resetButton.style.backgroundColor = "var(--hover-reset-button)";
    });
    resetButton.addEventListener("mouseout", () => {
        resetButton.style.backgroundColor = "var(--reset-button)";
    });


}





















function handlThemeTwo() {
    theme_1.style.color = "var(--buttons-color-theme-three)";
    theme_2.style.color = "var(--buttons-color-theme-three)";
    switchThemeButton.style.justifyContent = "end";
    theme_3.style.color = "var(--equal-button-theme-three)";

    buttons.forEach(button => {
        button.style.color = "var(--buttons-color-theme-three)";
        button.style.backgroundColor = "var(--buttons-background-color-theme-three)";
        button.style.borderBottomColor = "var(--buttons-border-bottom-color-theme-three)";


        button.addEventListener("mouseover", () => {
            button.style.backgroundColor = "var(--hover-buttons-color-theme-three)";
        });
        button.addEventListener("mouseout", () => {
            button.style.backgroundColor = "var(--buttons-background-color-theme-three)";
        });


    });

    containerBackground.style.backgroundColor = "var(--Background-color-theme-three)";
    calculatorBody.style.backgroundColor = "var(--buttons-background-theme-three)";

    headerTitle.style.color = "var(--buttons-color-theme-three)";
    switchThemeButtonDesignTitle.style.color = "var(--buttons-color-theme-three)";
    outputSectionText.style.color = "var(--buttons-color-theme-three)";
    outputSection.style.backgroundColor = "var(--buttons-background-theme-three)";
    resetButton.style.backgroundColor = "var(--reset-button-theme-three)";
    delButton.style.backgroundColor = "var(--reset-button-theme-three)";
    switchButton.style.backgroundColor = "var(--buttons-background-color-theme-three)";


    delButton.style.color = "var(--white)";
    resetButton.style.color = "var(--white)";
    equalButton.style.color = "var(--black)";
    equalButton.style.borderBottomColor = "var(--equal-button-order-bottom-color-theme-three)";
    resetButton.style.borderBottomColor = "var(--reset-button-border-bottom-color-theme-three)";
    delButton.style.borderBottomColor = "var(--reset-button-border-bottom-color-theme-three)";
    switchButtonCircle.style.backgroundColor = "var(--equal-button-theme-three)";
    switchButtonCircle.addEventListener("mouseover", () => {
        switchButtonCircle.style.backgroundColor = "var(--hover-equal-button-theme-three)";
    });
    switchButtonCircle.addEventListener("mouseout", () => {
        switchButtonCircle.style.backgroundColor = "var(--equal-button-theme-three)";
    });
    equalButton.style.backgroundColor = "var(--equal-button-theme-three)";

    equalButton.addEventListener("mouseover", () => {
        equalButton.style.backgroundColor = "var(--hover-equal-button-theme-three)";
    });
    equalButton.addEventListener("mouseout", () => {
        equalButton.style.backgroundColor = "var(--equal-button-theme-three)";
    });
    delButton.addEventListener("mouseover", () => {
        delButton.style.backgroundColor = "var(--hover-reset-button-theme-three)";
    });
    delButton.addEventListener("mouseout", () => {
        delButton.style.backgroundColor = "var(--reset-button-theme-three)";
    });

    resetButton.addEventListener("mouseover", () => {
        resetButton.style.backgroundColor = "var(--hover-reset-button-theme-three)";
    });
    resetButton.addEventListener("mouseout", () => {
        resetButton.style.backgroundColor = "var(--reset-button-theme-three)";
    });


}








function handlThemeOne() {
    theme_1.style.color = "black";
    buttons.forEach(button => {
        button.style.color = "var(--black)";
        button.style.backgroundColor = "var(--buttons-color-theme-two)";
        button.style.borderBottomColor = "var(--buttons-border-bottom-color)";

        button.addEventListener("mouseover", () => {
            button.style.backgroundColor = "var(--hover-buttons-color)";
        });
        button.addEventListener("mouseout", () => {
            button.style.backgroundColor = "var(--buttons-color)";
        });

    });
    switchThemeButton.style.justifyContent = "center";
    theme_2.style.color = "var(--equal-button)";
    containerBackground.style.backgroundColor = "var(--Background-color-theme-two)";
    calculatorBody.style.backgroundColor = "var(--buttons-background-theme-two)";
    headerTitle.style.color = "var(--black)";
    switchThemeButtonDesignTitle.style.color = "var(--black)";
    outputSectionText.style.color = "var(--black)";
    outputSection.style.backgroundColor = "var(--output-section-theme-two)";
    resetButton.style.backgroundColor = "var(--reset-button-theme-two)";
    delButton.style.backgroundColor = "var(--reset-button-theme-two)";
    switchButton.style.backgroundColor = "var(--buttons-background-theme-two)";
    resetButton.style.borderBottomColor = "var(--reset-button-border-bottom-color-theme-two)";
    delButton.style.borderBottomColor = "var(--reset-button-border-bottom-color-theme-two)";
    equalButton.style.borderBottomColor = "var(--equal-button-order-bottom-color-theme-two)";


    switchButtonCircle.style.backgroundColor = "var(--equal-button-theme-two)";
    delButton.style.color = "var(--white)";
    resetButton.style.color = "var(--white)";
    equalButton.style.color = "var(--white)";
    switchButtonCircle.addEventListener("mouseover", () => {
        switchButtonCircle.style.backgroundColor = "var(--hover-equal-button-theme-two)";
    });
    switchButtonCircle.addEventListener("mouseout", () => {
        switchButtonCircle.style.backgroundColor = "var(--equal-button-theme-two)";
    });
    equalButton.style.backgroundColor = "var(--equal-button-theme-two)";

    equalButton.addEventListener("mouseover", () => {
        equalButton.style.backgroundColor = "var(--hover-equal-button-theme-two)";
    });
    equalButton.addEventListener("mouseout", () => {
        equalButton.style.backgroundColor = "var(--equal-button-theme-two)";
    });
    delButton.addEventListener("mouseover", () => {
        delButton.style.backgroundColor = "var(--hover-reset-button-theme-two)";
    });
    delButton.addEventListener("mouseout", () => {
        delButton.style.backgroundColor = "var(--reset-button-theme-two)";
    });

    resetButton.addEventListener("mouseover", () => {
        resetButton.style.backgroundColor = "var(--hover-reset-button-theme-two)";
    });
    resetButton.addEventListener("mouseout", () => {
        resetButton.style.backgroundColor = "var(--reset-button-theme-two)";
    });


}

function handlCalculatorClick(e) {
    let button = e.target;
    const index = button.dataset.index;

    let sign_icon;
    console.log(e);


    if (index <= 9) {
        outputSectionText.textContent += button.textContent;
    }
    else if (index == 11) {
        outputSectionText.textContent = "";
    }
    else if (index == 10) {
        outputSectionText.textContent = outputSectionText.textContent.slice(0, -1);


    }
    else if (index == 17) {
        if (outputSectionText.textContent === "") {
            outputSectionText.textContent = "0.";
            return;
        }
        else if (outputSectionText.textContent.includes(".")) {
            return;
        }

        outputSectionText.textContent += button.textContent;


    }
    else if (index >= 13 && index <= 16) {
        sign_icon = button.textContent;
        if (outputSectionText.textContent != "") {
            number_1 = outputSectionText.textContent;

        }
        outputSectionText.textContent += sign_icon;


    }

    else if (index == 12) {
        let oldString = outputSectionText.textContent;
        // alert(oldString);
        // alert(oldString[0]);
        let string;
        if (outputSectionText.textContent === "" || outputSectionText.textContent === "Input is empty") {
            outputSectionText.textContent = "Input is empty";
            return;
        }
        if (oldString[0] === "x" || oldString[0] === "/") {
            outputSectionText.textContent = "Syntax Error";
            return;
        }
        else if (oldString[0] === "+" || oldString[0] === "-") {
            string = oldString.slice(1);
        } else {
            string = oldString;
        }
        // alert(string)
        let stringNumbers = string.split(/[+\-\/x]/);
        let numbers = stringNumbers.map(Number);
        if (oldString[0] === "-") {
            numbers[0] = -numbers[0]
        }
        let mathematicalOperators = string.replace(/\d/g, "");

        // alert(`signs : ${mathematicalOperators}`);
        let result = 0;
        // for(let i = 0 ; i < number.length ; i++){
        // alert(numbers);
        switch (mathematicalOperators[0]) {
            case "+":
                result = numbers[0] + numbers[1];
                break;
            case "-":
                result = numbers[0] - numbers[1];
                break;
            case "x":
                result = numbers[0] * numbers[1];
                break;
            case "/":

                if (numbers[1] === 0) {

                    outputSectionText.textContent = "Unknown Error: null";
                    return;
                }
                else {
                    result = numbers[0] / numbers[1];
                }
                break;

        }
        outputSectionText.textContent = result;
        return;




    }



}