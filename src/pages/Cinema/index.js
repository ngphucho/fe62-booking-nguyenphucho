import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import CinemaItemDetail from "../../components/CinemaItemDetail";
import IsLoading from "../../components/IsLoading";
import CinemaItem from "../../components/CinemaItem";
// import action
import { toggleMenu } from "../../actions/toggleMenu";
import { pageTitleChange } from "../../actions/pageTitle";
import { layThongTinCumRapTheoHeThong } from "../../actions/cinema";
import { layThongTinHeThongRapById } from "../../actions/heThongRap";

export default function Cinema() {
  const dispatch = useDispatch();
  const { cinemaId } = useParams();
  const { danhSachCumRap, isLoading, error } = useSelector(
    (state) => state.danhSachCumRap
  ); //Thong tin chi tiet cua cum rap
  const { selectedCinema } = useSelector((state) => state.selectedCinema); // Danh sach cum rap

  useEffect(() => {
    dispatch(layThongTinCumRapTheoHeThong(cinemaId));
    dispatch(layThongTinHeThongRapById(cinemaId));
  }, [cinemaId]);

  useEffect(() => {
    //set activePage
    dispatch(
      pageTitleChange({
        pageTitle: "",
        activePage: 2,
      })
    );
  }, []);

    //close submenu o man hinh nho
    useEffect(() => {
      dispatch(toggleMenu("close"));
    }, []);

  return isLoading ? (
    <IsLoading></IsLoading>
  ) : error ? (
    <div>{error}</div>
  ) : (
    <div className="container">
      <div style={{ width: "200px" }} className="mx-auto">
        <CinemaItem cinema={selectedCinema[0]} />
      </div>
      <div className="row">
        {danhSachCumRap.map((item, index) => (
          <div key={index} className="col-md-6">
            <CinemaItemDetail detail={item} />
          </div>
        ))}
      </div>
    </div>
  );
}
