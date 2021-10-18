import { useState, useEffect, useRef } from "react";

export default function Timer(props) {

    const [time, ticktock] = useState(props.limit); 
    const id = useRef(null);

    function clear() {
        clearInterval(id.current);
    }

    useEffect(() => {
        
        id.current = setInterval(() => {
            ticktock((time) => time-1);
        }, 1000);

        return () => clear();
    }, []);

    useEffect(() => {
        if(time===0)
            clear();
    }, [time]);

    function hasStarted() {
        if(!props.started)
            return "Press 'Fetch Text' to start!";
        else
            return time;
    }

    return (<div>
        {hasStarted()}
    </div>);
}