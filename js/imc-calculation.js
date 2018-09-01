var title = document.querySelector(".title");

var patients = document.querySelectorAll(".patient");

for (var i = 0; i < patients.length; i++) {

    var patient = patients[i];

    var tdWeight = patient.querySelector(".weight-info");
    var weight = tdWeight.textContent;

    var tdHeight = patient.querySelector(".height-info");
    var height = tdHeight.textContent;

    var tdBMI = patient.querySelector(".bmi-info");

    var isValidWeight = validWeight(weight);
    var isValidHeight = validHeight(height);

    if (!isValidWeight) {
        isValidWeight = false;
        tdBMI.textContent = "Invalid Weight";
        patient.classList.add("invalid-patient");
    }

    if (!isValidHeight) {
        isValidHeight = false;
        tdBMI.textContent = "Invalid Height";
        patient.classList.add("invalid-patient");
    }

    if (isValidWeight && isValidHeight) {
        var bmi = calculateBMI(weight, height);
        tdBMI.textContent = bmi;
    }
}

function calculateBMI(weight, height) {
    var bmi = 0;

    bmi = weight / (height * height);

    return bmi.toFixed(2);
}

function validWeight(weight) {
    if (weight >= 0 && weight <= 1000) {
        return true;
    } else {
        return false;
    }
}

function validHeight(height) {
    if (height >= 0 && height <= 3.00) {
        return true;
    } else {
        return false;
    }
}