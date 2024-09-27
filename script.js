document.getElementById('button').addEventListener('click', function() {
    // Get weight and height values
    const weight = parseFloat(document.getElementById('weight').value);
    const height = parseFloat(document.getElementById('height').value) / 100; // Convert cm to meters

    // Check for valid input
    if (isNaN(weight) || isNaN(height) || height <= 0) {
        document.getElementById('result').textContent = "Please enter valid weight and height.";
        return;
    }

    // Calculate BMI
    const bmi = weight / (height * height);
    const roundedBmi = bmi.toFixed(2); // Round to 2 decimal places

    // Determine BMI category
    let category;
    if (bmi < 18.5) {
        category = "Underweight";
    } else if (bmi >= 18.5 && bmi < 24.9) {
        category = "Normal weight";
    } else if (bmi >= 25 && bmi < 29.9) {
        category = "Overweight";
    } else {
        category = "Obesity";
    }

    // Display the result
    document.getElementById('result').textContent = `Your BMI is ${roundedBmi}. Category: ${category}`;
});
