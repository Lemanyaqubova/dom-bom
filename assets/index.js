const button = document.querySelector("#input .form button");
const newDiw = document.querySelector("#input .from button");



button.addEventListener("click", function() {
    const input = document.querySelector("#input .form #Name").value;

    if (input === "") {
        alert("Please input");
    }


})
newDiw.innerHTML += `${Name},`