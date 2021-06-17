import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { getMovies } from "../../actions/movies";
//MaterialUI
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";

export default function SearchBox() {
  const { movies } = useSelector((state) => state.movies);
  const history = useHistory();
  // const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(getMovies());
  // }, []);

  return (
    <>
      <Autocomplete
        onChange={(event, value) => {
          // console.log("1. SearchBoxPage");
          // console.log("/search/" + value);
          history.push("/search/" + value);
        }}
        clearOnBlur={false}
        style={{ width: "300px" }}
        id="searchBox"
        freeSolo
        disableClearable
        options={movies.map((movie) => movie.tenPhim)}
        renderInput={(params) => (
          <TextField
            style={{ backgroundColor: "#ffffff80" }}
            {...params}
            placeholder="Tìm kiếm ..."
            margin="normal"
            variant="outlined"
            InputProps={{ ...params.InputProps, type: "search" }}
          />
        )}
      />
    </>
  );
}
