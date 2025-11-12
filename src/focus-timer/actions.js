import state from './state.js'
import * as timer from './timer.js'
import * as el from './elements.js'
import * as sound from './sounds.js'

//timer

export function toggleRunning () {
   state.isRunning = document.documentElement.classList.toggle('running')
   timer.countdown()
}

export function reset () {
    document.documentElement.classList.remove('running')
    removeAllExcept()
    state.isRunning = false
    timer.updateDisplay()
}

export function setSeconds () {
    el.seconds.addEventListener('click', () => {
        reset()
        el.seconds.setAttribute('contenteditable', true)
        el.seconds.focus()
        el.seconds.textContent = '00'
    })

    isNumber()

    el.seconds.addEventListener('blur', (event) => {
        let time = event.currentTarget.textContent
        time = time > 59 ? 59 : time

        state.seconds = time
        timer.updateDisplay()
        el.seconds.setAttribute('contenteditable', false)
    })      
}

export function setMinutes () {
    el.minutes.addEventListener('click', () => {
        reset()
        el.minutes.setAttribute('contenteditable', true)
        el.minutes.focus()
        el.minutes.textContent = '00'
    })

    isNumber()

    el.minutes.addEventListener('blur', (event) => {
        let time = event.currentTarget.textContent
        time = time > 60 ? 60 : time

        state.minutes = time
        timer.updateDisplay()
        el.minutes.setAttribute('contenteditable', false)
    })      
}

export function addFiveMinutes () {
    state.minutes = state.minutes + 5
    state.minutes = state.minutes > 60 ? 0 : state.minutes
    timer.updateDisplay()
}

export function subFiveMinutes () {
    state.minutes = state.minutes - 5
    state.minutes = state.minutes < 5 ? 60 : state.minutes
    timer.updateDisplay()
}

function isNumber () {
    el.seconds.onkeypress = (event) => /\d/.test(event.key)
    el.minutes.onkeypress = (event) => /\d/.test(event.key)
}

//ambient sounds

export function forestSound () {
    
    state.forestSound = document.documentElement.classList.toggle('forest-sound')  
    
    if (state.forestSound) {
        removeAllExcept('forest-sound')
        sound.forestSound.play()
        return
    } muteAll() 
    
}

export function rainSound () {

    state.rainSound = document.documentElement.classList.toggle('rain-sound')  
    
    if (state.rainSound) {
        removeAllExcept('rain-sound')
        sound.rainSound.play()
        return
    } muteAll()     
   
}

export function coffeeShopSound () {
    
    state.coffeeShopSoundSound = document.documentElement.classList.toggle('coffee-shop-sound')  
 
    if (state.coffeeShopSoundSound) {
        removeAllExcept('coffee-shop-sound')
        sound.coffeeShopSound.play()
        return
    } muteAll()  
    
}

export function flameSound () {
    
    state.flameSoundSound = document.documentElement.classList.toggle('flame-sound')  
    
    if (state.flameSoundSound) {
        removeAllExcept('flame-sound')
        sound.flameSound.play()
        return
    } muteAll()   
    
}

function muteAll () { 
    sound.forestSound.pause()
    sound.rainSound.pause()
    sound.coffeeShopSound.pause()
    sound.flameSound.pause()
}

function removeAllExcept(classMantain){
    muteAll()
    document.documentElement.classList.remove('forest-sound', 'rain-sound', 'coffee-shop-sound', 'flame-sound')
    document.documentElement.classList.add(classMantain)
}

    