import React from "react";


const ShowOutput = props => {
    let momentObj = props.clock;
    let timeZone = props.timeZone;

    let day = momentObj.format('dddd, ');
    let date = momentObj.format('D [de] MMMM [de] y');
    let time = momentObj.format('HH:mm');
    
    if (timeZone >= 0) {
        timeZone = "+" + timeZone;
    }

    return (
        <div className="date">
            <div><span className="capitalize">{day}</span>{date}</div> 
            <div>Horario no destino GMT{timeZone}:</div>
            <div>{time}</div>
        </div>
    );
}

export default ShowOutput;