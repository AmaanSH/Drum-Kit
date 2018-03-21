function playSound(e)
{

  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);

  if (!audio) return; // stops function from running

  audio.currentTime = 0; // rewinds the audio

  audio.play();

  // adds the #playing class from stylesheet 
  key.classList.add('playing');

}

function removeTransition(e)
{
  
  if(e.propertyName !== 'transform') return; // skip if it its' not a transform
  

  this.classList.remove('playing');

}

const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', removeTransition));

// adds event listener for the keydown event
window.addEventListener('keydown', playSound)