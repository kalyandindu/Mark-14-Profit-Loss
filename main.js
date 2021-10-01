const initialPrice = document.querySelector("#int-price");
const stockQuantity = document.querySelector("#stk-quant");
const currentPrice = document.querySelector("#cur-price");
const buttonClick = document.querySelector("#btn-click");
const outputContainer= document.querySelector("#output-container");

buttonClick.addEventListener("click", function profitAndLossCalculator(){
 if(currentPrice.value>initialPrice.value){
const profit = (currentPrice.value - initialPrice.value)*stockQuantity.value
const profitPercentage = (profit/((initialPrice.value)*stockQuantity.value))*100;

outputContainer.innerHTML = "Profit is Rs " + profit + ", Profit %: "+ profitPercentage;

 }
 else{
const Loss = (initialPrice.value - currentPrice.value)*stockQuantity.value;
const LossPercentage = (Loss/((initialPrice.value)*stockQuantity.value))*100;
outputContainer.innerHTML = "Loss is Rs " + Loss + " ,Loss %: "+ LossPercentage;
 }
 
 
})