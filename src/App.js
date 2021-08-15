import { BrowserRouter, Switch, Route } from 'react-router-dom';
import {useEffect} from 'react'
import Sobre from './components/Sobre';
import Personagens from '../src/components/Personagens';
import SobreMim from './components/SobreMim';
import './style/App.css';
import vivos from './components/PersonagensVivos';
import mortos from './components/PersonagensMortos';
import Up from './img/up.png';


export default function App() {
  
  useEffect(() => {
    function decidirBotaoScroll(){
      if(window.scrollY === 0){
        
          document.querySelector('.scrollbutton').style.display = 'none';
      }else{
          
          document.querySelector('.scrollbutton').style.display ='block';
      }
    }

    window.addEventListener('scroll',decidirBotaoScroll);
  }, [])

  function subirTela() {
    window.scrollTo({
              top: 0,
              left:0,
              behavior:'smooth' 
          });
  }
  
  return(
    <div className ="app">
      <div className="scrollbutton" onClick={() => subirTela()}><img src={ Up }/></div>
      <div></div>

      <BrowserRouter>
        <Switch>
          <Route path="/" exact={true} component={Personagens} />
          <Route path="/sobre/:id" component={Sobre} />
          <Route path="/personagensvivos" component={vivos} />
          <Route path="/personagensmortos" component={mortos} />
          <Route path="/sobremim" component={SobreMim} />
        </Switch>
      </BrowserRouter> 
      
    </div>
  )
}
