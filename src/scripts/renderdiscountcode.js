function renderDiscountCode(){
    let yearItemOne     = parseInt(localStorage.getItem('yearData').slice(2, -1))
    let yearItemTwo     = parseInt(localStorage.getItem('yearData').slice(-1))
    let totalItems      = yearItemOne + yearItemTwo
    let yearOption      = localStorage.getItem('optionData')
    let finalCode       = totalItems + yearOption

    document.getElementById('code-box-discount').innerText = finalCode
}

renderDiscountCode()