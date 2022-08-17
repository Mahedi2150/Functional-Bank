// get deposit amount
// get withdraw amount 
function getInput(inputFild) {
    const inputText = document.getElementById(inputFild);
    const inputAmount = parseFloat(inputText.value);
    inputText.value = "";
    return inputAmount;
}

// added deposit
// get withdraw amount
function updatePrevious(previousAmount, Amount) {
    const previousTotal = document.getElementById(previousAmount);
    const prevAmount = parseFloat(previousTotal.innerText);
    previousTotal.innerText = Amount + prevAmount;
}

// add total balance
// add total balance
function getCurrentBalance() {
    const previousBalance = document.getElementById("previousBalance");
    const prevBalanceAmount = parseFloat(previousBalance.innerText);
    return prevBalanceAmount
}
function updateBalance(amount, isAdd) {
    const previousBalance = document.getElementById("previousBalance");
    /*  const prevBalanceAmount = parseFloat(previousBalance.innerText); */
    const prevBalanceAmount = getCurrentBalance()
    if (isAdd == true) {

        previousBalance.innerText = prevBalanceAmount + amount;
    } else {
        previousBalance.innerText = prevBalanceAmount - amount;
    }
}
document.getElementById("depositButton").addEventListener("click", function () {

    const depositAmount = getInput("depositFild")
    if (depositAmount > 0) {
        updatePrevious("previousDepo", depositAmount)
        updateBalance(depositAmount, true)

    }
    // get deposit amounr
    /* const deposit = document.getElementById("depositFild");
    const depositAmount =parseFloat(deposit.value); */

    // added deposit
    /*  const previousDepo = document.getElementById("previousDepo");
     const prevDepoAmount = parseFloat(previousDepo.innerText);
     previousDepo.innerText = depositAmount + prevDepoAmount; */
    // clear input field 
    // deposit.value = "";
    // add total balance
    /*   const previousBalance = document.getElementById("previousBalance");
      const prevBalanceAmount = parseFloat(previousBalance.innerText);
      previousBalance.innerText = prevBalanceAmount + depositAmount; */

})

// ########################################


document.getElementById("withdrawButton").addEventListener("click", function () {
    const currentBalance = getCurrentBalance()
    const withdrawAmount = getInput("withdrawFild")
    if (withdrawAmount > 0 && withdrawAmount < currentBalance) {
        updatePrevious("previousWithdraw", withdrawAmount)
        updateBalance(withdrawAmount, false)

    }
    if (withdrawAmount > currentBalance) {
        alert("You can't withdraw more than what you have in your account. Your current Balance is: " + currentBalance)

    }

    // get withdraw amounr
    /*  const withdraw = document.getElementById("withdrawFild");
     const withdrawAmount = parseFloat(withdraw.value); */

    // get withdraw amount
    /* const previouswithdraw = document.getElementById("previousWithdraw");
    const prevWithdrawAmount = parseFloat(previouswithdraw.innerText);
    previouswithdraw.innerText = withdrawAmount + prevWithdrawAmount; */
    // clear input field 
    // withdraw.value = "";

    // add total balance
    /* const previousBalance = document.getElementById("previousBalance");
    const prevBalanceAmount = parseFloat(previousBalance.innerText);
    previousBalance.innerText = prevBalanceAmount - withdrawAmount; */

})