
import React, { useEffect, useState } from 'react';

function Timer(props) {
  const { correctWords, startCounting, remainingTime } = props;
  const [timeElapsed, setTimeElapsed] = useState(0);

  useEffect(() => {
    let id;

    if (startCounting && remainingTime > 0) {
      id = setInterval(() => {
        setTimeElapsed((oldTime) => oldTime + 1);
      }, 1000);
    }

    return () => {
      clearInterval(id);
    };
  }, [startCounting, remainingTime]);

  const minutes = (remainingTime - timeElapsed) / 60;
  const speed = correctWords / (minutes || 1);

  return (
    <div>
      <p>
        <b>Time:</b> {remainingTime - timeElapsed}
      </p>
      <p>
        <b>Speed:</b> {speed.toFixed(2)} WPM
      </p>
    </div>
  );
}

export default Timer;
