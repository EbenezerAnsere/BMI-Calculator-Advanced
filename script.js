const minWeight = 18.5
const maxWeight = 24.9;


/*
    BMI < 18.5, the output should be: "Your BMI is , so you are underweight."
    BMI 18.5 - 24.9, the output should be: "Your BMI is , so you have a normal weight."
    BMI > 24.9, the output should be: "Your BMI is , so you are overweight."
*/
let BMI_Ebenezer = (a) => {
    if (a < minWeight) {
        return "Your BMI is " + a + ", so you are underweight."
    } else if (a >= minWeight && a <= maxWeight) {
        return "Your BMI is " + a + ", so you have a normal weight."
    } else if (a > maxWeight) {
        return "Your BMI is " + a + ", so you are overweight."
    }
}
console.log(BMI(1000, 10))