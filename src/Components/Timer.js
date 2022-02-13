import React, { useState, useEffect } from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

function Timer() {
    const [time, setTime] = useState(60);

    useEffect(() => {
        if (time > 0) {
            const countDown = setInterval(() => {
                setTime((time) => time - 1);
            }, 1000);
            return () => clearInterval(countDown);
        }
    }, [time]);

    return (
        <div>
            <CircularProgressbar
                value={time}
                text={time > 0 ? time : "Done!"}
                minValue={0}
                maxValue={60}
                styles={buildStyles({
                    textColor: "#D6D6D6",
                    pathColor: "#bd8f46",
                })}
            />
        </div>
    );
}

export default Timer;
