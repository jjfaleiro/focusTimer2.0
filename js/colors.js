export default function Ink({
  buttonTree,
  buttonCloud,
  buttonCoffeeShop,
  buttonFire,
  buttonLight,
  buttonDark,
  buttonPlay,
  buttonPause,
  buttonStop,
  buttonPlus,
  buttonReduce,
  minutesDisplay,
  secondsDisplay,
  oneInput,
  twoInput,
  threeInput,
  fourInput,
  oneVolume,
  twoVolume,
  threeVolume,
  fourVolume
}) {
  let bgBody = document.querySelector('body')

  //REFATORAR DEPOIS
  const span = document.querySelector('#span')
  const buttonPressAudio = new Audio(
    'https://github.com/maykbrito/automatic-video-creator/blob/master/audios/button-press.wav?raw=true'
  )

  function configDark() {
    //Body
    bgBody.classList.remove('body')
    bgBody.classList.add('body-dark')
    //Relogio
    minutesDisplay.classList.remove('numbers')
    minutesDisplay.classList.add('numbers-dark')
    secondsDisplay.classList.remove('numbers')
    secondsDisplay.classList.add('numbers-dark')
    span.classList.remove('numbers')
    span.classList.add('numbers-dark')
    //Botões do cronometro
    buttonPlay.classList.remove('controls')
    buttonPlay.classList.add('controls-dark')
    buttonPause.classList.remove('controls')
    buttonPause.classList.add('controls-dark')
    buttonStop.classList.remove('controls')
    buttonStop.classList.add('controls-dark')
    buttonPlus.classList.remove('controls')
    buttonPlus.classList.add('controls-dark')
    buttonReduce.classList.remove('controls')
    buttonReduce.classList.add('controls-dark')
    //Botões de som
    buttonTree.classList.remove('music')
    buttonTree.classList.add('music-dark')
    buttonCloud.classList.remove('music')
    buttonCloud.classList.add('music-dark')
    buttonCoffeeShop.classList.remove('music')
    buttonCoffeeShop.classList.add('music-dark')
    buttonFire.classList.remove('music')
    buttonFire.classList.add('music-dark')
    //Cores do Volume
    oneVolume.classList.remove('volume')
    oneVolume.classList.add('volume-dark')
    twoVolume.classList.remove('volume')
    twoVolume.classList.add('volume-dark')
    threeVolume.classList.remove('volume')
    threeVolume.classList.add('volume-dark')
    fourVolume.classList.remove('volume')
    fourVolume.classList.add('volume-dark')
    //Input do Volume
    oneInput.value = 0
    twoInput.value = 0
    threeInput.value = 0
    fourInput.value = 0
  }

  function configLight() {
    //Body
    bgBody.classList.remove('body-dark')
    bgBody.classList.add('body')
    //Relogio
    minutesDisplay.classList.add('numbers')
    minutesDisplay.classList.remove('numbers-dark')
    secondsDisplay.classList.add('numbers')
    secondsDisplay.classList.remove('numbers-dark')
    span.classList.add('numbers')
    span.classList.remove('numbers-dark')
    //Botões do relogio
    buttonPlay.classList.add('controls')
    buttonPlay.classList.remove('controls-dark')
    buttonPause.classList.add('controls')
    buttonPause.classList.remove('controls-dark')
    buttonStop.classList.add('controls')
    buttonStop.classList.remove('controls-dark')
    buttonPlus.classList.add('controls')
    buttonPlus.classList.remove('controls-dark')
    buttonReduce.classList.add('controls')
    buttonReduce.classList.remove('controls-dark')
    //Botões de som
    buttonTree.classList.add('music')
    buttonTree.classList.remove('music-dark')
    buttonCloud.classList.add('music')
    buttonCloud.classList.remove('music-dark')
    buttonCoffeeShop.classList.add('music')
    buttonCoffeeShop.classList.remove('music-dark')
    buttonFire.classList.add('music')
    buttonFire.classList.remove('music-dark')
    //Cores do Volume
    oneVolume.classList.remove('volume-dark')
    oneVolume.classList.add('volume')
    twoVolume.classList.remove('volume-dark')
    twoVolume.classList.add('volume')
    threeVolume.classList.remove('volume-dark')
    threeVolume.classList.add('volume')
    fourVolume.classList.remove('volume-dark')
    fourVolume.classList.add('volume')
    //Input do Volume
    oneInput.value = 0
    twoInput.value = 0
    threeInput.value = 0
    fourInput.value = 0
  }

  function resetColorsSettingsDarkAndLight() {
    buttonTree.classList.remove('green')
    buttonTree.classList.remove('green-dark')
    buttonTree.classList.remove('white')
    buttonCloud.classList.remove('blue')
    buttonCloud.classList.remove('blue-dark')
    buttonCloud.classList.remove('white')
    buttonCoffeeShop.classList.remove('brown')
    buttonCoffeeShop.classList.remove('brown-dark')
    buttonCoffeeShop.classList.remove('white')
    buttonFire.classList.remove('red')
    buttonFire.classList.remove('red-dark')
    buttonFire.classList.remove('white')
    //
    oneVolume.classList.remove('green')
    oneVolume.classList.remove('green-dark')
    oneVolume.classList.remove('white')
    twoVolume.classList.remove('blue')
    twoVolume.classList.remove('blue-dark')
    twoVolume.classList.remove('white')
    threeVolume.classList.remove('brown')
    threeVolume.classList.remove('brown-dark')
    threeVolume.classList.remove('white')
    fourVolume.classList.remove('red')
    fourVolume.classList.remove('red-dark')
    fourVolume.classList.remove('white')
  }

  function dark() {
    buttonLight.classList.remove('hide')
    buttonDark.classList.add('hide')
    buttonPressAudio.play()

    //Alterações
    configDark()
    resetColorsSettingsDarkAndLight()
  }

  function light() {
    buttonLight.classList.add('hide')
    buttonDark.classList.remove('hide')
    buttonPressAudio.play()

    //Alterações
    configLight()
    resetColorsSettingsDarkAndLight()
  }

  function green() {
    buttonCloud.classList.remove('blue')
    buttonCloud.classList.remove('blue-dark')
    buttonCloud.classList.remove('white')
    buttonCoffeeShop.classList.remove('brown')
    buttonCoffeeShop.classList.remove('brown-dark')
    buttonCoffeeShop.classList.remove('white')
    buttonFire.classList.remove('red')
    buttonFire.classList.remove('red-dark')
    buttonFire.classList.remove('white')
    //
    twoVolume.classList.remove('blue')
    twoVolume.classList.remove('blue-dark')
    twoVolume.classList.remove('white')
    threeVolume.classList.remove('brown')
    threeVolume.classList.remove('brown-dark')
    threeVolume.classList.remove('white')
    fourVolume.classList.remove('red')
    fourVolume.classList.remove('red-dark')
    fourVolume.classList.remove('white')

    twoInput.value = 0
    threeInput.value = 0
    fourInput.value = 0

    if (bgBody.classList.contains('body-dark')) {
      buttonTree.classList.toggle('green-dark')
      buttonTree.classList.toggle('white')
      oneVolume.classList.toggle('green-dark')
      oneVolume.classList.toggle('white')
      return
    } else {
      buttonTree.classList.toggle('green')
      buttonTree.classList.toggle('white')
      oneVolume.classList.toggle('green')
      oneVolume.classList.toggle('white')
      return
    }
  }

  function blue() {
    buttonTree.classList.remove('green')
    buttonTree.classList.remove('green-dark')
    buttonTree.classList.remove('white')
    buttonCoffeeShop.classList.remove('brown')
    buttonCoffeeShop.classList.remove('brown-dark')
    buttonCoffeeShop.classList.remove('white')
    buttonFire.classList.remove('red')
    buttonFire.classList.remove('red-dark')
    buttonFire.classList.remove('white')
    //
    oneVolume.classList.remove('green')
    oneVolume.classList.remove('green-dark')
    oneVolume.classList.remove('white')
    threeVolume.classList.remove('brown')
    threeVolume.classList.remove('brown-dark')
    threeVolume.classList.remove('white')
    fourVolume.classList.remove('red')
    fourVolume.classList.remove('red-dark')
    fourVolume.classList.remove('white')

    oneInput.value = 0
    threeInput.value = 0
    fourInput.value = 0

    if (bgBody.classList.contains('body-dark')) {
      buttonCloud.classList.toggle('blue-dark')
      buttonCloud.classList.toggle('white')
      twoVolume.classList.toggle('blue-dark')
      twoVolume.classList.toggle('white')
      return
    } else {
      buttonCloud.classList.toggle('blue')
      buttonCloud.classList.toggle('white')
      twoVolume.classList.toggle('blue')
      twoVolume.classList.toggle('white')

      return
    }
  }

  function brown() {
    buttonCloud.classList.remove('blue')
    buttonCloud.classList.remove('blue-dark')
    buttonCloud.classList.remove('white')
    buttonTree.classList.remove('green')
    buttonTree.classList.remove('green-dark')
    buttonTree.classList.remove('white')
    buttonFire.classList.remove('red')
    buttonFire.classList.remove('red-dark')
    buttonFire.classList.remove('white')
    //
    oneVolume.classList.remove('green')
    oneVolume.classList.remove('green-dark')
    oneVolume.classList.remove('white')
    twoVolume.classList.remove('blue')
    twoVolume.classList.remove('blue-dark')
    twoVolume.classList.remove('white')
    fourVolume.classList.remove('red')
    fourVolume.classList.remove('red-dark')
    fourVolume.classList.remove('white')

    oneInput.value = 0
    twoInput.value = 0
    fourInput.value = 0

    if (bgBody.classList.contains('body-dark')) {
      buttonCoffeeShop.classList.toggle('brown-dark')
      buttonCoffeeShop.classList.toggle('white')
      threeVolume.classList.toggle('brown-dark')
      threeVolume.classList.toggle('white')
      return
    } else {
      buttonCoffeeShop.classList.toggle('brown')
      buttonCoffeeShop.classList.toggle('white')
      threeVolume.classList.toggle('brown')
      threeVolume.classList.toggle('white')

      return
    }
  }

  function red() {
    buttonCloud.classList.remove('blue')
    buttonCloud.classList.remove('blue-dark')
    buttonCloud.classList.remove('white')
    buttonCoffeeShop.classList.remove('brown')
    buttonCoffeeShop.classList.remove('brown-dark')
    buttonCoffeeShop.classList.remove('white')
    buttonTree.classList.remove('green')
    buttonTree.classList.remove('green-dark')
    buttonTree.classList.remove('white')
    //
    oneVolume.classList.remove('green')
    oneVolume.classList.remove('green-dark')
    oneVolume.classList.remove('white')
    twoVolume.classList.remove('blue')
    twoVolume.classList.remove('blue-dark')
    twoVolume.classList.remove('white')
    threeVolume.classList.remove('brown')
    threeVolume.classList.remove('brown-dark')
    threeVolume.classList.remove('white')

    oneInput.value = 0
    twoInput.value = 0
    threeInput.value = 0

    if (bgBody.classList.contains('body-dark')) {
      buttonFire.classList.toggle('red-dark')
      buttonFire.classList.toggle('white')
      fourVolume.classList.toggle('red-dark')
      fourVolume.classList.toggle('white')
      return
    } else {
      buttonFire.classList.toggle('red')
      buttonFire.classList.toggle('white')
      fourVolume.classList.toggle('red')
      fourVolume.classList.toggle('white')

      return
    }
  }

  return {
    green,
    blue,
    brown,
    red,
    dark,
    light
  }
}

// if (bgBody.classList.contains('backgroundColorDark')) {
//   bgBDarkTree.classList.toggle('bgButtonDark')
//   Tree.classList.toggle('whiteDark')
//   Tree.classList.toggle('white')
//   console.log('YES')
//   if (help) {
//     caguei.style.backgroundColor = 'red'
//     help = false
//   } else {
//     caguei.style.backgroundColor = ''
//     help = true
//   }
//   return
// }

// let help = true

//SVG dos Botões de Som
// let Tree = document.getElementById('Tree')
// let Cloud = document.getElementById('Cloud')
// let CoffeShop = document.getElementById('CoffeShop')
// let Fire = document.getElementById('Fire')
