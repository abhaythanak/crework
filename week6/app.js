let addButton = document.getElementById('addButton')
let toDoContainer = document.getElementById('toContainer')
let inputField = document.getElementById('inputField')

addButton.addEventListener('click' ,() => {
    let text = document.createElement('p')
    text.innerHTML = inputField.value;
    toDoContainer.appendChild(text);
})