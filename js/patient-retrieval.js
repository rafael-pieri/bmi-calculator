var addButton = document.querySelector("#retrieve-patients");

addButton.addEventListener("click", function () {
    var xhr = new XMLHttpRequest();

    xhr.open("GET", "https://api-pacientes.herokuapp.com/pacientes");

    xhr.addEventListener("load", function () {
        var ajaxError = document.querySelector("#ajax-error");

        if (xhr.status == 200) {
            ajaxError.classList.add("invisible");
            var response = xhr.responseText;

            var translateResponse = response
                .replaceAll('nome', 'name')
                .replaceAll('peso', 'weight')
                .replaceAll('altura', 'height')
                .replaceAll('gordura', 'fat')
                .replaceAll('imc', 'bmi');

            var patients = JSON.parse(translateResponse);

            patients.forEach(function (patient) {
                addNewPatient(patient);
            });
        } else {
            ajaxError.classList.remove("invisible");
        }
    });

    xhr.send();
});

String.prototype.replaceAll = function (search, replacement) {
    var target = this;
    return target.replace(new RegExp(search, 'g'), replacement);
};