function playsound(e) {
  const audio = document.querySelector(`audio[data-key="${e.code.substr(-1)}"]`);
  const activeKey = document.querySelector(`div[data-key="${e.code.substr(-1)}"]`);
  if (audio){
    audio.currentTime = 0;
    audio.play();
    activeKey.classList.add('playing');
  } 
}

function removeTransition(e) {
  // skip it if its not a transform -- we don't want operation to be done like 12 for every propertyName
  if(e.propertyName !== "transform" ) return; 
  this.classList.remove('playing');
  // e will shoot out after transition is completed i.e. 0.7s as per the style sheet 
  // so we are taking a pause here and 'this' === key container div here so we are removing a class from it
}

window.addEventListener('keypress', playsound);
const keys = document.querySelectorAll('.key');
keys.forEach(key=>key.addEventListener('transitionend', removeTransition));
