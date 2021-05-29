import { Suspense } from "react";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import AppLayout from "./layouts/AppLayout";
import Home from "./pages/Home";
import "./styles";

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <BrowserRouter>
        <Switch>
          {/* Router Admin */}

          {/* Router App */}
          <Route path="/">
            <AppLayout>
              <Switch>
                {/* <Route path="/" exact>
                  <Home></Home>
                </Route> */}
                <Redirect exact from="/" to="/home" />
                <Route path="/home">
                  <Home>
                    {/* <Switch>

                    </Switch> */}
                  </Home>
                </Route>
              </Switch>
            </AppLayout>
          </Route>
        </Switch>
      </BrowserRouter>
    </Suspense>
  );
}

export default App;
