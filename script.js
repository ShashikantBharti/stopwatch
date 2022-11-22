const start = document.querySelector('.start')
    pause = document.querySelector('.pause')
    resume = document.querySelector('.resume')
    reset = document.querySelector('.reset')
    hrs = document.querySelector('#hrs')
    mins = document.querySelector('#mins')
    sec = document.querySelector('#sec')
    milisec = document.querySelector('#milisec')

let milisecIntervalId, secIntervalId, MinsIntervalId, hrsIntervalId

function addZero(x) {
    if (x < 10) return '00' + x
    if (x < 100) return '0' + x
    return x
}

function startStopWatch(){
    // Start Miliseconds counter
    let ms = parseInt(milisec.innerText)
    s = parseInt(sec.innerText)
    m = parseInt(mins.innerText)
    h = parseInt(hrs.innerText)

    IntervalId = setInterval(() => {

        if(ms >= 999) {
            ms = 0
            s++
        }
        if (s == 59) {
            s = 0
            m++
        }
        if (m == 59) {
            m = 0
            h++
        }
        
        ms += 11

        milisec.innerText = addZero(ms)
        sec.innerText = (s < 10) ? '0' + s : s
        mins.innerText = (m < 10) ? '0' + m : m
        hrs.innerText = (h < 10) ? '0' + h : h
        
    }, 11);
 
}


start.addEventListener('click', (e) => {
    e.preventDefault()

    startStopWatch()

    // Hide and Show relevant buttons
    start.style.display = 'none'
    pause.style.display = 'inline-block'
    reset.style.display = 'inline-block'

})

pause.addEventListener('click', (e) => {
    let seconds = sec.innerText
        minuts = mins.innerText
        miliseconds = milisec.innerText

    if(start.innerText == 'Start') {
        start.innerText = 'Resume'
    }
        
    // Clear setInterval function
    clearInterval(IntervalId)

    // Hide and Show Relevant Button
    pause.style.display = 'none'
    start.style.display = 'inline-block'

})



reset.addEventListener('click', (e) => {
    e.preventDefault()
    
    // Clear setInterval function
    clearInterval(IntervalId)

    start.innerText = 'Start'

    // Reset Values
    hrs.innerText = '00'
    mins.innerText = '00'
    sec.innerText = '00' 
    milisec.innerText = '000'

    // Hide and Show relevant buttons 
    reset.style.display = 'none'
    pause.style.display = 'none'
    start.style.display = 'inline-block'

})










































