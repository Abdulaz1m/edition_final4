function chooseRadio1 () {
    document.getElementById("catalog-radio__label1").classList.add("choosed__radio")
    document.getElementById("catalog__body1").classList.add("choosed__radio-block")
    document.getElementById("catalog__body2").classList.remove("choosed__radio-block")
    document.getElementById("radio-line").classList.add("choosed__radio-line")
    document.getElementById("catalog-radio__label2").classList.remove("choosed__radio")
    document.getElementById("radio-line2").classList.remove("choosed__radio-line")
}
function chooseRadio2 () {
    document.getElementById("catalog-radio__label2").classList.add("choosed__radio")
    document.getElementById("catalog__body2").classList.add("choosed__radio-block")
    document.getElementById("catalog__body1").classList.remove("choosed__radio-block")
    document.getElementById("radio-line2").classList.add("choosed__radio-line")
    document.getElementById("catalog-radio__label1").classList.remove("choosed__radio")
    document.getElementById("radio-line").classList.remove("choosed__radio-line")
}

