//Import
import Clock from './timer.js'
import Ink from './colors.js'
import Noise from './sounds.js'

//Minutos e Segundos
const minutesDisplay = document.querySelector('#minutes') //Display dos Minutos
const secondsDisplay = document.querySelector('#seconds') //Display dos Segundos

//Variáveis
let minutes = Number(minutesDisplay.textContent) //Display dos Minutos Tipo NUMBER p/operações
let seconds = Number(secondsDisplay.textContent) //Display dos Segundos Tipo NUMBER p/operações
let contador = Number(minutesDisplay.textContent) //Armazenamentos dos Minutos p/ função stop e reset

//Botões do Cronômetro
const buttonPlay = document.querySelector('#play')
const buttonPause = document.querySelector('#pause')
const buttonStop = document.querySelector('#stop') //
const buttonPlus = document.querySelector('#plus') //
const buttonReduce = document.querySelector('#reduce') //

//==================================================================

//Botões de Sons
let buttonTree = document.querySelector('#tree')
let buttonCloud = document.querySelector('#cloud')
let buttonCoffeeShop = document.querySelector('#coffeeShop')
let buttonFire = document.querySelector('#fire')

//Bloco do Volume
let oneVolume = document.querySelector('#volOne')
let twoVolume = document.querySelector('#volTwo')
let threeVolume = document.querySelector('#volThree')
let fourVolume = document.querySelector('#volFour')
//Input do Volume
let oneInput = document.querySelector('#inputOne')
let twoInput = document.querySelector('#inputTwo')
let threeInput = document.querySelector('#inputThree')
let fourInput = document.querySelector('#inputFour')

//=================================================================

// Light e Dark Mode
let buttonLight = document.querySelector('.sun')
let buttonDark = document.querySelector('.moon')

// SENDO FEITOS ================================================

oneInput.addEventListener('input', volumeForest)
twoInput.addEventListener('input', volumeRain)
threeInput.addEventListener('input', volumeCoffee)
fourInput.addEventListener('input', volumeFirePlace)

function volumeForest() {
  noise.alterVolumeForest()
}

function volumeRain() {
  noise.alterVolumeRain()
}

function volumeCoffee() {
  noise.alterVolumeCoffee()
}

function volumeFirePlace() {
  noise.alterVolumeFirePlace()
}
// FEITOS ====================================================

//Eventos de Light e Dark Mode

buttonDark.addEventListener('click', darkMode)
buttonLight.addEventListener('click', lightMode)

function darkMode() {
  ink.dark()
  noise.resetSoundsSettingsDarkAndLight()
}
function lightMode() {
  ink.light()
  noise.resetSoundsSettingsDarkAndLight()
}

//Eventos do Cronômetro do Relógio

buttonPlay.addEventListener('click', startTimer)
buttonPause.addEventListener('click', pauseTimer)
buttonStop.addEventListener('click', stopTimer)
buttonPlus.addEventListener('click', plusFive)
buttonReduce.addEventListener('click', reduceFive)

//Injeção do Clock

const clock = Clock({
  minutesDisplay,
  secondsDisplay,
  minutes,
  seconds,
  contador,
  buttonPlay,
  buttonPause
})

function startTimer() {
  clock.start()
  clock.swapButton()
}

function pauseTimer() {
  clock.pause()
  clock.swapButton()
}

function stopTimer() {
  clock.stop()
}

function plusFive() {
  clock.plus()
}

function reduceFive() {
  clock.reduce()
}

//==============================================================

//Eventos das Cores dos Botões
buttonTree.addEventListener('click', treeColors)
buttonCloud.addEventListener('click', cloudColors)
buttonCoffeeShop.addEventListener('click', coffeeShopColors)
buttonFire.addEventListener('click', fireColors)

//Injeção das Cores no Botões de Som Modo normal
const ink = Ink({
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
  fourVolume,
})

const noise = Noise({
  buttonTree,
  buttonCloud,
  buttonCoffeeShop,
  buttonFire,
  oneInput,
  twoInput,
  threeInput,
  fourInput
})

function treeColors() {
  ink.green()
  noise.forest()
}
function cloudColors() {
  ink.blue()
  noise.rain()
}
function coffeeShopColors() {
  ink.brown()
  noise.coffee()
}
function fireColors() {
  ink.red()
  noise.fireplace()
}

/* ===Volume==== */
// const musicForest = new Audio('./sounds/Floresta.wav')
// musicForest.loop = true

// const volume = document.querySelector('#volume')

// volume.addEventListener('click', nothing)

// function nothing() {
//   setTimeout(treeColors())
//}
