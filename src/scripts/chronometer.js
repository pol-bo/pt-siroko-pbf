function startChronometer(){
    let seconds = 0
    let minutes = 20
    let secondsText
    let minutesText
    let chronometer
    let clockworkContent = document.getElementById('clockwork-box-countdown')
    let clockworkBox = document.querySelector('.clockwork-box')
    let clockworkBoxTimedout = document.querySelector('.clockwork-box-timedout')
    let refreshBtn = document.getElementById('refresh-button')

    function refreshCount(){
        // Los segundos cada vez que actualicemos el contador son segundos -1
        seconds--
        // Si los segundos son menores a cero...
        if (seconds < 0) {
            // ...los segundos pasan a ser 59...
            seconds = 59
            // ...y los minutos pasan a ser minutos -1
            minutes--
        }
        // Si los minutos son menores a cero...
        if (minutes < 0) {
            // ...los segundos los dejamos a 0...
            seconds = 0
            // ...los minutos los dejamos a 0...
            minutes = 0
            // ...y paramos el cronómetro
            clearInterval(chronometer)
            // Añadimos la clase '.invisible'
            clockworkContent.classList.add('invisible')
            // Añadimos la clase '.alert'
            clockworkBox.classList.add('alert')
            // Añadimos la clase '.visible'
            clockworkBoxTimedout.classList.add('visible')

            refreshBtn.addEventListener('click', function(){

                clockworkBoxTimedout.classList.remove('visible')
                clockworkBox.classList.remove('alert')
                clockworkContent.classList.remove('invisible')
                startChronometer()
            })
        }
        secondsText = seconds
        minutesText = minutes

        if (seconds < 10) {
            secondsText = '0' + seconds
        }
        if (minutes < 10) {
            minutesText = '0' + minutes
        }
        
        document.querySelector('#minutes').innerText = minutesText
        document.querySelector('#seconds').innerText = secondsText
        
    }
        chronometer = setInterval(refreshCount, 1000)
    }
    
startChronometer()
