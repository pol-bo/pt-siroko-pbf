document.getElementById('year-button').addEventListener('click', getYearData)

function getYearData(){
    localStorage.setItem('yearData', document.querySelector('input[type="radio"]:checked').value
)}

