let incrbt1 = document.getElementById("incrbt-1")
let incrbt2 = document.getElementById("incrbt-2")
let incrbt3 = document.getElementById("incrbt-3")
let homeScoreEl = document.getElementById("home-score")
let homeScore = 0
let guestScore = 0

function inc1(){
    homeScore += 1
    homeScoreEl.textContent = homeScore
}
function inc2(){
    homeScore += 2
    homeScoreEl.textContent = homeScore
}
function inc3(){
    homeScore += 3
    homeScoreEl.textContent = homeScore
}

//guest score bord//
let incrbt4 = document.getElementById("incrbt-4")
let incrbt5 = document.getElementById("incrbt-5")
let incrbt6 = document.getElementById("incrbt-6")
let guestScoreEl = document.getElementById("guest-score")

function inc4(){
    guestScore += 1
    guestScoreEl.textContent = guestScore
}
function inc5(){
    guestScore += 2
    guestScoreEl.textContent = guestScore
}
function inc6(){
    guestScore += 3
    guestScoreEl.textContent = guestScore
}



