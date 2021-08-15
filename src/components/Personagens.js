import { useEffect, useState } from 'react';
import Home from './Home';
import Menu from './Menu';
import '../style/main.css';



export default function ListaDePersonagem() {

  const [personagens, setPersonagens] = useState([]);
  const [loading, setLoading] = useState(false);

  const dados = () => {
    fetch('https://rickandmortyapi.com/api/character')
    .then(resposta => resposta.json())
    .then( (resultado) => {
      setPersonagens(resultado.results)
      setLoading(false)
    })
    .catch((erro) => {
      console.log(erro)
      setLoading(true)
    })
  }
  useEffect(  () => {
    dados();
  }, []);

  return(
    <>
    <div className="perso">
      <Menu />
      
        {
          loading ? (
            <Home/>
          ) : (
            personagens.map( (i) => (
              <Home key={i.name} info={i}></Home>
            ))
          )
        }
      </div>
    </>
  )
}