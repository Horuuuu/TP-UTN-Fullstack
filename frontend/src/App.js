import {BrowserRouter as Router,Switch,Route} from 'react-router-dom' 

import Header from './components/layout/Header'
import Nav from './components/layout/Nav'
import Footer from './components/layout/Footer'
import './App.css';

import ContactoPage from './pages/ContactoPage';
import HomePage from './pages/HomePage';
import NosotrosPage from './pages/NosotrosPage';
import NovedadesPage from './pages/NovedadesPage';
import Colores from './pages/Colores';
import Galeria from './pages/Galeria';
function App() {
  return (
    <Router>    
      <Header/>
      <Nav/>
<Switch>
<Route path="/" exact component={HomePage}/>
<Route path="/NosotrosPage" exact component={NosotrosPage}/>
<Route path="/novedades" exact component={NovedadesPage}/>
<Route path="/ContactoPage" exact component={ContactoPage}/>
<Route path="/Colores" exact component={Colores}/>
<Route path="/Galeria" exact component={Galeria}/>
</Switch>  
      <Footer/>   
    </Router>
  );
}

export default App;
