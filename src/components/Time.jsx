import React , {useState} from "react";

function Time(){
    let date = new Date().toLocaleDateString('en-US', {
            day: 'numeric',
            month: 'long',
            year: 'numeric'});
    let time = new Date().toLocaleTimeString("it-IT");
    const[timenow,setTime] = useState(time);
    const[datenow,setDate] = useState(date);
    function timeNow(){
        let time = new Date().toLocaleTimeString("it-IT");
        setTime(time);
    }
    function dateNow(){
        let date = new Date().toLocaleDateString('en-US', {
            day: 'numeric',
            month: 'long',
            year: 'numeric'});
        setDate(date);
    }
    setInterval(timeNow,1000);
    setInterval(dateNow,1000);
    return(
        <div className="box">
            <div className="about-head"><p><b>Time</b></p></div>
            <br />
            <br />
            {timenow}
            <br />
            {datenow}
        </div>
    )
}

export default Time;