window.alert("This website is still under development")
const F = "Fahrenheit (ºF)"
const C = "Celsius (ºC)"
const K = "Kelvin (K)"
const Pound = ["Pound (lb)", "Libra (lb)"]
const Ounce = ["Ounce (oz)", "Onças (oz)"]
const Kg = ["Kilogram (kg)", "Quilogramas (kg)"]
const g = ["gram (g)", "gramas (g)"]
const Miles = ["Miles per hour (mi/h)", "Milhas por hora (mi/h)"]
const Meters = ["Meters per second (m/s)", "Metro por segundos (m/s)"]
const Kilometers = ["Kilometers per hour (Km/h)", "Quilometro por hora (Km/h)"]
const Knot = ["Knot (Nm)", "Nó (Nm)"]

var t1 = document.querySelector("div#valor1")
function add_symbol() {
    var v1= Number(document.getElementById("v1").value)
    var symbol = document.getElementById("medida1").value;
    if (symbol == C){
        symbol = " ºC"
    }
    if (symbol == F){
        symbol = " ºF"
    }
    if (symbol == K){
        symbol = " K"
    }
    if (Pound.includes(symbol)) {
        symbol = ' lb'
    }
    if (Ounce.includes(symbol)) {
        symbol = ' oz'
    }
    if (Kg.includes(symbol)) {
        symbol = ' Kg'
    }
    if (g.includes(symbol)) {
        symbol = ' g'
    }
    if (Miles.includes(symbol)) {
        symbol = ' mi/h'
    }
    if (Meters.includes(symbol)) {
        symbol = ' m/s'
    }
    if (Kilometers.includes(symbol)) {
        symbol = ' Km/h'
    }
    if (Knot.includes(symbol)) {
        symbol = ' Nm'
    }
    
    t1.innerHTML = (v1 + symbol)
}

function calculation() {
    var v1= Number(document.getElementById("v1").value)
    var t2 = document.querySelector("div#valor2")
    var symbol = document.getElementById("medida1").value
    var symbol2 = document.getElementById("medida2").value
    if (symbol2 == C) {
        symbol2 = " Cº"
        if (symbol == F){
            t2.innerHTML = Math.round((v1 - 32) / 1.8 * 100) / 100 + symbol2
        } else if (symbol == K) {
            t2.innerHTML = v1 - 273 - 0.15 + symbol2
        }
    }
    if (symbol2 == F){
        symbol2 = " Fº"
        if (symbol == C){
            t2.innerHTML = Math.round((v1 * (9/5)) + 32 * 100) /100 + symbol2
            } else if (symbol == K) {
                t2.innerHTML = Math.round(((v1 - 273.15) * (9/5)) + 32 * 100) /100 + symbol2
            }

    }
    if (symbol2 == K){
        symbol2 = " K"
        if (symbol == F){
            t2.innerHTML = Math.round(((v1 - 32) / 1.8) + 273.15 * 100) /100 + symbol2
            } else if (symbol == C) {
                t2.innerHTML = v1 + 273 + 0.15 + symbol2
            }
    }
    if (Pound.includes(symbol2)) {
        symbol2 = " lb"
        if (Ounce.includes(symbol)){
            t2.innerHTML = Math.round(v1 / 16 * 100) / 100 + symbol2
        }
        if (Kg.includes(symbol)){
            t2.innerHTML = Math.round(v1 * 2.205 * 100) / 100 + symbol2
        }
        if (g.includes(symbol)) {
            t2.innerHTML = Math.round(v1 / 454 * 100) / 100 + symbol2
        }
    }
    if (Ounce.includes(symbol2)){
        symbol2 = " oz"
        if (Pound.includes(symbol)){
            t2.innerHTML = Math.round(v1 * 16 * 100) / 100 + symbol2
        }
        if (Kg.includes(symbol)){
            t2.innerHTML = Math.round(v1 * 35.274 * 100) / 100 + symbol2
        }
        if (g.includes(symbol)){
            t2.innerHTML = Math.round(v1 / 28.35 * 100) / 100 + symbol2
        }
    }
    if (Kg.includes(symbol2)){
        symbol2 = " Kg"
        if (Pound.includes(symbol)){
            t2.innerHTML = Math.round(v1 / 2.205 * 100) / 100 + symbol2
        }
        if (Ounce.includes(symbol)){
            t2.innerHTML = Math.round(v1 / 35.274 * 100) / 100 + symbol2
        }
        if (g.includes(symbol)){
            t2.innerHTML = Math.round(v1 / 1000 * 100) / 100 + symbol2
        }
    }
    if (g.includes(symbol2)) {
        symbol2 = " g"
        if (Pound.includes(symbol)){
            t2.innerHTML = Math.round(v1 * 454 * 100) / 100 + symbol2
        }
        if (Ounce.includes(symbol)){
            t2.innerHTML = Math.round(v1 * 28.35 * 100) / 100 + symbol2
        }
        if (Kg.includes(symbol)) {
            t2.innerHTML = Math.round(v1 * 1000 * 100) / 100 + symbol2
        }
    }
    if (Miles.includes(symbol2)){
        symbol2 = " mi/h"
        if (Meters.includes(symbol)) {
            t2.innerHTML = Math.round(v1 * 2.237 * 100) / 100 + symbol2
        }
        if (Kilometers.includes(symbol)) {
            t2.innerHTML = Math.round(v1 / 1.609 * 100) /100 + symbol2
        }
        if (Knot.includes(symbol)){
            t2.innerHTML = Math.round(v1 * 1.151 * 100) /100 + symbol2
        }
    }
    if (Meters.includes(symbol2)){
        symbol2 = " m/s"
        if (Miles.includes(symbol)) {
            t2.innerHTML = Math.round(v1 / 2.237 * 100) / 100 + symbol2
        }
        if (Kilometers.includes(symbol)) {
            t2.innerHTML = Math.round(v1 / 3.6 * 100) / 100 + symbol2
        }
        if (Knot.includes(symbol)){
            t2.innerHTML = Math.round(v1 * 1.944 * 100) / 100 + symbol2
        }
    }
    if (Kilometers.includes(symbol2)){
        symbol2 = " Km/h"
        if (Meters.includes(symbol)) {
            t2.innerHTML = Math.round(v1 * 3.6 * 100) / 100 + symbol2
        }
        if (Miles.includes(symbol)) {
            t2.innerHTML = Math.round(v1 * 1.609 * 100) / 100 + symbol2
        }
        if (Knot.includes(symbol)){
            t2.innerHTML = Math.round(v1 * 1.852 * 100) / 100 + symbol2
        }
    }
    if (Knot.includes(symbol2)){
        symbol2 = " Nm"
        if (Meters.includes(symbol)) {
            t2.innerHTML = Math.round(v1 * 1.944 * 100) / 100 + symbol2
        }
        if (Miles.includes(symbol)) {
            t2.innerHTML = Math.round(v1 * 1.151 * 100) / 100 + symbol2
        }
        if (Kilometers.includes(symbol)){
            t2.innerHTML = Math.round(v1 / 1.852 * 100) / 100 + symbol2
        }
    }
}
