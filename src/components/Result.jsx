import {useEffect, useState} from 'react';
import Replay from '@material-ui/icons/Replay';
import './result.css';

export default function ResultCard(props) {

    const [speed, updateSpeed] = useState();

    useEffect(() => {

        var WPM = Math.floor((props.words/props.time) * 60);
        updateSpeed(WPM);
        
    }, [props.words, props.time]);

    function hitReplay() {

        props.parentCallback();
    }

    return (<div className="result_card">
        <div className="speed">
            <h1>Your speed is {speed} WPM!</h1>
            <div className="button_plate">
                <Replay className="replay" onClick={hitReplay}/>
            </div>
        </div>
    </div>);
}