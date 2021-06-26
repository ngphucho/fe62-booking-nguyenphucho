import React, { useState } from "react";
import "react-nice-dates/build/style.css";
import PropTypes from "prop-types";
import { getHoursMinutes } from "../../../utils/timeFunction";
import {
  KeyboardTimePicker,
  MuiPickersUtilsProvider,
} from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";

function TimeInput(props) {
  const { handleChon, data } = props;
  const [selectedDate, handleDateChange] = useState(null);

  const handleChange = (date) => {
    handleDateChange(date);
    if (handleChon) {
      handleChon(getHoursMinutes(date));
    }
  };

  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <KeyboardTimePicker
        disabled={data.disabled}
        ampm={false}
        variant="inline"
        label="Giờ chiếu"
        value={selectedDate}
        onChange={(date) => handleChange(date)}
      />
    </MuiPickersUtilsProvider>
  );
}

TimeInput.propTypes = {
  handleChon: PropTypes.func,
  data: PropTypes.object,
};
TimeInput.defaultProps = {
  handleChon: null,
  data: null,
};

export default TimeInput;
