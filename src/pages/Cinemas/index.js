import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCinemas } from "../../actions/cinemas";
import IsLoading from "../../components/IsLoading";
import ListCinemas from "../../components/ListCinemas";

export default function Cinemas() {
  const dispatch = useDispatch();
  const { cinemas, isLoading, error } = useSelector((state) => state.cinemas);

  useEffect(() => {
    dispatch(getCinemas());
  }, []);

  return isLoading ? (
    <IsLoading></IsLoading>
  ) : (
    <ListCinemas cinemas={cinemas}></ListCinemas>
  );
}
