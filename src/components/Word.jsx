import './word.css';

export default function Word(props) {

    var checkAgainst = props.user;
    var actualWord = props.value;

    console.log(checkAgainst);

    function checker() {

        if(checkAgainst === undefined)
            return actualWord;

        if(checkAgainst === actualWord + " ")
        {
            return '';
        }

        for(var i=0;i<checkAgainst.length;i++)
        {
            if(checkAgainst[i] === actualWord[i])
            {
                console.log("Going right!");
            }

            else
            {
                console.log("Check again!");
            }
        }

        return actualWord;

    }

    if(props.status === true)
        return <div className="current">
            {checker()}
        </div>;

    else
    {
        return (<div className="box">
            {actualWord}
        </div>);
    }
}