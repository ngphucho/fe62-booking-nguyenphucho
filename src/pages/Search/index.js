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
import SubContent from "../../components/SubContent";
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
    // console.log("keyword = " + keyword);
    dispatch(layDanhSachPhimTheoTen(keyword));
  }, [keyword]);

  useEffect(() => {
    if (moviesSearch.length === 1 && keyword === moviesSearch[0].tenPhim) {
      // console.log("moviesSearch2", moviesSearch);
      // console.log("/movie/" + moviesSearch[0].maPhim);
      history.push("/movie/" + moviesSearch[0].maPhim);
    }
  }, [moviesSearch]);

  // return isLoading ? (
  //   <IsLoading></IsLoading>
  // ) : (
  //   <div className="container">
  //     <h1>Kết quả tìm kiếm</h1>
  //     <div className="row moviesList">
  //       {moviesSearch.map((item) => (
  //         <div key={item.maPhim} className="col-md-3">
  //           <MovieItem movie={item} />
  //         </div>
  //       ))}
  //     </div>
  //   </div>
  // );

  return isLoading ? (
    <IsLoading />
  ) : error ? (
    <div>{error}</div>
  ) : (
    <div className="container-md bodyContainer">
      <SubContent title="KẾT QUẢ TÌM KIẾM" data={moviesSearch} />
    </div>
  );
}
