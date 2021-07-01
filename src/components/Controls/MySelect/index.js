import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

const useStyles = makeStyles((theme) => ({
  // "@global": {
  //   "*::-webkit-scrollbar": {
  //     width: "0",
  //   },
  //   "*::-webkit-scrollbar-track": {
  //     "-webkit-box-shadow": "inset 0 0 6px rgba(0,0,0,0.00)",
  //   },
  //   "*::-webkit-scrollbar-thumb": {
  //     backgroundColor: "rgba(0,0,0,.1)",
  //     outline: "1px solid slategrey",
  //   },
  // },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

function MySelect(props) {
  const { danhSach, handleChon, label, defaultValue } = props;
  const classes = useStyles();
  const [state, setState] = useState("");

  const handleChange = (event) => {
    setState(event.target.value);
    if (handleChon) {
      handleChon(event.target.value);
    }
  };

  useEffect(() => {
    setState(defaultValue);
  }, [defaultValue]);
  return (
    <>
      <FormControl disabled={!danhSach.length} className={classes.formControl}>
        <InputLabel id="demo-simple-select-label">{label}</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={state}
          // defaultValue={defaultValue}
          onChange={handleChange}
        >
          {danhSach.map((item) => (
            <MenuItem key={item.id} value={item.id}>
              {item.name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </>
  );
}

MySelect.propTypes = {
  danhSach: PropTypes.array,
  handleChon: PropTypes.func,
  label: PropTypes.string,
  defaultValue: PropTypes.string,
};

MySelect.defaultProps = {
  danhSach: [],
  handleChon: null,
  label: "",
  defaultValue: "",
};

export default MySelect;
