import React from 'react';
import { useState } from 'react';

const HistoryTable = props => {
    let [dataArray, addEntry] = useState([]);


    let data = {
        myTime: props.myTime,
        timeZone: props.timeZone,
        day: props.clock.format('dddd, '),
        time: props.clock.format('HH:mm')
    }
    
    const retrieveCookie = () => {
        //logica pegar cookies
        const cookies = ''

        //parse se precisar
        addEntry([])

        return cookies;
    }

    const storeCookie = newData => {
        //pega do cookie, add data e exibe 
        const previousData = retrieveCookie()
        let data = [newData, ...previousData]

        if(previousData.length >= 5) {
            data = data.slice(0, -1)
        }

        //logica salvar cookie
    }

    


    let historyTable = ''

    const tableRow = (myTime, timeZone, day, time) => {
        return (
            <tr>
                <td>{myTime}</td>
                <td>{timeZone}</td>
                <td>{day}</td>
                <td>{time}</td>
            </tr>
        );
    }

    for (const entry in dataArray) {
        historyTable += tableRow(entry.myTime, entry.timeZone, entry.day, entry.time)
    }

    return (
        <table>
            <tr>
                <th>Horario Local</th>
                <th>Fuso Destino</th>
                <th>Dia</th>
                <th>Horario Destino</th>
            </tr>
            {historyTable}
        </table>
    );
}

export default HistoryTable;