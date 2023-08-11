import { coffeeShopAudio, fireplaceAudio, forestAudio, playButtonAudio, rainingAudio } from "./sounds.js"
import { coffeeShopBtn, coffeeShopSound, fireplaceBtn, fireplaceSound, forestBtn, forestSound, rainingBtn, rainingSound } from "./selectors.js"

export function playBtnSound() {
  playButtonAudio.play()
}

export function SoundStop() {
  forestSoundOff()
  rainingSoundOff()
  coffeeShopSoundOff()
  fireplaceSoundOff()
}

export function forestSoundOn() {
  forestBtn.classList.add('hide')
  forestSound.classList.remove('hide')
  forestAudio.play()
}

export function forestSoundOff() {
  forestSound.classList.add('hide')
  forestBtn.classList.remove('hide')
  forestAudio.pause()
}

export function rainingSoundOn() {
  rainingBtn.classList.add('hide')
  rainingSound.classList.remove('hide')
  rainingAudio.play()
}

export function rainingSoundOff() {
  rainingSound.classList.add('hide')
  rainingBtn.classList.remove('hide')
  rainingAudio.pause()
}

export function coffeeShopSoundOn() {
  coffeeShopBtn.classList.add('hide')
  coffeeShopSound.classList.remove('hide')
  coffeeShopAudio.play()
}

export function coffeeShopSoundOff() {
  coffeeShopSound.classList.add('hide')
  coffeeShopBtn.classList.remove('hide')
  coffeeShopAudio.pause()
}

export function fireplaceSoundOn() {
  fireplaceBtn.classList.add('hide')
  fireplaceSound.classList.remove('hide')
  fireplaceAudio.play()
}

export function fireplaceSoundOff() {
  fireplaceSound.classList.add('hide')
  fireplaceBtn.classList.remove('hide')
  fireplaceAudio.pause()
}