import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";

// import action
import { layDanhSachPhim } from "../../actions/movies";
import { layDanhSachPhimTheoTen } from "../../actions/moviesSearch";
import { pageTitleChange } from "../../actions/pageTitle";
import { toggleMenu } from "../../actions/toggleMenu";

// import component
import IsLoading from "../../components/IsLoading";

//import khac
import PhanTrangAppLayout from "../../components/PhanTrangAppLayout";

export default function Search() {
  const dispatch = useDispatch();
  let { keyword } = useParams();
  const history = useHistory();

  const { danhSachPhim } = useSelector((state) => state.danhSachPhim);
  const { moviesSearch, isLoading, error } = useSelector(
    (state) => state.moviesSearch
  );

  //Được chạy mỗi khi load trang này
  useEffect(() => {
    //load danh sach phim
    dispatch(layDanhSachPhim());
  }, []);

  // set active page
  useEffect(() => {
    dispatch(
      pageTitleChange({
        activePage: 3,
        pageTitle: "",
      })
    );
  }, []);

  //close submenu o man hinh nho
  useEffect(() => {
    dispatch(toggleMenu("close"));
  }, []);

  useEffect(() => {
    dispatch(layDanhSachPhimTheoTen(keyword));
  }, [keyword]);

  //chuyen den trang chi tiet phim nguoi dung chon phim truc tiep tren list autocomplete
  useEffect(() => {
    if (moviesSearch.length === 1 && keyword === moviesSearch[0].tenPhim) {
      history.push("/movie/" + moviesSearch[0].maPhim);
    }
  }, [moviesSearch]);

  return isLoading ? (
    <IsLoading />
  ) : error ? (
    <div>{error}</div>
  ) : (
    <div>
      <PhanTrangAppLayout
        danhSachPhim={moviesSearch}
        link={"/search/" + keyword}
        title="KẾT QUẢ TÌM KIẾM"
      />
    </div>
  );
}
