window.addEventListener("keydown", function (event) {

 //before declaring the variables console.log key and audio to see the objects ex. KeyCode is a property of object event
  const audio = document.querySelector(`audio[data-key="${event.keyCode}"]`); //for the sound w/ this way we select each audio. no need to declare all variables
  const key = document.querySelector(`.key[data-key="${event.keyCode}"]`)//for the animation

  
  if (!audio) return; //stop the function from running all together
  audio.currentTime =0 //it rewinds it to the start
  audio.play(); //when we press the key it plays all the file.In our case it will play for 2 secods.So we need to reset it so when we press the button multiple times, with every click starts again.
  key.classList.add('playing') // we addd the class playing to the buttons 

   });

//now we want to stop/reset  the animation of the buttons 

const keys = document.querySelectorAll('.key') //pick all keys - console log it
keys.forEach(key=>{
    key.addEventListener('transitionend', removeTransition)
})

function removeTransition(e){
//console.log(e) to find the e.propertyName = 'transform'

if(e.propertyName !=='transform') 
return                // skip if its not transform
console.log(this)
this.classList.remove('playing')

}


