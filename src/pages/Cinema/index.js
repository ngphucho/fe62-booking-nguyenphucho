import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getCinemaById } from "../../actions/cinema";
import CinemaItemDetail from "../../components/CinemaItemDetail";
import { getCinemas } from "../../actions/cinemas";
import IsLoading from "../../components/IsLoading";
import CinemaItem from "../../components/CinemaItem";

export default function Cinema() {
  const dispatch = useDispatch();
  const { cinemaId } = useParams();
  const { cinema, isLoading, error } = useSelector((state) => state.cinema);
  const { cinemas: selectedCinema } = useSelector((state) => state.cinemas);

  useEffect(() => {
    dispatch(getCinemaById(cinemaId));
    dispatch(getCinemas(cinemaId));
  }, [cinemaId]);

  useEffect(() => {
    console.log("Selected", selectedCinema);
  }, [selectedCinema]);

  return isLoading ? (
    <IsLoading></IsLoading>
  ) : error ? (
    <div>{error}</div>
  ) : (
    <div className="container">
      <div style={{width: "200px"}} className="mx-auto">
      <CinemaItem cinema={selectedCinema[0]} />
      </div>
      <div className="row">
        {cinema.map((item) => (
          <div className="col-md-6">
            <CinemaItemDetail detail={item} />
          </div>
        ))}
      </div>
    </div>
  );
}
