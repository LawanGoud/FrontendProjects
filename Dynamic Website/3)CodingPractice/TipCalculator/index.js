let billAmountInput = document.getElementById('billAmount');
let percentageTipInput = document.getElementById('percentageTip');
let tipAmountInput = document.getElementById('tipAmount');
let totalAmountInput = document.getElementById('totalAmount');
let errorMessageElement = document.getElementById('errorMessage');

function calculateTip(){
    let billAmountInputValue = billAmountInput.value;
    let percentageTipInputValue = percentageTipInput.value;

    if (billAmountInputValue === ''){
        errorMessageElement.textContent = "Please Enter a Valid Input";
    }else if (percentageTipInputValue === ''){
        errorMessageElement.textContent = 'Please Enter a Valid Input';
    }else{
        errorMessageElement.textContent = ''
        let billAmount = parseInt(billAmountInputValue);
        let percentageTip = parseInt(percentageTipInputValue);

        let calculatedTip = (percentageTip / 100) * billAmount;
        let calculatedTotal = billAmount + calculatedTip;

        tipAmountInput.value = calculatedTip;
        totalAmountInput.value = calculatedTotal;
    }
}