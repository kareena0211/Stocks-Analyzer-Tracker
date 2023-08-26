
let initialPrice = document.querySelector("#initial-price");
let stockQuantity = document.querySelector("#stock-quantity");
let currentPrice = document.querySelector("#current-price");
let submitBtn = document.querySelector("#submit-btn");
let outputBox = document.querySelector("#output-box");

submitBtn.addEventListener("click", submitHandler)
function submitHandler() {
    let ip = Number(initialPrice.value);
    let qty = Number(stockQuantity.value);
    let curr = Number(currentPrice.value);

    calculateProfitAndLoss(ip, qty, curr)
}

function calculateProfitAndLoss(initial, quantity, current) {

    if (initial == "" || quantity == "" || current == "") {
        empty(`Enter Input is Must `);
    }

    else if (initial > current) {
        let loss = (initial - current) * quantity;
        let lossPercentage = (loss / initial) * 100;
        let lp = lossPercentage.toFixed(2);

        showOutput(`The Loss is ${loss} and the Loss Percentage is ${lp}%`, "red");
    }
    else if (initial < current) {
        let profit = (current - initial) * quantity;
        let profitPercentage = (profit / initial) * 100;
        let pp = profitPercentage.toFixed(2);

        showOutput(`The Profit is ${profit} and the Profit Percentage is ${pp}`, "green");
    }

    else {
        showOutput("No Profit No Loss", "blue");
    }

}

// calculateProfitAndLoss(100, 10, 10)
// calculateProfitAndLoss(10, 10, 100)
// calculateProfitAndLoss(10, 10, 10)


function showOutput(message,color) {
    outputBox.innerHTML = message;
    outputBox.style.color = color 
}

function empty(msg) {
    outputBox.innerHTML = msg;
}