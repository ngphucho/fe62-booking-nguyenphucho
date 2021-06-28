//
import "./styles";
import { Suspense, lazy } from "react";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";

// layouts
import AppLayout from "./layouts/AppLayout";
import AdminLayout from "./layouts/AdminLayout";

// custom routes
import ClientRoute from "./auth/ClientRoute";
import AdminRoute from "./auth/AdminRoute";

//pages

// import ChiTietPhongVe from "./pages/ChiTietPhongVe";
const ChiTietPhongVe = lazy(() => import("./pages/ChiTietPhongVe"));

// import Cinema from "./pages/Cinema";
const Cinema = lazy(() => import("./pages/Cinema"));

// import Cinemas from "./pages/Cinemas";
const Cinemas = lazy(() => import("./pages/Cinemas"))

// import Home from "./pages/Home";
const Home = lazy(() => import("./pages/Home"))

// import Login from "./pages/Login";
const Login = lazy(() => import("./pages/Login"))

// import Movie from "./pages/Movie";
const Movie = lazy(() => import("./pages/Movie"))

// import AllMovies from "./pages/AllMovies";
const AllMovies = lazy(() => import("./pages/AllMovies"))

// import UpcomingMovies from "./pages/UpcomingMovies";
const UpcomingMovies = lazy(() => import("./pages/UpcomingMovies"))

// import NowShowingMovies from "./pages/NowShowingMovies";
const NowShowingMovies = lazy(() => import("./pages/NowShowingMovies"))

// import Search from "./pages/Search";
const Search = lazy(() => import("./pages/Search"))

// import SignUp from "./pages/SignUp";
const SignUp = lazy(() => import("./pages/SignUp"))

// import ThongTinTaiKhoan from "./pages/ThongTinTaiKhoan";
const ThongTinTaiKhoan = lazy(() => import("./pages/ThongTinTaiKhoan"))

// import AdminQuanLyNguoiDung from "./pages/AdminQuanLyNguoiDung";
const AdminQuanLyNguoiDung = lazy(() => import("./pages/AdminQuanLyNguoiDung"))

// import AdminQuanLyPhim from "./pages/AdminQuanLyPhim";
const AdminQuanLyPhim = lazy(() => import("./pages/AdminQuanLyPhim"))

// import AdminQuanLyLichChieu from "./pages/AdminQuanLyLichChieu";
const AdminQuanLyLichChieu = lazy(() => import("./pages/AdminQuanLyLichChieu"))

// Test==========
// import TestPage from "./pages/TestPage";
const TestPage = lazy(() => import("./pages/TestPage"))

// import TestPage2 from "./pages/TestPage2";
const TestPage2 = lazy(() => import("./pages/TestPage2"))




function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <BrowserRouter>
        <Switch>
          {/* Router Admin */}
          <AdminRoute path="/admin">
            <AdminLayout>
              <Switch>
                <Redirect exact from="/admin" to="/admin/quan-ly-nguoi-dung" />
                <AdminRoute path="/admin/quan-ly-nguoi-dung">
                  <AdminQuanLyNguoiDung />
                </AdminRoute>
                <AdminRoute path="/admin/quan-ly-phim">
                  <AdminQuanLyPhim />
                </AdminRoute>
                <AdminRoute path="/admin/quan-ly-lich-chieu/">
                  <AdminQuanLyLichChieu />
                </AdminRoute>
              </Switch>
            </AdminLayout>
          </AdminRoute>

          {/* Router Login */}
          <Route exact path="/login">
            <Login />
          </Route>

          {/* Router sign up */}
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
                <Route path="/tat-ca-phim">
                  <AllMovies />
                </Route>
                <Route path="/phim-dang-chieu">
                  <NowShowingMovies />
                </Route>
                <Route path="/phim-sap-chieu">
                  <UpcomingMovies />
                </Route>
                <Route path="/movie/:movieId">
                  <Movie />
                </Route>
                <Route path="/search/:keyword">
                  <Search />
                </Route>
                <ClientRoute path="/chi-tiet-phong-ve/:maLichChieu">
                  <ChiTietPhongVe />
                </ClientRoute>
                <ClientRoute path="/thong-tin-tai-khoan/:userId">
                  <ThongTinTaiKhoan />
                </ClientRoute>
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
