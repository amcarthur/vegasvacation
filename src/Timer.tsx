import {useEffect, useState} from "react";
import moment from "moment";

function getCurrentTimeLeft() {
  const eventTime = moment("2032-11-01");
  const currentTime = moment();
  const diffTime = eventTime.diff(currentTime);
  const duration = moment.duration(diffTime);
  return `${duration.years()} years, ${duration.months()} months, ${duration.days()} days, ${duration.hours()} hours, ${duration.minutes()} minutes, ${duration.seconds()} seconds left`;
}

export default function Timer() {
  const [timeLeft, setTimeLeft] = useState(getCurrentTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => setTimeLeft(getCurrentTimeLeft()), 1000);
    return function cleanup() {
      clearInterval(timer)
    }
  });

  return (
    <div className="Timer">
      <span className="Timer-time-left">{timeLeft}</span>
    </div>
  );
}
