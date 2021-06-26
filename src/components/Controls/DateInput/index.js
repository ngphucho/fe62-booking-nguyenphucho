// import React, { useState } from "react";
// import { vi } from "date-fns/locale";
// import { DatePicker } from "react-nice-dates";
// import "react-nice-dates/build/style.css";
// import PropTypes from "prop-types";

// function DateInput(props) {
//   const { handleChon } = props;
//   const [date, setDate] = useState();

//   const handleChange = (e) => {
//     console.log(e);
//     setDate(e);
//     if (handleChon) {
//       handleChon(e);
//     }
//   };

//   return (
//     <DatePicker date={date} onDateChange={handleChange} locale={vi}>
//       {({ inputProps, focused }) => (
//         <input
//           className={"input" + (focused ? " -focused" : "")}
//           {...inputProps}
//         />
//       )}
//     </DatePicker>
//   );
// }

// DateInput.propTypes = {
//   handleChon: PropTypes.func,
// };

// DateInput.defaultProps = {
//   handleChon: null,
// };

// export default DateInput;

import React, { Fragment, useState } from "react";
import { KeyboardDatePicker,MuiPickersUtilsProvider } from "@material-ui/pickers";
import DateFnsUtils from '@date-io/date-fns';
import PropTypes from "prop-types";

function DateInput(props) {
  const { handleChon, data } = props;
  const [selectedDate, handleDateChange] = useState(null);

  const handleChange = (date) => {
    // console.log(date);
    handleDateChange(date);
    if (handleChon) {
      handleChon(date);
    }
  };

  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <KeyboardDatePicker
        // clearable
        disabled={data.disabled}
        value={selectedDate}
        placeholder="dd/MM/yyyy"
        label="Ngày Chiếu"
        variant="inline"
        onChange={date => handleChange(date)}
        // minDate={new Date()}
        format="dd/MM/yyyy"
      />
    </MuiPickersUtilsProvider>
  );
}

DateInput.propTypes = {
  handleChon: PropTypes.func,
  data: PropTypes.object,
};

DateInput.defaultProps = {
  handleChon: null,
  data: null,
};

export default DateInput;
