var addButton = document.querySelector("#add-patient");

addButton.addEventListener("click", function (event) {
    event.preventDefault();

    var form = document.querySelector("#add-patient-form");

    var patient = getPatientFromForm(form);

    var errors = validPatient(patient);

    if (errors.length > 0) {
        showErrorMessages(errors);
        return;
    }

    addNewPatient(patient);

    form.reset();

    var errorMessages = document.querySelector("#error-messages");
    errorMessages.innerHTML = "";
});

function getPatientFromForm(form) {
    var patient = {
        name: form.name.value,
        weight: form.weight.value,
        height: form.height.value,
        fat: form.fat.value,
        bmi: calculateBMI(form.weight.value, form.height.value)
    }
    return patient;
}

function trBuilder(patient) {
    var trPatient = document.createElement("tr");
    trPatient.classList.add("patient");

    trPatient.appendChild(tdBuilder(patient.name, "name-info"));
    trPatient.appendChild(tdBuilder(patient.weight, "weight-info"));
    trPatient.appendChild(tdBuilder(patient.height, "height-info"));
    trPatient.appendChild(tdBuilder(patient.fat, "fat-info"));
    trPatient.appendChild(tdBuilder(patient.bmi, "bmi-info"));

    return trPatient;
}

function tdBuilder(data, clazz) {
    var td = document.createElement("td");
    td.classList.add(clazz);
    td.textContent = data;

    return td;
}

function validPatient(patient) {
    var errors = [];

    if (patient.name.length == 0) {
        errors.push("Name can not be blank");
    }

    if (patient.fat.length == 0) {
        errors.push("Body Fat can not be blank");
    }

    if (patient.weight.length == 0) {
        errors.push("Weight can not be blank");
    }

    if (patient.height.length == 0) {
        errors.push("Height can not be blank");
    }

    if (!validWeight(patient.weight)) {
        errors.push("Invalid Weight");
    }

    if (!validHeight(patient.height)) {
        errors.push("Invalid Height");
    }

    return errors;
}

function showErrorMessages(erros) {
    var ul = document.querySelector("#error-messages");
    ul.innerHTML = "";

    erros.forEach(function (error) {
        var li = document.createElement("li");
        li.textContent = error;
        ul.appendChild(li);
    });
}

function addNewPatient(patient) {
    var trPatient = trBuilder(patient);
    var table = document.querySelector("#patient-table");
    table.appendChild(trPatient);
}