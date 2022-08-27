let addButton = document.getElementById('addButton')
let toDoContainer = document.getElementById('toContainer')
let inputField = document.getElementById('inputField')

addButton.addEventListener('click' ,(event) => {
    event.preventDefault();
    //stops the form to submit
    let text = document.createElement('p')
    text.innerHTML = inputField.value;
    toDoContainer.appendChild(text);
    inputField.value = ""
    text.addEventListener('click',(event) =>{
        text.style.textDecoration = "line-through";
    })
    text.addEventListener('dblclick',(event) =>{
        toDoContainer.removeChild(text);
    })
})