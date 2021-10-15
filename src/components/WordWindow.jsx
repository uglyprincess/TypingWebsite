import {React} from 'react';
import Word from './Word.jsx';
import './word.css';

//You will receive a single word. Highlight it accordingly. 

export default function Words(props) {

    console.log(props.wordArray);

    var curr = props.wordArray[0];

    var arr = props.wordArray.slice(1, 50);

    return <div className='parent'>
        <Word status={true} value={curr}/>
        {arr.map((word) => <Word status={false} value={word}/>)}
    </div>;

}