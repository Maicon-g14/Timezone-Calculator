import Clock from '../Clock';

const ContentHeader = () => {
    let clock = <Clock />
    return (
        <>
            <h1 className="title">Calculadora de Fuso Horário</h1>
            {clock}
        </>
    );
}

export default ContentHeader;