import React, { Suspense } from "react";
import { HashRouter, Switch, Route } from "react-router-dom";
import ScrollToTop from "./components/helpers/ScrollToTop";
import Header from "./components/Header";
import Homepage from "./components/Homepage";
import Footer from "./components/Footer";
import DelayedFallback from "./components/helpers/DelayedFallback";
import PROJECTS_LIST from "./components/helpers/projectsList";
import "./App.scss";

const ProjetDetails = React.lazy(() => import("./components/ProjetDetails.js"));

function App({ props }) {
  return (
    <div className="App">
      <HashRouter basename="/">
        <ScrollToTop />
        <Header />
        <Suspense fallback={<DelayedFallback />}>
          <Switch>
            <Route exact path="/" component={Homepage} />
            {PROJECTS_LIST.map((project) => {
              return (
                <Route
                  key={project.id}
                  exact
                  path={project.path}
                  render={() => <ProjetDetails projectDetails={project} />}
                />
              );
            })}
            <Route path="*" component={Homepage} />
          </Switch>
        </Suspense>
        <Footer />
      </HashRouter>
    </div>
  );
}

export default App;
