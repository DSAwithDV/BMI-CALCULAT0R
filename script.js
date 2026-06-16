let btn = document.getElementById("calculateBtn");

btn.addEventListener("click", function () {

    let weight = Number(document.getElementById("weight").value);
    let height = Number(document.getElementById("height").value);

    if (weight <= 0 || height <= 0) {
        document.getElementById("result").innerText =
            "Please enter valid values";
        document.getElementById("category").innerText = "";
        return;
    }

    let bmi = weight / (height * height);

    document.getElementById("result").innerText =
        `Your BMI is ${bmi.toFixed(2)}`;

    if (bmi < 18.5) {
        document.getElementById("category").innerText =
            "Category: Underweight";
    }
    else if (bmi < 25) {
        document.getElementById("category").innerText =
            "Category: Normal Weight";
    }
    else if (bmi < 30) {
        document.getElementById("category").innerText =
            "Category: Overweight";
    }
    else {
        document.getElementById("category").innerText =
            "Category: Obese";
    }

});