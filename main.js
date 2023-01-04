function calculate(firstNum, secondNum, operation) {
    let finalResult = 0
    // Your Code Here
    if (typeof firstNum === "number" && typeof secondNum === "number") {
        if (operation === "add" || typeof operation === "undefined") {
            finalResult = firstNum + secondNum;
        }else if (operation === "subtract"){
            finalResult = firstNum - secondNum;
        }else if (operation === "multiply") {
            finalResult = firstNum * secondNum
        }
        console.log(`${finalResult}`);
    }else{
        console.log(`Second Number Not Found`);
    }
}
    
// Needed Output
calculate(20); // Second Number Not Found
calculate(20, 30); // 50
calculate(20, 30, 'add'); // 50
calculate(20, 30, 'subtract'); // -10
calculate(20, 30, 'multiply'); // 600