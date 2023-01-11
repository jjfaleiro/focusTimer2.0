export default function Noise({
  buttonTree,
  buttonCloud,
  buttonCoffeeShop,
  buttonFire,
  oneInput,
  twoInput,
  threeInput,
  fourInput
}) {
  //progress do Volume
  let oneProgress = document.querySelector('#progressOne')
  let twoProgress = document.querySelector('#progressTwo')
  let threeProgress = document.querySelector('#progressThree')
  let fourProgress = document.querySelector('#progressFour')

  function alterVolumeForest() {
    oneProgress = oneInput
    let result = (Number(oneProgress.value) / 100).toFixed(1)
    musicForest.volume = result
  }
  function alterVolumeRain() {
    twoProgress = twoInput
    let result = (Number(twoProgress.value) / 100).toFixed(1)
    musicRain.volume = result
  }
  function alterVolumeCoffee() {
    threeProgress = threeInput
    let result = (Number(threeProgress.value) / 100).toFixed(1)
    musicCoffee.volume = result
  }
  function alterVolumeFirePlace() {
    fourProgress = fourInput
    let result = (Number(fourProgress.value) / 100).toFixed(1)
    musicFirePlace.volume = result
  }

  const musicForest = new Audio('./sounds/Floresta.wav')
  musicForest.loop = true

  const musicRain = new Audio('./sounds/Chuva.wav')
  musicRain.loop = true

  const musicCoffee = new Audio('./sounds/Cafeteria.wav')
  musicCoffee.loop = true

  const musicFirePlace = new Audio('./sounds/Lareira.wav')
  musicFirePlace.loop = true

  function resetSoundsSettingsDarkAndLight() {
    musicForest.pause()
    musicForest.currentTime = 0
    musicRain.pause()
    musicRain.currentTime = 0
    musicCoffee.pause()
    musicCoffee.currentTime = 0
    musicFirePlace.pause()
    musicFirePlace.currentTime = 0
  }

  function forest() {
    if (
      buttonTree.classList.contains('green') ||
      buttonTree.classList.contains('green-dark')
    ) {
      musicRain.pause()
      musicRain.currentTime = 0
      musicCoffee.pause()
      musicCoffee.currentTime = 0
      musicFirePlace.pause()
      musicFirePlace.currentTime = 0
      oneInput.value = 50
      musicForest.volume = 0.5
      musicForest.play()
      return
    }
    oneInput.value = 0
    musicForest.pause()
    musicForest.currentTime = 0
  }

  function rain() {
    if (
      buttonCloud.classList.contains('blue') ||
      buttonCloud.classList.contains('blue-dark')
    ) {
      musicForest.pause()
      musicForest.currentTime = 0
      musicCoffee.pause()
      musicCoffee.currentTime = 0
      musicFirePlace.pause()
      musicFirePlace.currentTime = 0
      twoInput.value = 50
      musicRain.volume = 0.5
      musicRain.play()
      return
    }
    twoInput.value = 0
    musicRain.pause()
    musicRain.currentTime = 0
  }

  function coffee() {
    if (
      buttonCoffeeShop.classList.contains('brown') ||
      buttonCoffeeShop.classList.contains('brown-dark')
    ) {
      musicForest.pause()
      musicForest.currentTime = 0
      musicRain.pause()
      musicRain.currentTime = 0
      musicFirePlace.pause()
      musicFirePlace.currentTime = 0
      threeInput.value = 50
      musicCoffee.volume = 0.5
      musicCoffee.play()
      return
    }
    threeInput.value = 0
    musicCoffee.pause()
    musicCoffee.currentTime = 0
  }

  function fireplace() {
    if (
      buttonFire.classList.contains('red') ||
      buttonFire.classList.contains('red-dark')
    ) {
      musicForest.pause()
      musicForest.currentTime = 0
      musicCoffee.pause()
      musicCoffee.currentTime = 0
      musicRain.pause()
      musicRain.currentTime = 0
      fourInput.value = 50
      musicFirePlace.volume = 0.5
      musicFirePlace.play()
      return
    }
    fourInput.value = 0
    musicFirePlace.pause()
    musicFirePlace.currentTime = 0
  }

  return {
    forest,
    rain,
    coffee,
    fireplace,
    resetSoundsSettingsDarkAndLight,
    alterVolumeForest,
    alterVolumeRain,
    alterVolumeCoffee,
    alterVolumeFirePlace
  }
}
// sound.setVolume(0.5);
// slider = createSlider(0, 1, 0.2, 0.2);
