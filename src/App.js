import React, { Suspense } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { ViewportProvider } from "./hooks/useViewport";
import Header from "./components/Header";
import Footer from "./components/Footer";
import DelayedFallback from "./components/helpers/DelayedFallback";
import ScrollToTop from "./components/helpers/ScrollToTop";
import PROJECTS_LIST from "./components/helpers/projectsList";
import Intro from "./components/Intro";
import Bio from "./components/Bio";
import Projets from "./components/Projets";
import Contact from "./components/Contact";
import "./App.scss";

const ProjetDetails = React.lazy(() => import("./components/ProjetDetails.js"));

const App = (props) => {
  return (
    <BrowserRouter>
      <ViewportProvider>
        <div className="App">
          <Header />
          <Suspense fallback={<DelayedFallback />}>
            <ScrollToTop />
            <Switch>
              <Route exact path="/" component={Intro} />
              <Route exact path="/bio" component={Bio} />
              <Route exact path="/projets" component={Projets} />
              <Route exact path="/contact" component={Contact} />
              {PROJECTS_LIST.map((project) => {
                return (
                  <Route
                    key={project.id}
                    path={project.path}
                    component={() => <ProjetDetails projectDetails={project} />}
                  />
                );
              })}
              <Route path="*" component={Intro} />
            </Switch>
          </Suspense>
          <Footer />
        </div>
      </ViewportProvider>
    </BrowserRouter>
  );
};

export default App;
