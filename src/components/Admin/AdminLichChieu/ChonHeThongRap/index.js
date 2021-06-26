import React, { useEffect, useState } from "react";
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
    width: "auto",
    minWidth: 200,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

function ChonHeThongRap(props) {
  // console.log(props);
  const { danhSachHeThongRap, handleChonHeThongRap } = props;
  const classes = useStyles();
  const [maHeThongRap, setMaHeThongRap] = useState("");

  const handleChange = (event) => {
    setMaHeThongRap(event.target.value);
    if (handleChonHeThongRap) {
      handleChonHeThongRap(event.target.value);
    }
  };
  return (
    <>
      <FormControl
        disabled={!danhSachHeThongRap.length}
        className={classes.formControl}
      >
        <InputLabel id="demo-simple-select-label">Chọn Hệ Thống Rạp</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={maHeThongRap}
          onChange={handleChange}
        >
          {danhSachHeThongRap.map((item) => (
            <MenuItem key={item.maHeThongRap} value={item.maHeThongRap}>
              {item.tenHeThongRap}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </>
  );
}

ChonHeThongRap.propTypes = {
  danhSachHeThongRap: PropTypes.array,
  handleChonHeThongRap: PropTypes.func,
};

ChonHeThongRap.defaultProps = {
  danhSachHeThongRap: [],
  handleChonHeThongRap: null,
};

export default ChonHeThongRap;
