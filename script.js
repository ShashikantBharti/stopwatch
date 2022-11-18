const start = document.querySelector('.start')
    pause = document.querySelector('.pause')
    resume = document.querySelector('.resume')
    reset = document.querySelector('.reset')
    hrs = document.querySelector('#hrs')
    mins = document.querySelector('#mins')
    sec = document.querySelector('#sec')
    milisec = document.querySelector('#milisec')

let milisecIntervalId, secIntervalId, MinsIntervalId, hrsIntervalId

function addZeroMiliSec(x) {
    if (x < 10) return '00' + x
    if (x < 100) return '0' + x
    return x
}

function addZero(x) {
    if (x < 10) return '0' + x
    return x
}

function startStopWatch(){
     // Start Miliseconds counter
     let i = parseInt(milisec.innerText);
     milisecIntervalId = setInterval(() => {
         if(i==1000) {
             i = 1
         }
         milisec.innerText = addZeroMiliSec(i);
         i += 1
     }, 1)
 
     // Start Seconds Counter
     let j = parseInt(sec.innerText);
     secIntervalId = setInterval(() => {
         if (j == 60) {
             j = 1
         }
         sec.innerText = addZero(j);
         j += 1
     }, 1000)
 
     // Start Minuts Couter
     k = parseInt(mins.innerText);
     MinsIntervalId = setInterval(() => {
         if (k == 60){
             k == 1
         }
         mins.innerText = addZero(k)
         k += 1
     }, 60000)
 
     // Start Hours Couter
     l = parseInt(mins.innerText);
     hrsIntervalId = setInterval(() => {
         if (l == 60){
             l == 1
         }
         mins.innerText = addZero(l)
         l += 1
     }, 3600000)
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
    clearInterval(milisecIntervalId)
    clearInterval(secIntervalId)
    clearInterval(MinsIntervalId)
    clearInterval(hrsIntervalId)


    // Hide and Show Relevant Button
    pause.style.display = 'none'
    start.style.display = 'inline-block'

})



reset.addEventListener('click', (e) => {
    e.preventDefault()
    
    // Clear setInterval function
    clearInterval(milisecIntervalId)
    clearInterval(secIntervalId)
    clearInterval(MinsIntervalId)
    clearInterval(hrsIntervalId)

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










































