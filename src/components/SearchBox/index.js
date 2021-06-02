import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, Redirect, useHistory } from "react-router-dom";
//MaterialUI
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";

export default function SearchBox() {
  const { movies } = useSelector((state) => state.movies);
  const history = useHistory();
  const dispatch = useDispatch();

  return (
    <>
      <Autocomplete
        onChange={(event, value) => {
          console.log("1. SearchBoxPage")
          console.log("/search/" + value);
          history.push("/search/" + value);
        }}
        // autoHighlight
        clearOnBlur={false}
        style={{ width: "300px" }}
        id="searchBox"
        freeSolo
        disableClearable
        // options={movies.map((movie) => movie.tenPhim + "?" + movie.maPhim)}
        options={movies.map((movie) => movie.tenPhim)}
        // getOptionLabel={(option) => {
        //   const arrayOption = option.split("?");
        //   return arrayOption[0];
        // }}
        // getOptionSelected={(option)=> option.maPhim}
        // renderOption={(option) => (
        //   <React.Fragment>
        //     {option.tenPhim} {option.maPhim}
        //     {/* <Link to={"/search/" + option.maPhim}>{option.tenPhim}</Link> */}
        //   </React.Fragment>
        // )}
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
        // renderOption={(option) => {
        //   const arrayOption = option.split("?");
        //   return (
        //     <Link
        //       style={{ textDecoration: "none", color: "#808080" }}
        //       to={"/movie/" + arrayOption[1]}
        //     >
        //       <React.Fragment>{arrayOption[0]}</React.Fragment>
        //     </Link>
        //   );
        // }}
      />
    </>
  );
}
