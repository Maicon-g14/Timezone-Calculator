import Clock from '../Clock';
import Logo from './Logo';


const Header = () => {
    return <>
        <Logo />

        <h1 className="title">Calculadora de Fuso</h1>
        
        <Clock />
    </>;
}

export default Header;