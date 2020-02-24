import React, { Suspense } from "react";
import { HashRouter, Switch, Route } from "react-router-dom";
import ScrollToTop from "./components/helpers/ScrollToTop";
import Header from "./components/Header";
import Homepage from "./components/Homepage";
import Footer from "./components/Footer";
import DelayedFallback from "./components/helpers/DelayedFallback";
import "./App.scss";

const BriefOnline = React.lazy(() =>
  import("./components/Projets/BriefOnline")
);
const Mooviz = React.lazy(() => import("./components/Projets/Mooviz"));
const HelloWorld = React.lazy(() => import("./components/Projets/HelloWorld"));
const ViParisLaPlaza = React.lazy(() =>
  import("./components/Projets/ViParisLaPlaza")
);
const LaDefenseArena = React.lazy(() =>
  import("./components/Projets/LaDefenseArena")
);
const Architecture3D = React.lazy(() =>
  import("./components/Projets/Architecture3D")
);
const Billeterie3D = React.lazy(() =>
  import("./components/Projets/Billeterie3D")
);
const MaquetteEtIllustrations = React.lazy(() =>
  import("./components/Projets/MaquetteEtIllustrations")
);
const HellsKitchen = React.lazy(() =>
  import("./components/Projets/HellsKitchen")
);
const Heisenberg = React.lazy(() => import("./components/Projets/Heisenberg"));
const Sketch = React.lazy(() => import("./components/Projets/Sketch"));

function App() {
  return (
    <div className='App'>
      <HashRouter basename='/'>
        <ScrollToTop />
        <Header />
        <Suspense fallback={<DelayedFallback />}>
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
        </Suspense>
        <Footer />
      </HashRouter>
    </div>
  );
}

export default App;
