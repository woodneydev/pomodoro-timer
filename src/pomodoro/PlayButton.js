import React from "react"

function PlayButton({playPause, handleStop, session, isTimerRunning, classNames}) {
    
    return (
        <button
        type="button"
        className="btn btn-primary"
        data-testid="play-pause"
        title="Start or pause timer"
        onClick={playPause}
      >
        <span
          className={classNames({
            oi: true,
            "oi-media-play": !isTimerRunning,
            "oi-media-pause": isTimerRunning,
          })}
        />
      </button>
    )
}


export default PlayButton