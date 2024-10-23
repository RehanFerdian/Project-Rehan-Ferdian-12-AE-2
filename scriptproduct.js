document.getElementById('quantityinput').addEventListener('input', function() {
    if (this.value < 1) {
        this.value = 1
    }
}) // alternative code for minimum value, to run, add semicolon (;) in the end of the code, and after "1" in "this value"

const quantityinput = document.getElementById('quantityinput');
const stockinfo = document.getElementById('stockinfo');
const maxstock = 20;

stockinfo.innerText = `Available stock = ${maxstock}`; // use the button (`) above the tab button

quantityinput.addEventListener("input", function() {
    let value = parseInt(quantityinput.value);
    if (value < 1){
        quantityinput.value = 1; // another alternative way to make the minimum of value
    }
    if (value > maxstock) {
        quantityinput.value = maxstock; // sets the maximum value
        alert(`Sorry, we only have ${maxstock} items in stock currently!`) // the alert function is to alert the user about an event in the code
    }
});
let colorInput = document.querySelectorAll('.color input'); // querySelectorAll functions to return the inputs made by the user

colorInput.forEach((input) => {
    input.addEventListener("change", function() {
        if (this.checked) {
            productImg.src = this.getAttribute("data-image");
        }
    });
}); //for each performs a specific action for each node in the choices
