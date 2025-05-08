
import React, { useState, useEffect } from 'react';

type CountdownTimerProps = {
  endDate: Date;
};

const CountdownTimer: React.FC<CountdownTimerProps> = ({ endDate }) => {
  const calculateTimeLeft = () => {
    const difference = +endDate - +new Date();
    let timeLeft = {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0
    };

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60)
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  });

  const formatNumber = (num: number) => num.toString().padStart(2, '0');

  return (
    <div className="w-full max-w-md mx-auto">
      <h3 className="text-center text-xl font-semibold mb-4 text-primary">Launching in...</h3>
      <div className="flex justify-between items-center">
        <TimeUnit value={timeLeft.days} label="Days" />
        <div className="text-2xl font-bold text-primary">:</div>
        <TimeUnit value={timeLeft.hours} label="Hours" />
        <div className="text-2xl font-bold text-primary">:</div>
        <TimeUnit value={timeLeft.minutes} label="Minutes" />
        <div className="text-2xl font-bold text-primary">:</div>
        <TimeUnit value={timeLeft.seconds} label="Seconds" />
      </div>
    </div>
  );
};

type TimeUnitProps = {
  value: number;
  label: string;
};

const TimeUnit: React.FC<TimeUnitProps> = ({ value, label }) => {
  const formattedValue = value.toString().padStart(2, '0');
  
  return (
    <div className="flex flex-col items-center">
      <div className="bg-white rounded-lg shadow-lg p-3 w-16 h-16 flex items-center justify-center overflow-hidden">
        <span className="text-2xl md:text-3xl font-bold text-primary animate-count-animation">
          {formattedValue}
        </span>
      </div>
      <span className="text-xs mt-1 text-gray-600">{label}</span>
    </div>
  );
};

export default CountdownTimer;
