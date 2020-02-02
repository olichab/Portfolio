import React from 'react';
import { HashRouter, Switch, Route } from 'react-router-dom';
import ScrollToTop from './components/helpers/ScrollToTop';
import Header from './components/Header';
import Homepage from './components/Homepage';
import BriefOnline from './components/Projets/BriefOnline';
import Mooviz from './components/Projets/Mooviz';
import HelloWorld from './components/Projets/HelloWorld';
import ViParisLaPlaza from './components/Projets/ViParisLaPlaza';
import LaDefenseArena from './components/Projets/LaDefenseArena';
import Architecture3D from './components/Projets/Architecture3D';
import Billeterie3D from './components/Projets/Billeterie3D';
import MaquetteEtIllustrations from './components/Projets/MaquetteEtIllustrations';
import HellsKitchen from './components/Projets/HellsKitchen';
import Heisenberg from './components/Projets/Heisenberg';
import Sketch from './components/Projets/Sketch';
import Footer from './components/Footer';
import './App.scss';

function App() {
  return (
    <div className='App'>
      <HashRouter basename='/'>
        <ScrollToTop />
        <Header />
        <Switch>
          <Route exact path='/' component={Homepage} />
          <Route path='/brief-online' component={BriefOnline} />
          <Route path='/mooviz' component={Mooviz} />
          <Route path='/hello-world' component={HelloWorld} />
          <Route path='/viparis-la-plaza' component={ViParisLaPlaza} />
          <Route path='/la-defense-arena' component={LaDefenseArena} />
          <Route path='/architecture-3d' component={Architecture3D} />
          <Route path='/billeterie-3d' component={Billeterie3D} />
          <Route
            path='/maquettes-et-illustrations'
            component={MaquetteEtIllustrations}
          />
          <Route path='/hells-kitchen' component={HellsKitchen} />
          <Route path='/heisenberg' component={Heisenberg} />
          <Route path='/sketch' component={Sketch} />
          <Route path='*' component={Homepage} />
        </Switch>
        <Footer />
      </HashRouter>
    </div>
  );
}

export default App;
