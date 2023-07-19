document.getElementById('option-button').addEventListener('click', getOptionData)

function getOptionData(){
    localStorage.setItem('optionData', document.querySelector('input[type="radio"]:checked').value      
)}

