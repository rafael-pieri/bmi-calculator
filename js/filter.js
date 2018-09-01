var fieldFilter = document.querySelector("#filter-table");

fieldFilter.addEventListener("input", function () {
    var patients = document.querySelectorAll(".patient");

    if (this.value.length > 0) {
        for (var i = 0; i < patients.length; i++) {
            var patient = patients[i];
            var tdName = patient.querySelector(".name-info");
            var name = tdName.textContent;
            var expression = new RegExp(this.value, "i");

            if (!expression.test(name)) {
                patient.classList.add("invisible");
            } else {
                patient.classList.remove("invisible");
            }
        }
    } else {
        for (var i = 0; i < patients.length; i++) {
            var patient = patients[i];
            patient.classList.remove("invisible");
        }
    }
});