import './word.css';

export default function Word(props) {

    var checkAgainst = props.user;
    var actualWord = props.value;

    function checker() {

        if(checkAgainst === undefined)
            return <div className='current'>
                    <div style={{color: 'black'}}>
                        │
                    </div>
                    <div>
                        {actualWord}
                    </div>
                </div>;

        if(checkAgainst === actualWord + " ")
        {
            return '';
        }

        var soFar = true;
        var lastTrueIndex = checkAgainst.length;

        for(var i=0;i<checkAgainst.length;i++)
        {
            console.log(checkAgainst, actualWord);
            
            if(checkAgainst[i] === actualWord[i])
            {
                console.log("Going right!");
                // newColor('green');
            }

            else
            {
                console.log("Check again!");
                // newColor('red');
                soFar = false;
                lastTrueIndex = Math.min(lastTrueIndex, i);
                break;
            }

        }

        var textUnderline = (!soFar) ? 'underline' : 'none';
        var incorrect = checkAgainst.slice(lastTrueIndex, checkAgainst.length);
        checkAgainst = checkAgainst.slice(0,lastTrueIndex);

        return(<div className='current'>
            <div style={{color: 'green', textDecoration: textUnderline}}>
                {checkAgainst}
            </div>
            <div style={{color: 'red', textDecoration: 'line-through'}}>
                {incorrect}
            </div>
            <div className="virtual_cursor">
                |
            </div>
            <div>
                {actualWord.slice(lastTrueIndex,)}
            </div>
        </div>);

    }

    if(props.status === true)
        return checker();

    else
    {
        return (<div className="box">
            {actualWord}
        </div>);
    }
}