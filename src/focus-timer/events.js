import * as el from './elements.js'
import * as actions from './actions.js'
import * as sounds from './sounds.js'


//timer
export function registerControls () {
    el.timerControls.addEventListener('click', (event) => {
        const action = event.target.dataset.action
        
        if (typeof(actions[action]) != "function") {
            return
        }

       actions[action]()
       sounds.buttonPress.play()
    })
}

export function setTimer () {
    actions.setMinutes()
    actions.setSeconds()
}

//ambient sounds
export function registerSoundControls () {
  el.soundControls.addEventListener('click', (event) => {
   const action = event.target.dataset.action

   if (typeof(actions[action]) != "function"){
        return
   }

   actions[action]()
  })
}