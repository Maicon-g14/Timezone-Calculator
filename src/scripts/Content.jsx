import React from 'react'
import '../styles/App.css';
import * as moment from 'moment';
import 'moment/locale/pt-br';
import ShowOutput from '../scripts/ShowOutput'
import InputMask from 'react-input-mask';

class Content extends React.Component {
    constructor(props) {
        super(props)
        moment.locale('pt-br');
        this.state = ({
            clock: moment()
        });

        this.calcTimeZone.bind(this)
        this.checkFields.bind(this)
        this.search.bind(this)
    }

    search = () => {
        console.log("botao clicado " + this.state.date + " " + this.state.time + " " + this.state.timeZone)
        //a principio aqui converte e salva
    }

    checkFields = () => {
        let date = new Date(this.state.date)
        let time = this.state.time
        let timeZone = this.state.timeZone

        if (time !== undefined) {
            let timeArr = time.split(":")
            date.setHours(timeArr[0], timeArr[1])
        }

        if (!isNaN(date.valueOf())){
            this.calcTimeZone(date, timeZone)
        }
    }

    calcTimeZone = (dateObj, timeZone) => {
        let date = moment(dateObj);
        let myTimeZone = this.state.myTimeZone;
        console.log(myTimeZone)

        date.subtract(myTimeZone, 'hours').hours();

        date.add(timeZone, 'hours').hours();
        this.setState({
            clock: date
        })
    }

    render() {
        return (
            <>
                <div className="container-campo">
                    <div className="input-container date-container">
                        <label>Data local:</label>
                        <InputMask mask="99/99/9999" maskChar={null} onChange={(e) => {this.setState({date: e.target.value})}} placeholder="01/01/2020"/>
                        
                    </div>
                    
                    <div className="input-container time-container">
                        <label>Horario local:</label>
                        <InputMask mask="99:99" maskChar={null} onChange={(e) => {this.setState({time: e.target.value})}} placeholder="00:00"/>
                    </div>
                    
                    <div className="input-container timezone-container">
                        <label>Fuso horário local:</label>
                        <input className="campo" type="number" onChange={(e) => {this.setState({myTimeZone: e.target.value})}} placeholder="GMT-3"/>
                    </div>

                    <div className="input-container timezone-container2">
                        <label>Fuso horário destino:</label>
                        <input className="campo" type="number" onChange={(e) => {this.setState({timeZone: e.target.value})}} placeholder="GMT+0"/>
                    </div>
                </div>

                <div className="container-result">
                    <div className="button-container">
                        <button className="bt blue" type="button" onClick={this.checkFields}>Calcular</button>
                    </div>

                    <h2 className="title">Data final:</h2>
                    <ShowOutput clock={this.state.clock} timeZone={this.state.timeZone}/>

                    <h3 className="title">Consultas anteriores:</h3>
                    <div className="history-table"></div>

                    
                </div>
            </>
        )
    }
}

export default Content;