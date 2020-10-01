import React, { Suspense } from "react";
import { Switch, Route } from "react-router-dom";
import Header from "./components/Header";
import Homepage from "./components/Homepage";
import Footer from "./components/Footer";
import DelayedFallback from "./components/helpers/DelayedFallback";
import ScrollToTop from "./components/helpers/ScrollToTop";
import PROJECTS_LIST from "./components/helpers/projectsList";
import "./App.scss";

const ProjetDetails = React.lazy(() => import("./components/ProjetDetails.js"));

function App({ props }) {
  return (
    <div className="App">
      <Header />
      <Suspense fallback={<DelayedFallback />}>
        <ScrollToTop />
        <Switch>
          <Route exact path="/" component={Homepage} />
          {PROJECTS_LIST.map((project) => {
            return (
              <Route
                exact
                key={project.id}
                path={project.path}
                render={() => <ProjetDetails projectDetails={project} />}
              />
            );
          })}
          <Route path="*" component={Homepage} />
        </Switch>
      </Suspense>
      <Footer />
    </div>
  );
}

export default App;
