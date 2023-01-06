const ilerlet = document.getElementById('progress')
const once = document.getElementById('prev')
const sonra = document.getElementById('next')
const daireler = document.querySelectorAll('.circle')

let currentActive=1

sonra.addEventListener('click', () => {
    currentActive++

    if (currentActive>daireler.length) {
        currentActive=daireler.length        
    }

    update()
} )

once.addEventListener('click',  () => {
    currentActive--

    if (currentActive < 1){
     currentActive = 1

    }

    update()
} )

function update() {
    daireler.forEach((daire, index) => {
if(index < currentActive) {
    daire.classList.add('active')
} else {
    daire.classList.remove('active')
}
    })

const actives = document.querySelectorAll('.active')
progress.style.width = (actives.length-1) / (daireler.length-1)*100 + '%'

if(currentActive === 1) {
    once.disabled = true
    } else if (currentActive === daireler.length){
        sonra.disabled = true
    } else {
        once.disabled = false
        sonra.disabled = false
    }


}