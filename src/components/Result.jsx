import {useEffect, useState} from 'react';

export default function ResultCard(props) {

    const [speed, updateSpeed] = useState();

    useEffect(() => {

        var WPM = Math.floor((props.words/props.time) * 60);
        updateSpeed(WPM);
        
    }, [props.words, props.time]);

    return (<div>
        <h1>Your speed is {speed} WPM!</h1>
    </div>);
}