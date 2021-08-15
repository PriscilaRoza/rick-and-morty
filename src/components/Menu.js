import { Link } from "react-router-dom";
import '../style/main.css';
import Rick from '../img/rick.png'
import Morty from '../img/morty.png';

export default function Menu(props){
    return (
    <>
    
    <ul className="barra__menu">
        <li ><img className="barra__menu__img" src={ Rick }  /></li>
        <li className="barra__menu__link"><Link  to="/">Home</Link></li>
        <li className="barra__menu__link"><Link to="/personagensvivos">Personagens Vivos</Link></li>
        <li className="barra__menu__link"><Link to="/personagensmortos">Personagens Mortos</Link></li>
        <li className="barra__menu__link"><Link to="/sobremim">Sobre</Link></li>
        <li ><img className="barra__menu__img" src={ Morty } /></li>
    </ul>
    </>
    )
}

