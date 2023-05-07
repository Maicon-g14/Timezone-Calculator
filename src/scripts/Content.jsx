import React from 'react'
import '../styles/App.css';
import * as moment from 'moment';
import 'moment/locale/pt-br';
import ShowOutput from '../scripts/ShowOutput'
import HistoryTable from '../scripts/HistoryTable'
import InputMask from 'react-input-mask';


class Content extends React.Component {
    constructor(props) {
        super(props)
        moment.locale('pt-br');
        this.state = ({
            clock: moment(),
            date: "31/12/2000",
            time: "00:00",
            myTimeZone: "-3",
            timeZone: "0",
            history: []
        });
    }


    checkFields = () => {
        let date = new Date(this.state.date)
        let time = this.state.time
        let timeZone = this.state.timeZone

        if (time) {
            let timeArr = time.split(":")
            date.setHours(...timeArr)
        }

        if (!isNaN(date.valueOf())){
            this.calcTimeZone(date, timeZone)
        }
    }


    calcTimeZone = (dateObj, timeZone) => {
        let date = moment(dateObj);
        let myTimeZone = this.state.myTimeZone;

        date.subtract(myTimeZone, 'hours').hours();
        date.add(timeZone, 'hours').hours();

        this.setState({
            clock: date,
            history: [...this.state.history, date]
        })
    }


    render() {
        return (
            <>
                <div className="container-campo">
                    <div className="input-container date-container">
                        <label>Data local:</label>
                        <InputMask mask="99/99/9999" maskChar={null} onChange={(e) => {this.setState({date: e.target.value})}} placeholder="31/12/2000"/>
                    </div>
                    
                    <div className="input-container time-container">
                        <label>Hora local:</label>
                        <InputMask mask="99:99" maskChar={null} onChange={(e) => {this.setState({time: e.target.value})}} placeholder="00:00"/>
                    </div>
                    
                    <div className="input-container timezone-container">
                        <label>UTC local:</label>
                        <input className="campo" type="number" onChange={(e) => {this.setState({myTimeZone: e.target.value})}} min="-12" max="12" placeholder="UTC-3"/>
                    </div>

                    <div className="input-container timezone-container2">
                        <label>UTC destino:</label>
                        <input className="campo" type="number" onChange={(e) => {this.setState({timeZone: e.target.value})}} min="-12" max="12" placeholder="UTC+0"/>
                    </div>
                </div>

                <div className="container-result">

                    <div className="button-container">
                        <button className="bt blue" type="button" onClick={() => this.checkFields()}>Calcular</button>
                    </div>

                    <h2 className="title">Data final:</h2>
                    <ShowOutput clock={this.state.clock} timeZone={this.state.timeZone}/>

                    {/* <h3 className="title">Consultas anteriores:</h3>
                    <div className="history-table">
                        <HistoryTable 
                            myTime={this.state.time}
                            timeZone={this.state.timeZone}
                            clock={this.state.clock}
                        />
                    </div> */}

                </div>
            </>
        )
    }
}

export default Content;