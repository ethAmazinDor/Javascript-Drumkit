window.addEventListener('keydown', playSound)



function playSound(e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`)
    const key = document.querySelector(`div[data-key="${e.keyCode}"]`)
    if (!audio) return; // stops fnction from running all together
    audio.currentTime = 0 //rewind the currentTime to the start everytime a key is pressed down 
    audio.play()
    key.classList.add('playing')

}

function removeTransition(e) {
    if (e.propertyName !== 'transform') //skip it if it's not a transform
        return

    this.classList.remove('playing')

    console.log(this)
}


const keys = document.querySelectorAll('.key')

keys.forEach(key => key.addEventListener('transitionend', removeTransition)) //each key gets an event listener added to it and we run a function called remove transition 


