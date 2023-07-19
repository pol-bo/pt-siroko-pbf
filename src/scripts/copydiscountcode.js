function copyFinalCode(){
    let codeBoxDiscount = document.getElementById('Code-box-discount').textContent
    let codeBoxBtn      = document.getElementById('Code-box-button')

    navigator.clipboard.writeText(codeBoxDiscount)
}

copyFinalCode()