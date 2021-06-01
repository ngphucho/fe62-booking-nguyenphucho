import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { changeValueSearch } from "../../actions/searchValue";
import { Link } from "react-router-dom";
//MaterialUI
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";

export default function SearchBox() {
  const { movies } = useSelector((state) => state.movies);
  const { inputValue } = useSelector((state) => state.searchValue);

  const dispatch = useDispatch();

  return (
    <>
      <Autocomplete
        onChange={(event, value) => {
          console.log("onChange",value);
          // dispatch(changeValueSearch(value));
        }}
        // inputValue={inputValue}
        // onInputChange={(event, newInputValue) => {
        //   dispatch(changeValueSearch(newInputValue));
        //   console.log("onInputChange", newInputValue);
        // }}
        autoHighlight
        clearOnBlur={false}
        style={{ width: "300px" }}
        id="searchBox"
        freeSolo
        disableClearable
        options={movies.map((movie) => movie.tenPhim + "?" + movie.maPhim)}
        // options={movies}
        getOptionLabel={(option) => {
          const arrayOption = option.split("?");
          return arrayOption[0];
        }}
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
        renderOption={(option) => {
          const arrayOption = option.split("?");
          return <Link to={"/search/" + arrayOption[1]}>{arrayOption[0]}</Link>;
        }}
      />
    </>
  );
}
