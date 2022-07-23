let count = 0
let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")

function increment() {
    count += 1
    countEl.textContent = count

}

function save() {
    let countStr = count + " - "
    saveEl.textContent += countStr
    countEl.textContent = 0 //or we use .innertext = 0 //or this line and after count = 0 is reset code for start from beginning
    count = 0
}
console.log("Let's count people on the subway!")


 
