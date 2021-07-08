import React, { useState } from "react";
import PropTypes from "prop-types";
import { TextField } from "@material-ui/core";

function MyInput(props) {
  const { data, handleChon } = props;
  const [value, setValue] = useState();

  const handleChange = (event) => {
    setValue(event.target.value);
    if (handleChon) {
      handleChon(event.target.value);
    }
  };
  return (
    <TextField
      onChange={(event) => handleChange(event)}
      id="standard-number"
      label="Giá vé"
      type="number"
      inputProps={{ step: 1000, min: 0 }}
      disabled={data.disabled}
      value={value}
      // InputLabelProps={{
      //   shrink: true,
      // }}
    />
  );
}

MyInput.propTypes = {
  data: PropTypes.object,
  handleChon: PropTypes.func,
};

MyInput.defaultProps = {
  data: null,
  handleChon: null,
};

export default MyInput;
