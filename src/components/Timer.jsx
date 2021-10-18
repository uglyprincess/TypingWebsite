import { useState, useEffect, useRef } from "react";

export default function Timer(props) {

    const [time, ticktock] = useState(props.limit); 
    const id = useRef(null);

    function clear() {
        clearInterval(id.current);
    }

    useEffect(() => {
        ticktock(props.limit);
    }, [props.limit]);

    useEffect(() => {

        if(props.started)
        {
            id.current = setInterval(() => {
                ticktock((time) => time-1);
            }, 1000);
        }
        else
            ticktock(props.limit);

        return () => clear();
    }, [props.started]);

    useEffect(() => {
        if(time===0)
            clear();
    }, [time]);

    function hasStarted() {

        console.log(props.started, time, props.limit);

        if(!props.started)
            return "Press 'Fetch Text' to start!";
        else if(time!==0)
            return time;
        else
        {
            props.parentCallback();
            return "Time up!";
        }
    }

    return (<div>
        {hasStarted()}
    </div>);
}