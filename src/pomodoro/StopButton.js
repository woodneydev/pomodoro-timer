import React from "react"

function StopButton({ handleStop, session }) {
  return (
    <button
      type="button"
      className="btn btn-secondary"
      data-testid="stop"
      title="Stop the session"
      disabled={session ? false : true}
      onClick={handleStop}
    >
      <span className="oi oi-media-stop" />
    </button>
  );
}

export default StopButton
