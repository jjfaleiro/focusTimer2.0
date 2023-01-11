
function lightMode() {
  buttonLight.classList.toggle('hide')
  buttonDark.classList.toggle('hide')
  buttonPressAudio.play()

  bgBody.classList.toggle('backgroundColorDark')
  cMinutes.classList.toggle('TimerDark')
  cSeconds.classList.toggle('TimerDark')
  cSpan.classList.toggle('TimerDark')

  bgBDarkTree.classList.remove('bgButtonDark')
  bgBDarkFire.classList.remove('bgButtonDark')
  bgBDarkCloud.classList.remove('bgButtonDark')
  bgBDarkCoffee.classList.remove('bgButtonDark')

  iconFirePath.classList.remove('whiteDark')
  iconTreePath.classList.remove('whiteDark')
  iconCoffeeShopPath.classList.remove('whiteDark')
  iconCloudPath.classList.remove('whiteDark')

  iconPlayPath.classList.toggle('whiteDark')
  iconPausePath.classList.toggle('whiteDark')
  iconStopPath.classList.toggle('whiteDark')
  iconPlusPath.classList.toggle('whiteDark')
  iconReducePath.classList.toggle('whiteDark')
}

function darkMode() {
  buttonLight.classList.toggle('hide')
  buttonDark.classList.toggle('hide')
  buttonPressAudio.play()

  bgBody.classList.toggle('backgroundColorDark')
  cMinutes.classList.toggle('TimerDark')
  cSeconds.classList.toggle('TimerDark')
  cSpan.classList.toggle('TimerDark')

  bgBDarkTree.classList.add('bgButtonDark')
  bgBDarkFire.classList.add('bgButtonDark')
  bgBDarkCloud.classList.add('bgButtonDark')
  bgBDarkCoffee.classList.add('bgButtonDark')

  iconFirePath.classList.add('whiteDark')
  iconTreePath.classList.add('whiteDark')
  iconCoffeeShopPath.classList.add('whiteDark')
  iconCloudPath.classList.add('whiteDark')

  iconPlayPath.classList.toggle('whiteDark')
  iconPausePath.classList.toggle('whiteDark')
  iconStopPath.classList.toggle('whiteDark')
  iconPlusPath.classList.toggle('whiteDark')
  iconReducePath.classList.toggle('whiteDark')
}


// let cMinutes = document.querySelector('#minutes')
// let cSeconds = document.querySelector('#seconds')
// let cSpan = document.querySelector('#span')
// let bgBDarkTree = document.querySelector('#tree')
// let bgBDarkFire = document.querySelector('#fire')
// let bgBDarkCloud = document.querySelector('#cloud')
// let bgBDarkCoffee = document.querySelector('#coffeeShop')

// let caguei = document.querySelector('#tree')

//Eventos dos Sons de fundo dos botões
// buttonTree.addEventListener('click', treeSound)
// buttonCloud.addEventListener('click', cloudSound)
// buttonCoffeeShop.addEventListener('click', coffeeSound)
// buttonFire.addEventListener('click', fireSound)

//Path dos SVG dos Sons
// const iconTreePath = document.getElementById('iconTreePath')
// const iconCloudPath = document.getElementById('iconCloudPath')
// const iconCoffeeShopPath = document.getElementById('iconCoffeeShopPath')
// const iconFirePath = document.getElementById('iconFirePath')