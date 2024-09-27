document.getElementById('button').addEventListener('click', function() {
    
    const weight = parseFloat(document.getElementById('weight').value);
    const height = parseFloat(document.getElementById('height').value) / 100; // Convert cm to meters

    if (isNaN(weight) || isNaN(height) || height <= 0) {
        document.getElementById('result').textContent = "Please enter valid weight and height.";
        return;
    }

    
    const bmi = weight / (height * height);
    const roundedBmi = bmi.toFixed(2); 

    
    document.getElementById('result').textContent = `Your BMI is ${roundedBmi}`;
});
