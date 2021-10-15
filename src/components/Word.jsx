import react from 'react';

export default function Word(props) {

    if(props.status === true)
        return 0;

    if(props.status === false)
    {
        return (<div>
            {props.value + ' '}
        </div>);
    }
}