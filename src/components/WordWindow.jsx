import Word from './Word.jsx';
import './word.css';

//You will receive a single word. Highlight it accordingly. 

export default function Words(props) {

    // console.log(props.wordArray);

    var index = 0;

    var arr = props.wordArray.slice(1, 50);
    var curr = props.received.data;
    var userInput = props.received.typed;

    // console.log(userInput);

    return <div className='parent'>
        <Word status={true} value={curr} key={index++} user={userInput}/>
        {arr.map((word) => <Word status={false} value={word} key={index++}/>)}
    </div>;

}