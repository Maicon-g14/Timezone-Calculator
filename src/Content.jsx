import './styles/App.css';

const Content = () => {
    return (
        <>
            <p>Content</p>
            <label>Campo:</label>
            <div className="input-container">
                <input id="campo" type="text" value="" placeholder="Digite aqui"/>
            </div>
            <div className="button-container">
                <button className="bt blue" type="button">Olá</button>
            </div>
        </>
        );
}

export default Content;