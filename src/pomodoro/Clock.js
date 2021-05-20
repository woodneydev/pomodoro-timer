import React, { useState } from "react";

function Clock({
  session,
  isTimerRunning,
  focusDuration,
  breakDuration,
  minutesToDuration,
  secondsToDuration,
}) {
  if (!session) {
    return false
  } else {
  return (
    <div>
      {/* TODO: This area should show only when there is an active focus or break - i.e. the session is running or is paused */}
      <div className="row mb-2">
        <div className="col">
          {/* TODO: Update message below to include current session (Focusing or On Break) total duration */}
          <h2 data-testid="session-title">
            {session?.label} for{" "}
            {session?.label === "Focusing"
              ? minutesToDuration(focusDuration)
              : minutesToDuration(breakDuration)}{" "}
            minutes
          </h2>
          {/* TODO: Update message below correctly format the time remaining in the current session */}
          <p className="lead" data-testid="session-sub-title">
            {session ? secondsToDuration(session.timeRemaining) : false}{" "}
            remaining
          </p>
          {isTimerRunning && session ? false : <h3>PAUSED</h3>}
        </div>
      </div>
      <div className="row mb-2">
        <div className="col">
          <div className="progress" style={{ height: "20px" }}>
            <div
              className="progress-bar"
              role="progressbar"
              aria-valuemin="0"
              aria-valuemax="100"
              aria-valuenow={
                session?.label === "Focusing"
                  ? (1 - session.timeRemaining / (focusDuration * 60)) * 100
                  : (1 - session.timeRemaining / (breakDuration * 60)) * 100
              } // TODO: Increase aria-valuenow as elapsed time increases
              style={{
                width: `${
                  (1 - session.timeRemaining / (focusDuration * 60)) * 100
                }%`,
              }} // TODO: Increase width % as elapsed time increases
            />
          </div>
        </div>
      </div>
    </div>
  );}
}

export default Clock;
