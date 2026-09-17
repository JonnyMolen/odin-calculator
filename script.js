// implement an array of user choices with buttons
const symbols = ['add', 'subtract', 'divide', 'multiply', 'decimal', 'del', 'clear', 'equals'];
const nums = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

let num1 = 0;
let operator;
let num2 = 0

// add action buttons that push user input into the display page
    //pressing a button
    const btn = document.querySelectorAll('.btn');
    const input = document.getElementById("input");
    const display = document.getElementById("display");

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
    return result;
}


// later, inside your click listener, you can just use `display`
    btn.forEach((btn) => {
        
        //numberr
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

        //symbols
        btn.addEventListener("click", () => {
            //pressing button
            if (symbols.includes(btn.id)) {
                //clear
                if (btn.id == 'clear') {
                    input.textContent = "";
                    display.textContent = "";
                }
                // //del
                if (btn.id == 'del') {
                //removes the last digit
                    input.textContent = input.textContent.slice(0, -1);
                }
                // equals
                if (btn.id == "equals") {                     
                    num2 = parseInt(input.textContent);
                    if (operator == "add") {
                    let newNum = addOperator(num1, num2);
                    display.textContent = newNum;
                    } else if (operator == "subtract") {
                        let newNum = subOperator(num1, num2);
                        display.textContent = newNum;
                    } else if (operator == "multiply") {
                        let newNum = multiplyOperator(num1, num2);
                        display.textContent = newNum;
                    } else if (operator == "divide") {
                        let newNum = divideOperator(num1, num2);
                        display.textContent = newNum;
                    }
                }
                // add
                if (btn.id == "add") {
                    num1 = parseInt(input.textContent);
                    operator = "add";
                    input.textContent = "";
                } 
                if (btn.id == "subtract") {
                    num1 = parseInt(input.textContent);
                    operator = "subtract";
                    input.textContent = "";
                } 
                if (btn.id == "multiply") {
                    num1 = parseInt(input.textContent);
                    operator = "multiply";
                    input.textContent = "";
                }
                if (btn.id == "divide") {
                    num1 = parseInt(input.textContent);
                    operator = "divide";
                    input.textContent = "";
                }
            }  
    });
});




    //user cannot do multiple symbols in a row

// add hover color changer to the buttons
