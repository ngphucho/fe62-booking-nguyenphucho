import React, { useState } from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

const useStyles = makeStyles((theme) => ({
  "@global": {
    "*::-webkit-scrollbar": {
      width: "0",
    },
    "*::-webkit-scrollbar-track": {
      "-webkit-box-shadow": "inset 0 0 6px rgba(0,0,0,0.00)",
    },
    "*::-webkit-scrollbar-thumb": {
      backgroundColor: "rgba(0,0,0,.1)",
      outline: "1px solid slategrey",
    },
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

function ChonPhim(props) {
  const classes = useStyles();
  const { danhSachPhim, handleChonPhim } = props;
  const [maPhim, setMaPhim] = useState("");

  const handleChange = (event) => {
    setMaPhim(event.target.value);
    if (handleChonPhim) {
      handleChonPhim(event.target.value);
    }
  };

  return (
    <>
      <FormControl className={classes.formControl}>
        <InputLabel id="demo-simple-select-label">Chọn Phim</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={maPhim}
          onChange={handleChange}
        >
          {danhSachPhim.map((item) => (
            <MenuItem key={item.maPhim} value={item.maPhim}>
              {item.tenPhim}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </>
  );
}

ChonPhim.propTypes = {
  danhSachPhim: PropTypes.array,
  handleChonPhim: PropTypes.func,
};

ChonPhim.defaultProps = {
  danhSachPhim: [],
  handleChonPhim: null,
};

export default ChonPhim;
