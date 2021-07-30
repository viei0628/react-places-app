import { Route, Switch } from "react-router-dom";

import "./App.css";
import AllPlacesPage from "./pages/AllPlacesPage";
import VisitedPlacesPage from "./pages/VisitedPlacesPage";
import MainNavigation from "./components/MainNavigation";
import NewPlace from "./pages/NewPlace";
import Layout from "./components/Layout";

function App() {
  return (
    <div>
      <Layout>
        <Switch>
          <Route path="/" exact>
            <AllPlacesPage />
          </Route>
          <Route path="/visited-places">
            <VisitedPlacesPage />
          </Route>
          <Route path="/new-place">
            <NewPlace />
          </Route>
        </Switch>
      </Layout>
    </div>
  );
}

export default App;
