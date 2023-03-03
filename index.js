const emailInput = document.getElementById("email");
const submitBtn = document.querySelector("div.account > button[type='submit']");
const form = document.querySelector("#signup-form");
const formInputs = form.getElementsByTagName("input");


form.addEventListener("submit", function(e) {
    e.preventDefault();
    if (!form.checkValidity()) {
        this.querySelectorAll("input").forEach((element) => {
            checkInvalidInput(element);
        });   
    }
    if (form.querySelector("#pass1").value !== form.querySelector("#pass2").value) {
        alert("Passwords do not match");
    }
    
})

Array.from(formInputs).forEach(function(element) {
    element.addEventListener("blur", (e) => {
        checkInvalidInput(element);
    })
});

function checkInvalidInput(input) {
    if (form.querySelector(`#hidden_${input.id}`)) {
        if (input.checkValidity()) {
            form.querySelector(`#hidden_${input.id}`).classList.remove("visible");
        }
        else {
            form.querySelector(`#hidden_${input.id}`).classList.add("visible");
        }
    }
}
