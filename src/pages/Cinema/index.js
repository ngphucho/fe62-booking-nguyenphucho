import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getCinemaById } from "../../actions/cinema";
import CinemaItemDetail from "../../components/CinemaItemDetail";
import { getCinemasById } from "../../actions/cinemas";
import IsLoading from "../../components/IsLoading";
import CinemaItem from "../../components/CinemaItem";

export default function Cinema() {
  const dispatch = useDispatch();
  const { cinemaId } = useParams();
  const { cinema, isLoading, error } = useSelector((state) => state.cinema); //Thong tin chi tiet cua cum rap
  const { selectedCinema } = useSelector((state) => state.selectedCinema); // Danh sach cum rap

  useEffect(() => {
    dispatch(getCinemaById(cinemaId));
    dispatch(getCinemasById(cinemaId));
  }, [cinemaId]);

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
        {cinema.map((item, index) => (
          <div key={index} className="col-md-6">
            <CinemaItemDetail detail={item} />
          </div>
        ))}
      </div>
    </div>
  );
}
