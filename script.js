let firstInput = document.querySelector("#firstInput");
let secondInput = document.querySelector("#secondInput");
let btnAdd = document.querySelector("button");
let result = document.querySelector("h1");

btnAdd.addEventListener("click", () =>{
    let total = parseFloat(firstInput.value) + parseFloat(secondInput.value);
    result.innerText = total;
});