import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { makeStyles } from "@material-ui/styles";

//MaterialUI
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";

//import action
import { toggleMenu } from "../../actions/toggleMenu";

const useStyles = makeStyles((theme) => ({
  // root: {
  //   backgroundColor: "#ffffff60",
  //   minWidth: 300,
  // },

  notchedOutline: {
    borderRadius: 0,
  },

  paper: {
    // height: window.innerHeight - 90,
    backgroundColor: "transparent",
    borderRadius: 0,
  },

  listbox: {
    height: "100%",
    maxHeight:
      window.innerWidth < 768
        ? window.innerHeight - 150
        : window.innerHeight - 90,
    backgroundColor: "#ffffffee",
  },

  // popper: {
  //   backgroundColor: "yellow",
  // }
}));

export default function SearchBox() {
  const dispatch = useDispatch();
  const classes = useStyles();
  const [state, setState] = useState("");
  const { danhSachPhim } = useSelector((state) => state.danhSachPhim);
  const history = useHistory();

  const search = (value) => {
    dispatch(toggleMenu("close"));
    const newValue = value.tenPhim || value;
    history.push("/search/" + newValue);
    setState(newValue);
  };

  return (
    <div className="searchBox">
      <Autocomplete
        className="autocompleteBox"
        fullWidth={true}
        autoHighlight={false}
        clearOnBlur={false}
        // style={{ minWidth: "300px" }}
        id="searchBox"
        freeSolo
        disableClearable
        options={danhSachPhim}
        classes={{
          paper: classes.paper,
          listbox: classes.listbox,
        }}
        renderInput={(params) => (
          <TextField
            // className={{ root: classes.root }}
            {...params}
            placeholder="Tìm kiếm ..."
            margin="normal"
            variant="outlined"
            InputProps={{ ...params.InputProps, type: "search" }}
          />
        )}
        getOptionLabel={(option) => {
          return option.tenPhim || state;
        }}
        renderOption={(option) => (
          <div className="w-100 d-flex justify-content-between align-items-center m-2">
            <h6>{option.tenPhim}</h6>
            <img
              className="bg-success"
              style={{ width: 40 }}
              className="img-fluid"
              src={option.hinhAnh}
              alt={option.biDanh}
            />
          </div>
        )}
        onChange={(event, value) => {
          search(value);
        }}
      />
    </div>
  );
}
