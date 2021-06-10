import { Suspense } from "react";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import AppLayout from "./layouts/AppLayout";
import ChiTietPhongVe from "./pages/ChiTietPhongVe";
import Cinema from "./pages/Cinema";
import Cinemas from "./pages/Cinemas";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Movie from "./pages/Movie";
import NowShowingMovies from "./pages/NowShowingMovies";
import Search from "./pages/Search";
import SignUp from "./pages/SignUp";
import TestPage from "./pages/TestPage";
import TestPage2 from "./pages/TestPage2";
import UpcomingMovies from "./pages/UpcomingMovies";
import "./styles";

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <BrowserRouter>
        <Switch>
          {/* Router Admin */}

          {/* Router Login */}
          <Route exact path="/login">
            <Login />
          </Route>

          {/* Router Login */}
          <Route exact path="/sign-up">
            <SignUp />
          </Route>

          {/* Router Test page */}
          <Route exact path="/test">
            <TestPage2 />
          </Route>

          {/* Router App */}
          <Route path="/">
            <AppLayout>
              <Switch>
                {/* <Route path="/" exact>
                  <Home></Home>
                </Route> */}
                <Redirect exact from="/" to="/home" />
                <Route path="/home">
                  <Home />
                </Route>
                <Route path="/cinemas" exact>
                  <Cinemas />
                </Route>
                <Route path="/cinemas/cinema/:cinemaId">
                  <Cinema />
                </Route>
                <Route path="/now-showing-movies">
                  <NowShowingMovies />
                </Route>
                <Route path="/upcoming-movies">
                  <UpcomingMovies />
                </Route>
                <Route path="/movie/:movieId">
                  <Movie />
                </Route>
                <Route path="/search/:keyword">
                  <Search />
                </Route>
                <Route path="/chi-tiet-phong-ve/:maLichChieu">
                  <ChiTietPhongVe />
                </Route>
                <Route>
                  <div>Page not found</div>
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
