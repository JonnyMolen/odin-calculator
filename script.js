// implement an array of user choices with buttons
const symbols = ['add', 'subtract', 'divide', 'multiply', 'decimal', 'del', 'clear', 'equals'];
const nums = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

// Initializing Variables
let num1 = 0;
let operator;
let num2 = 0
let result = 0;

// add action buttons that push user input into the display page
    //pressing a button
    const btn = document.querySelectorAll('.btn');
    const input = document.getElementById("input");
    const display = document.getElementById("display");

// Operate Function
function operate (num1, operator, num2) {
    if (operator == "add") {
        let newNum = addOperator(num1, num2);
        result = newNum;
    } else if (operator == "subtract") {
        let newNum = subOperator(num1, num2);
        result = newNum;
    } else if (operator == "multiply") {
        let newNum = multiplyOperator(num1, num2);
        result = newNum;
    } else if (operator == "divide") {
        let newNum = divideOperator(num1, num2);
        result = newNum;
        }
    return result;
}

// Operator functions
    // add
    function addOperator(num1, num2) {
        let result = num1 + num2;
        return result;
    }

    // subtract
    function subOperator(num1, num2) {
        let result = num1 - num2;
        return result;
    }
    // multiply
    function multiplyOperator(num1, num2) {
        let result = num1 * num2;
        return result;
    }

    // divide
    function divideOperator(num1, num2) {
        let result = num1 / num2;
        return Math.round(result * 100) / 100;
    }


    // Searches through buttons that are called
    btn.forEach((btn) => {
        
        // user inputting number
        btn.addEventListener("click", () => {
            //code for putting data into input
            if (nums.includes(parseInt(btn.textContent))) {
                // checks whether the display is still showing the default placeholder
                if (input.textContent === "") {
                    //if so, replace it entirely with just the digit that was clicked
                    input.textContent = btn.textContent;
                } 
                else {
                    //append the new digit onto whatever's already showing, building up the full number one character at a time
                    input.textContent = input.textContent + btn.textContent;
                }
            } else {
                return false;
            }
        });


        // User presses any of the symbols
        btn.addEventListener("click", () => {
            //pressing button
            if (symbols.includes(btn.id)) {
                // clear
                if (btn.id == 'clear') {
                    num1 = 0;
                    num2 = 0;
                    operator = "";
                    input.textContent = "";
                    display.textContent = "";
                }

                // ** Extra Credit: delete button
                if (btn.id == 'del') {
                    //removes the last digit
                    input.textContent = input.textContent.slice(0, -1);
                }

                // equal button
                if (btn.id == "equals") {                     
                    num2 = parseFloat(input.textContent);
                    // divide by 0
                    if (operator == "divide" && num2 == 0) {
                        display.textContent = ("You can't do that tsk tsk tsk");
                    }
                    // run through operator function
                    else {
                        let newNum = operate(num1, operator, num2);
                        display.textContent = newNum;
                    }
                    // resets input to blank
                    input.textContent = "";
                }

                // add button
                if (btn.id == "add") {
                    // pending calculation
                    if (operator != undefined && operator != "" && input.textContent != "") {
                        num2 = parseFloat(input.textContent);
                        num1 = operate(num1, operator, num2);
                        input.textContent = "";
                    }
                    // if input is not blank, parse the input as num1
                    if (input.textContent != "") {
                        num1 = parseFloat(input.textContent);
                    }
                    // switch operator to add
                    operator = "add";
                    input.textContent = "";
                }
                
                // subtract button
                if (btn.id == "subtract") {
                    // pending calculation
                    if (operator != undefined && operator != "" && input.textContent != "") {
                        num2 = parseFloat(input.textContent);
                        num1 = operate(num1, operator, num2);
                        input.textContent = "";
                    }
                    // if input is not blank, parse the input as num1
                    if (input.textContent != "") {
                        num1 = parseFloat(input.textContent);
                    }
                    // switch operator to add
                    operator = "subtract";
                    input.textContent = "";
                } 

                // multiply
                if (btn.id == "multiply") {
                    // pending calculation
                    if (operator != undefined && operator != "" && input.textContent != "") {
                        num2 = parseFloat(input.textContent);
                        num1 = operate(num1, operator, num2);
                        input.textContent = "";
                    }
                    // if input is not blank, parse the input as num1
                    if (input.textContent != "") {
                        num1 = parseFloat(input.textContent);
                    }
                    // switch operator to multiply
                    operator = "multiply";
                    input.textContent = "";
                }

                // divide (special casess)
                if (btn.id == "divide") {
                    // pending calculation
                    if (operator != undefined && operator != "" && input.textContent != "") {
                        num2 = parseFloat(input.textContent);
                        num1 = operate(num1, operator, num2);
                        input.textContent = "";
                    }
                    // if input is not blank, parse the input as num1
                    if (input.textContent != "") {
                        num1 = parseFloat(input.textContent);
                    }
                    // switch operator to divide
                    operator = "divide";
                    input.textContent = "";
                }

                // ** Extra Credit: decimal implementation
                if (btn.id == "decimal") {
                    if(!input.textContent.includes(".")){
                    input.textContent = input.textContent + ".";
                    }
                }
            }  
    });
});
