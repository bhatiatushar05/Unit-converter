let numBtn = document.getElementById("num-btn")
let solEl1 = document.getElementById("sol-1")
let solEl2 = document.getElementById("sol-2")
let solEl3 = document.getElementById("sol-3")

numBtn.addEventListener("click",function(){
    let inputAr = document.getElementById("input-area")
let feet = Number(inputAr.value) * 3.281 
let kilogram = Number(inputAr.value) * 0.453592
let litre = Number(inputAr.value) * 3.78541 
let metre= Number(inputAr.value) * 0.3048 
let pounds = Number(inputAr.value) * 2.204 
let gallon = Number(inputAr.value) * 0.264
 
    solEl1.innerHTML = `${Number(inputAr.value)} metres = ${feet.toFixed(2)} Feet | ${Number(inputAr.value)} Feets = ${metre.toFixed(2)} Metres.` 
    solEl2.innerHTML = `${Number(inputAr.value)} Kilograms = ${pounds.toFixed(2)} Pounds | ${Number(inputAr.value)} Pounds = ${kilogram.toFixed(2)} Kilograms.` 
    solEl3.innerHTML = `${Number(inputAr.value)} Litres = ${gallon.toFixed(2)} Gallons | ${Number(inputAr.value)} Gallons = ${litre.toFixed(2)} Litres.`   
})