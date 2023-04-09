// TAHAP 1. ambil elemen
const form = document.querySelector("#form-calc");
const weight = document.querySelector("#weight");
const height = document.querySelector("#height");
const btnCalc = document.querySelector("#btn-calc");
const result = document.querySelector("#results");

// TAHAP 2. manipulasi / event 
btnCalc.addEventListener("click", (event) => {

    const weightVal = parseFloat(weight.value);
    const heightVal = parseFloat(height.value);
    let category;
    
    const bmi = (weightVal / Math.pow(heightVal / 100, 2));

    if(bmi >= 30){
            category = "Obesity";
        } else if(bmi >= 25){
            category = "Overweight";
        } else if(bmi >= 18.6){
            category = "Normal";
        } else if(bmi <= 18.5){
            category = "Underweight";
        } else {
            category = "Undefined";
        }

    result.innerHTML=  `Your BMI is &nbsp;<strong>${bmi.toFixed(1)}</strong>&nbsp; which means You are <strong>&nbsp;${category}</strong>&nbsp;`;
    event.preventDefault();
    form.reset();
});