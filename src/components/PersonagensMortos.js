import { useCallback, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Menu from './Menu';
import '../style/main.css';
import '../style/App.css'




 export default function Home(props) {

  
  const [dados, setDados] = useState([]);
  let dadosCompletos =[];

  const dadosOk = (url) => {
    if(url != null){
      fetch(url)
      .then(resposta => resposta.json())
      .then(resultado => {
        dadosCompletos = [...dadosCompletos, ...resultado.results]
        setDados(dadosCompletos);
        dadosOk(resultado.info.next);
      })
    }
  }
  useEffect(() => {
    dadosOk('https://rickandmortyapi.com/api/character/?status=dead')
  }, []);
  
  

  return (
    <>
    <Menu></Menu>
    <div className="perso">
    
    {
      
      dados.map((personagem) =>(
        
          <div className="app__lista__cards">
            
        <Link className="app__lista__cards__link"to={{ pathname: "/Sobre/" + personagem.id, state: personagem }}>
          <img className="app__lista__cards__img" src={personagem.image} alt={personagem.name} />
          <div className="app__lista__cards__info">
            <h2 className="app__lista__cards__name">{personagem.name}</h2>
          </div>
        </Link>
      </div>
   
      ))
    }
    </div>
    </>

  )
}