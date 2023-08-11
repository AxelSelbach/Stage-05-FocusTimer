import { SoundStop, coffeeShopSoundOff, coffeeShopSoundOn, fireplaceSoundOff, fireplaceSoundOn, forestSoundOff, forestSoundOn, playBtnSound, rainingSoundOff, rainingSoundOn } from "./controls.js";
import { coffeeShopBtn, coffeeShopSound, decreaseButton, fireplaceBtn, fireplaceSound, forestBtn, forestSound, increaseButton, minutesDisplay, playButton, rainingBtn, rainingSound, secondsDisplay, stopButton } from "./selectors.js";
import { playButtonAudio } from "./sounds.js";

let initialMinutes = parseInt(minutesDisplay.textContent);
let initialSeconds = parseInt(secondsDisplay.textContent);
let countdownInterval;
let minutes;
let seconds;



function startCountdown() {
 playBtnSound()
 minutes = initialMinutes;
 seconds = initialSeconds;

  function countdown() {
    if (seconds === 0) {
      if (minutes === 0) {
        clearInterval(countdownInterval);
        timerEndAudio.play()
        minutesDisplay.textContent = initialMinutes < 10 ? '0' + initialMinutes : initialMinutes;
        secondsDisplay.textContent = initialSeconds < 10 ? '0' + initialSeconds : initialSeconds;
        return;
      } else {
        minutes--;
        seconds = 59;
      }
    } else {
      seconds--;
    }
    minutesDisplay.textContent = minutes < 10 ? '0' + minutes : minutes;
    secondsDisplay.textContent = seconds < 10 ? '0' + seconds : seconds;
  }

  countdownInterval = setInterval(countdown, 1000);
};

function stopCountdown() {
  playButtonAudio.play()
  clearInterval(countdownInterval);
  minutesDisplay.textContent = initialMinutes < 10 ? '0' + initialMinutes : initialMinutes;
  secondsDisplay.textContent = initialSeconds < 10 ? '0' + initialSeconds : initialSeconds;
  SoundStop();
};

function increaseMinutes() {
  playButtonAudio.play()
  initialMinutes += 5;
  minutesDisplay.textContent = initialMinutes < 10 ? '0' + initialMinutes : initialMinutes;
};

function decreaseMinutes() {
  playButtonAudio.play()
  if (initialMinutes > 5) {
    initialMinutes -= 5;
    minutesDisplay.textContent = initialMinutes < 10 ? '0' + initialMinutes : initialMinutes;
  }
};

forestBtn.addEventListener('click', forestSoundOn);
forestSound.addEventListener('click', forestSoundOff);
rainingBtn.addEventListener('click', rainingSoundOn);
rainingSound.addEventListener('click', rainingSoundOff);
coffeeShopBtn.addEventListener('click', coffeeShopSoundOn);
coffeeShopSound.addEventListener('click', coffeeShopSoundOff);
fireplaceBtn.addEventListener('click', fireplaceSoundOn);
fireplaceSound.addEventListener('click', fireplaceSoundOff);
playButton.addEventListener('click', startCountdown);
stopButton.addEventListener('click', stopCountdown);
increaseButton.addEventListener('click', increaseMinutes);
decreaseButton.addEventListener('click', decreaseMinutes);