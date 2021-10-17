import { useState, useEffect } from "react";

export default function Timer(props) {

    const [time, tickTime] = useState(props.limit);

    useEffect(() => {
        
        const timerWindow = time>0 && setInterval(() => {
            tickTime(time => time-1);
        }, 1000);
    
        //This function takes in one variable, the ID of the setInterval function, and clears it.
        //Here, we are storing that ID in the constant 'timerWindow'.

        return () => {
            clearInterval(timerWindow);
        }

    },[time]);

    function timeOrNot () {

        if(!props.start)
            return "Press 'Fetch Text' to start the timer!";
        else
            return time;
    }

    return (<div>
        {timeOrNot()}
    </div>);

}