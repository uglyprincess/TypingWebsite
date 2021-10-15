import react from 'react';
import './word.css';

export default function Word(props) {

    if(props.status === true)
        return <div className="current">
            {props.value}
        </div>;

    if(props.status === false)
    {
        return (<div className="box">
            {props.value}
        </div>);
    }
}