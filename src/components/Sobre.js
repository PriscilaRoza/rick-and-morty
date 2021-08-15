import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import '../style/main.css';
import '../style/App.css';
import Menu from './Menu'

export default function Sobre(sobre) {

  const [personagens, setPersonagens] = useState(sobre.location.state);

  return (
    
    <div className="sobre__pagina">
      
    <section className="sobre"><Menu></Menu>
      <div className="sobre__card">
        <div className="sobre__name">{personagens.name}</div>
        <div className="sobre__info">
          <img className="sobre__imagem" src={personagens.image} alt={personagens.name} />
          <div className="sobre__bloco">
            <p className="sobre__bloco__texto"><strong>Sexo:</strong>{personagens.gender}</p>
            <p className="sobre__bloco__texto"><strong>Status:</strong> {personagens.status}</p>
            <p className="sobre__bloco__texto"><strong>Espécie:</strong> {personagens.species}</p>
       </div>
      </div>
        </div>
        
    </section>
    </div>
  );
}