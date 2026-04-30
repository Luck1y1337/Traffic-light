import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const redTime = 15
  const greenTime = 20
  const yellowTime = 3

  const [redColor, setRedColor] = useState('rgb(47, 46, 46)')
  const [yellowColor, setYellowColor] = useState('rgb(47, 46, 46)')
  const [greenColor, setGreenColor] = useState('rgb(47, 46, 46)')

  const [redTimerText, setRedTimerText] = useState('')
  const [greenTimerText, setGreenTimerText] = useState('')

  const [startBtnText, setStartBtnText] = useState('Start')
  const [isRunning, setIsRunning] = useState(false)

  const [emergencyBtnText, setEmergencyBtnText] = useState('Emergency')
  const [isEmergency, setIsEmergency] = useState(false)
  const [isEmergencyActive, setIsEmergencyActive] = useState(false)

  const [intervalId, setIntervalId] = useState(null)
  const [yellowTimeoutId, setYellowTimeoutId] = useState(null)
  const [blinkIntervalId, setBlinkIntervalId] = useState(null)

  useEffect(() => {
    return () => {
      clearInterval(intervalId)
      clearTimeout(yellowTimeoutId)
      clearInterval(blinkIntervalId)
    }
  }, [intervalId, yellowTimeoutId, blinkIntervalId])

  function blinkYellow() {
    let isYellowOn = false
    const id = setInterval(() => {
      if (isYellowOn) {
        setYellowColor('rgb(47, 46, 46)')
        isYellowOn = false
      } else {
        setYellowColor('yellow')
        isYellowOn = true
      }
    }, 500)
    setBlinkIntervalId(id)
  }

  function startEmergency() {
    clearInterval(intervalId)
    clearTimeout(yellowTimeoutId)

    setRedColor('rgb(47, 46, 46)')
    setRedTimerText('')
    setGreenColor('rgb(47, 46, 46)')
    setGreenTimerText('')

    setIsEmergency(true)
    setIsEmergencyActive(true)
    setEmergencyBtnText('Stop Emergency')

    blinkYellow()
  }

  function stopEmergency() {
    clearInterval(blinkIntervalId)
    setIsEmergency(false)
    setIsEmergencyActive(false)
    setEmergencyBtnText('Emergency')
    setYellowColor('rgb(47, 46, 46)')
  }

  function stopTrafficLight() {
    clearInterval(intervalId)
    clearTimeout(yellowTimeoutId)

    setRedColor('rgb(47, 46, 46)')
    setRedTimerText('')
    setYellowColor('rgb(47, 46, 46)')
    setGreenColor('rgb(47, 46, 46)')
    setGreenTimerText('')

    setIsRunning(false)
    setStartBtnText('Start')
  }

  function redTimer(time) {
    setIsRunning(true)
    setStartBtnText('Stop')
    setRedColor('red')
    setRedTimerText(String(time))

    const id = setInterval(() => {
      time -= 1
      setRedTimerText(String(time))

      if (time === yellowTime) {
        setYellowColor('yellow')
      }

      if (time === 0) {
        clearInterval(id)
        setRedColor('rgb(47, 46, 46)')
        setRedTimerText('')
        setYellowColor('rgb(47, 46, 46)')
        greenTimer(greenTime)
      }
    }, 1000)

    setIntervalId(id)
  }

  function yellowTimer() {
    setYellowColor('yellow')
    const id = setTimeout(() => {
      redTimer(redTime)
      setYellowColor('rgb(47, 46, 46)')
    }, 3000)
    setYellowTimeoutId(id)
  }

  function greenTimer(time) {
    setGreenColor('green')
    setGreenTimerText(String(time))

    const intervalId = setInterval(() => {
      time -= 1
      setGreenTimerText(String(time))

      switch (time) {
        case 3: {
          setGreenColor('rgb(47, 46, 46)')
          break
        }
        case 2: {
          setGreenColor('green')
          break
        }
        case 1: {
          setGreenColor('rgb(47, 46, 46)')
          break
        }
        case 0: {
          setGreenColor('green')
          break
        }
        default:
          break
      }

      if (time === 0) {
        clearInterval(intervalId)
        setGreenColor('rgb(47, 46, 46)')
        setGreenTimerText('')
        yellowTimer()
      }
    }, 1000)
  }

  function handleStartClick() {
    if (!isRunning) {
      redTimer(redTime)
    } else {
      stopTrafficLight()
    }
  }

  function handleEmergencyClick() {
    if (!isEmergency) {
      startEmergency()
    } else {
      stopEmergency()
    }
  }

  return (
    <div className="container">
      <div className="box red" style={{ backgroundColor: redColor }}>
        <span className="red-timer timer">{redTimerText}</span>
      </div>

      <div className="box yellow" style={{ backgroundColor: yellowColor }} />

      <div className="box green" style={{ backgroundColor: greenColor }}>
        <span className="green-timer timer">{greenTimerText}</span>
      </div>

      <div className="buttons">
        <button className="start-btn" onClick={handleStartClick}>
          {startBtnText}
          <span className="start-btn__inner">
            <span className="start-btn__blobs">
              <span className="start-btn__blob" />
              <span className="start-btn__blob" />
              <span className="start-btn__blob" />
              <span className="start-btn__blob" />
            </span>
          </span>
        </button>
        <br />
        <button
          className={`emergency-btn ${isEmergencyActive ? 'active' : ''}`}
          onClick={handleEmergencyClick}
        >
          {emergencyBtnText}
        </button>
      </div>
    </div>
  )
}

export default App
