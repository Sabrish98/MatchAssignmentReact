import './index.css'

const GameOver = props => {
  const {result, onReset} = props

  const onResetGame = () => {
    onReset()
  }

  return (
    <div className="bg-trophy">
      <h1 className="name-Style">Rahul Junior Assistant /Court Staff</h1>
      <img
        className="trophy-img"
        src="https://assets.ccbp.in/frontend/react-js/match-game-trophy.png"
        alt="trophy"
      />

      <div className="score-container">
        <p>YOUR SCORE</p>
        <h1>{result}</h1>
        <div className="reset-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/match-game-play-again-img.png"
            alt="reset"
          />

          <button onClick={onResetGame} type="button">
            PLAY AGAIN
          </button>
        </div>
      </div>
    </div>
  )
}

export default GameOver
