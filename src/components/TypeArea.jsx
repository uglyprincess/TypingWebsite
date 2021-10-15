import {React, useState} from "react";
import randomWords from 'random-words';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import Button from '@material-ui/core/Button';
import Words from './Words.jsx';
import './typearea.css';

export default function TypeArea(){

    const [difficulty, changeDiff] = useState(4);
    const [typeWords, updateList] = useState(['']);
    const [index, changeIndex] = useState(0);
    const [input, checkInput] = useState();

    var commonWords = randomWords({exactly:500, maxLength: 10 });
    var rareWords = randomWords({exactly: 300, maxLength: 15, minLength: 10});

    const settings = [
        {
            value: 4,
            label: "Novice"
        },
        {
            value: 3,
            label: "Easy"
        },
        {
            value: 2,
            label: "Moderate"
        },
        {
            value: 1,
            label: "Hard"
        },
        {
            value: 0,
            label: "Expert"
        }
    ]

    function shuffle(array) {

        var currIndex = array.length, randIndex;

        while(currIndex!==0)
        {
            randIndex = Math.floor(Math.random() * currIndex);
            currIndex--;

            [array[currIndex], array[randIndex]] = [array[randIndex], array[currIndex]];
        }

        return array;
    }

    function handleChange(event) {
        changeDiff(event.target.value);
    }

    function textGenerator() {
        
        let newArray = [];

        let freq = difficulty;
        let start = (Math.floor(Math.random() * 100));
        newArray = commonWords.slice(start, start + freq*100);
        // console.log(commonWords);
        // console.log(typeWords);

        freq = 5 - difficulty;
        start = (Math.floor(Math.random()* 100));
        newArray = newArray.concat(rareWords.slice(start, start + freq*100));

        return(shuffle(newArray));
    }

    function fetchText() {

        updateList(textGenerator());
    }

    // function updateIndex() {

    //     var i = index;

    //     changeIndex(i+1);
    //     return i;
    // }

    function checker(event) {

        var wordBeingTyped = event.target.value;
        var currWord = typeWords[0];

        if(wordBeingTyped === currWord + " ")
        {
            typeWords.splice(0,1);
            event.target.value = '';
            return;
        }

        for(var i=0;i<wordBeingTyped.length;i++)
        {
            console.log(wordBeingTyped, currWord);

            if(wordBeingTyped[i] !== currWord[i])
            {
                console.log("Wrong!");
            }

            else
            {
                console.log("Correct!");
            }
        }
    }

    return(<div className="whole">
        <div className="configure">
            <div className="dial">
                <TextField
                id="outlined-select-difficulty"
                select
                label="Select"
                value={difficulty}
                onChange={handleChange}
                helperText="Please select desired difficulty"
                >
                {settings.map((setting) => (
                    <MenuItem key={setting.value} value={setting.value}>
                    {setting.label}
                    </MenuItem>
                ))}
                </TextField>
            </div>
            <div className="fetch">
                <Button variant="contained" onClick={fetchText} className="bigbutton">
                    Fetch Text!
                </Button>
            </div>
            <div className="timer">
                {/* Timer! */}
            </div>
        </div>
        <div className="displayText">
            <div className="show">
                {/* {Stuff} */}
            </div>
        </div>
        <div className="typehere">
            <TextField 
                className="inputfield" 
                variant="filled"
                InputProps={{
                    style: {fontSize: '30px'}
                }}

                value={input}
                onChange={checker}
            />
        </div>
    </div>);
      
}