import './word.css';

export default function Word(props) {

    var checkAgainst = props.user;
    var actualWord = props.value;

    function checker() {

        if(checkAgainst === undefined)
            return <div className='current'>
                    {actualWord}
                </div>;

        if(checkAgainst === actualWord + " ")
        {
            return '';
        }

        var soFar = true;

        for(var i=0;i<checkAgainst.length;i++)
        {
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
            }

        }

        var textColor = (soFar) ? 'green' : 'red';

        return(<div className='current'>
            <div style={{color: textColor}}>
                {checkAgainst}
            </div>
            <div>
                {actualWord.slice(checkAgainst.length,)}
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