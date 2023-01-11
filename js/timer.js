export default function Clock({
  minutesDisplay,
  secondsDisplay,
  minutes,
  seconds,
  contador,
  buttonPlay,
  buttonPause
}) {
  const buttonPressAudio = new Audio(
    'https://github.com/maykbrito/automatic-video-creator/blob/master/audios/button-press.wav?raw=true'
  )
  const kitchenTimer = new Audio(
    'https://github.com/maykbrito/automatic-video-creator/blob/master/audios/kichen-timer.mp3?raw=true'
  )

  let timerReset

  function start() {
    timerReset = setTimeout(function () {
      console.log(`${contador} estou aqui`)

      if (seconds <= 0) {
        seconds = 60
        --minutes
        minutesDisplay.textContent = String(minutes).padStart(2, '0')

        console.log(minutes)
      }

      --seconds //-1 segundo
      secondsDisplay.textContent = String(seconds).padStart(2, '0')
      console.log(seconds)

      if (minutes <= 0 && seconds <= 0) {
        minutesDisplay.textContent = String(contador).padStart(2, '0')
        minutes = contador
        buttonPlay.classList.remove('hide')
        buttonPause.classList.add('hide')
        kitchenTimer.play()
        return
      }

      start() //Recursiva - Não vai parar até ter um return dependendo de alguma situação
    }, 1000)
  }

  function pause() {
    clearTimeout(timerReset)
  }

  function stop() {
    buttonPressAudio.play()

    clearTimeout(timerReset)
    minutesDisplay.textContent = String(contador).padStart(2, '0')
    secondsDisplay.textContent = String(0).padStart(2, '0')
    minutes = contador
    buttonPlay.classList.remove('hide')
    buttonPause.classList.add('hide')
    return
  }

  function swapButton() {
    buttonPlay.classList.toggle('hide')
    buttonPause.classList.toggle('hide')
    buttonPressAudio.play()
  }

  function plus() {
    buttonPressAudio.play()
    minutesDisplay.textContent = String(
      Number(minutesDisplay.textContent) + 5
    ).padStart(2, '0')
    console.log(minutesDisplay.textContent)
    minutes = minutes + 5
    console.log(minutes)
    contador = contador + 5
    console.log(contador)
  }

  function reduce() {
    buttonPressAudio.play()

    if (minutes <= 0 || minutes <= 5) {
      alert('Número resultante será igual ou menor que zero')
      return
    }

    minutesDisplay.textContent = String(
      Number(minutesDisplay.textContent) - 5
    ).padStart(2, '0')
    console.log(minutesDisplay.textContent)
    minutes = minutes - 5
    console.log(minutes)
    contador = contador - 5
    console.log(contador)
  }

  return {
    start,
    stop,
    pause,
    swapButton,
    plus,
    reduce
  }
}
