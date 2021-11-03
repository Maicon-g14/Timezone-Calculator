import moment from 'moment';

const ContentHeader = () => {
    let data = moment().format('DD/MM/YYYY');
	let hora = moment().format('HH:mm:ss');
    return (
        <>
            <h1>Calculadora de Fuso Horário</h1>
            <p>Hora atual: {hora}</p>
            <p>Data atual: {data}</p>
        </>
        );
}

export default ContentHeader;