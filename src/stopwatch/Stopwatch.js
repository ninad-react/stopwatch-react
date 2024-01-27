import { useState,  useEffect } from "react";

import "./style.css";

const Stopwatch = () => {

    const[time, setTime] = useState(0);
    const[isRunning, setIsRunning] = useState(false);

    // to calculate milliseconds
    const milliseconds = time % 100;

    //to calculate seconds
    const seconds = Math.floor((time % 6000) / 100);
    
    //to calculate minutes
    const minutes = Math.floor((time %  3600000) / 6000);

    //to calculate hours
    const hours = Math.floor(time / 3600000);

    useEffect(() => {
        let interval;

        if(isRunning){
            interval = setInterval(() => setTime(time + 1), 10);
        }

        return () => {
            clearInterval(interval);
        }
    }, [time, isRunning]);

    const handleStartAndStop = () => {
        setIsRunning(!isRunning);
    };

    const handleReset = () => {
        setTime(0);
    }

    return (
    <>
        <h1 className="heading">Stopwatch with React</h1>
        <p className="showTime">{hours.toString().padStart(2, "0")}:{minutes.toString().padStart(2, "0")}:{seconds.toString().padStart(2, "0")}:{milliseconds.toString().padStart(2, "0")}</p>
        <div className="buttons">
            <button className="btn" onClick={handleStartAndStop}>
                {isRunning ? "Stop" : "Start"}</button>
            <button className="btn" onClick={handleReset}>Reset</button>
        </div>
    </>
)
}

export default Stopwatch;