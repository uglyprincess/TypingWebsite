import {React} from 'react';
import Word from './Word.jsx';

//You will receive a single word. Highlight it accordingly. 

export default function Words(props) {

    console.log(props.wordArray);

    var arr = props.wordArray.slice(0, 50);

    return arr.map((word) => word + ' ');

}