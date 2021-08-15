import { Link } from "react-router-dom";
import Menu from "./Menu";
import '../style/main.css';
import Priscila from "../img/pri.jpg";
import Git from "../img/git.png";
import In from "../img/in.png"


export default function SobreMim() {
    return (
        <><Menu></Menu>
    <section className="sobre">
      <div className="sobre__card">
        <div className="sobre__name"><h3>Priscila Roza</h3></div>
        <div className="sobre__info">
          <img className="sobre__imagem" src={Priscila} alt="foto desenvolvedora"/>
          <div className="sobre__bloco">
            <p className="sobre__bloco__texto"><strong>Sexo:</strong> Female</p>
            <p className="sobre__bloco__texto"><strong>Status:</strong> Alive</p>
            <p className="sobre__bloco__texto"><strong>Espécie:</strong> Human</p>
            <a href="https://github.com/PriscilaRoza" target="_blank">
                <img className="sobre__logo" src={Git}  /></a>
          <a href="https://www.linkedin.com/in/priscilaroza/" target="_blank" >
                <img className="sobre__logo" src={In} />
          </a>
       </div>
      </div>
        </div>
        
    </section>
        </>
    )
}