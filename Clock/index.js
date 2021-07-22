setInterval(setClock, 1000)

const hours_pointer = document.querySelector("[data-hour-pointer]")
const minutes_pointer = document.querySelector("[data-minute-pointer]")
const seconds_pointer = document.querySelector("[data-second-pointer]")

function setClock(){
    const currentDate = new Date()
    const secondratio = currentDate.getSeconds()/60
    const minuteratio = (secondratio + currentDate.getMinutes())/60
    const hourratio = (minuteratio + currentDate.getHours())/12
    rotation(hours_pointer, hourratio)
    rotation(minutes_pointer, minuteratio)
    rotation(seconds_pointer, secondratio)
}

function rotation(element, ratio){
    element.style.setProperty("--rotation", ratio*360)
}

setClock()