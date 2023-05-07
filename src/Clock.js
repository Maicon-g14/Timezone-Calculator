import React from 'react';
import * as moment from 'moment';
import 'moment/locale/pt-br';
import './styles/index.css';


class Clock extends React.Component {
    constructor(props) {
        super(props);
        moment.locale('pt-br');
        const momentObj = moment()

        this.state = ({
            day: momentObj.format('dddd, '),
            date: momentObj.format('D [de] MMMM [de] y'),
            time: momentObj.format('HH:mm')
        });
    }


    componentDidMount() {
        this.timerId = setInterval(
            () => this.refreshClock(), 
        30000);
    }


    componentWillUnmount() {
        clearInterval(this.timerId);
    }


    refreshClock() {
        const momentObj = moment()
        this.setState({
            day: momentObj.format('dddd, '),
            date: momentObj.format('D [de] MMMM [de] y'),
            time: momentObj.format('HH:mm')
        })
    }
    

    render() {
        const day = this.state.day.toString()
        const date = this.state.date.toString()
        const time = this.state.time.toString()

        return (
            <div className="date">
                <div><span className="capitalize">{day}</span>{date}</div> 
                <div>Hora atual: {time}</div>
            </div>
        );
    }
}

export default Clock