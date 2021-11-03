import './styles/App.css';

const Content = () => {
    return (
        <>
            <div className="container-campo">
                <label>Horario local:</label>
                <div className="input-container">
                    <input id="campo" type="text" value="" placeholder="Digite o horário na sua localização"/>
                </div>
            </div>
            <div className="container-campo">
                <label>Data local:</label>
                <div className="input-container">
                    <input id="campo" type="text" value="" placeholder="Digite a data na sua localização"/>
                </div>
            </div>
            <div className="container-campo">
                <label>Fuso horário:</label>
                <div className="input-container">
                    <input id="campo" type="text" value="" placeholder="Selecione o fuso horário"/>
                </div>
            </div>

            <div className="container-result">
                <h2>Data final:</h2>
                <p></p>

                <h3>Consultas anteriores:</h3>
                <div className="history-table"></div>

                <div className="button-container">
                    <button className="bt blue" type="button">Limpar historico de consultas</button>
                </div>
            </div>

            
        </>
        );
}

export default Content;