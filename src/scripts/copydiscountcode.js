function copyFinalCode(){
    let codeBoxDiscount = document.getElementById('code-box-discount').textContent
    let codeBoxBtn      = document.getElementById('code-box-button')

    navigator.clipboard.writeText(codeBoxDiscount)
}

copyFinalCode()