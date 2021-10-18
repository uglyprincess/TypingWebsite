import {React, useState, useRef} from "react";
import randomWords from 'random-words';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import Button from '@material-ui/core/Button';
import WordWindow from './WordWindow.jsx';
import Select from '@material-ui/core/Select';
import InputLabel from "@material-ui/core/InputLabel";
import Timer from './Timer.jsx';
import './typearea.css';

export default function TypeArea(){

    const [difficulty, changeDiff] = useState(4);
    const [typeWords, updateList] = useState(['']);
    const [input] = useState();
    const [inColor, changeColor] = useState('#D1E8E4');
    const [toCompare, updateCompare] = useState({
        data: '',
        typed: ''
    });

    const inputRef = useRef();
    const [time, updateTime] = useState(60);
    const [start, restart] = useState(false);

    var commonWords = randomWords({exactly:500, maxLength: 10 });
    var rareWords = randomWords({exactly:500, maxLength: 15});

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

        freq = 5 - difficulty;
        start = (Math.floor(Math.random()* 100));
        newArray = newArray.concat(rareWords.slice(start, start + freq*100));

        newArray = shuffle(newArray);
        updateCompare({
            data: newArray[0],
            typed: ''
        });

        return(newArray);
    }

    function fetchText() {

        updateList(textGenerator());
        restart(true);
        focus();
    }

    function focus() {

        // console.log(inputRef.current);
        inputRef.current.focus();

    }

    function flush() {

        updateList([]);
        updateCompare({
            data: "",
            typed: ""
        });
    }

    function changeTimeLimit(event) {
        updateTime(event.target.value);
    }

    function checker(event) {

        var wordBeingTyped = event.target.value;
        var currWord = typeWords[0];

        updateCompare({
            data: currWord,
            typed: wordBeingTyped
        });

        // console.log(wordBeingTyped, currWord);

        if(wordBeingTyped === currWord + " ")
        {
            updateCompare({
                data: typeWords[1],
                typed: ''
            });
            
            updateList(typeWords.slice(1,));
            event.target.value = '';

            changeColor('#D1E8E4');
            return;
        }

    }

    return(<div className="whole">
        <div className="configure">
            <div className="settings">
                <div className="settings_diff">
                    <TextField
                    id="outlined-select-difficulty"
                    select
                    label="Level"
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
                <div className="settings_time">
                    <InputLabel id="select-time-limit" className="time_label">Time Limit</InputLabel>
                    <Select
                        labelId="simple-select-label"
                        id="simple-select"
                        className="time_select"
                        value={time}
                        label="Time"
                        onChange={changeTimeLimit}
                    >
                        <MenuItem value={30}>30 seconds</MenuItem>
                        <MenuItem value={60}>60 seconds</MenuItem>
                        <MenuItem value={120}>120 seconds</MenuItem>
                    </Select>
                </div>
            </div>
            <div className="fetch">
                <Button variant="contained" onClick={fetchText} className="bigbutton">
                    Fetch Text!
                </Button>
            </div>

            <div className="timer">
                <Timer limit={time} started={start}/>
            </div>
        </div>
        <div className="displayText">
            <div className="show">
                <WordWindow wordArray={typeWords} received={toCompare}/>
            </div>
        </div>
        <div className="typehere">
            <TextField 
                className="inputfield" 
                variant="filled"
                inputRef={inputRef}
                InputProps={{
                    style: {fontSize: '30px', backgroundColor: inColor}
                }}

                value={input}
                onChange={checker}
            />
        </div>
    </div>);
      
}