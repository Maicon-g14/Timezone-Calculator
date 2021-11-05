import * as moment from 'moment';

const HistoryTable = props => {
    let myDate = props.myDate
    let myTime = props.myTime
    let myTimeZone = props.myTimeZone
    let timeZone = props.timeZone
    let history = props.history
    let historyTable = []

    const table = (myDate, myTime, myTimeZone, timeZone, date, time) => {
        <tr>
            <td>{myDate}</td>
            <td>{myTime}</td>
            <td>{myTimeZone}</td>
            <td>{timeZone}</td>
            <td>{date}</td>
            <td>{time}</td>
        </tr>
    }

    if (history !== []) {
        for (const entry in history) {

            historyTable.push(table(moment().format('DD MM YYYY'), entry, props.myTimeZone, props.timeZone, props.date, props.time))
        }
    }
    console.log(history)
    console.log(myDate, myTime, myTimeZone, timeZone)
    return (
        <table>
            historyTable
        </table>
    );
}

export default HistoryTable;