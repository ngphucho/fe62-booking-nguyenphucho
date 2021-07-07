import React, { useEffect, useState } from "react";
import Autocomplete from "@material-ui/lab/Autocomplete";
import { useHistory, useLocation } from "react-router-dom";
import qs from "qs";
import {
  TextField,
  FormControl,
  FormGroup,
  Button,
  FormControlLabel,
  Checkbox,
  Slider,
  Typography,
} from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import { layDanhSachPhim } from "../../../../../actions/movies";
import { snackbarThongBaoToggle } from "../../../../../actions/snackbarThongBao";
import { listSortCheckBox } from "./listSortCheckBox";
//Datetime picker
import { vi } from "date-fns/locale";
import { DateRangePicker, START_DATE, END_DATE } from "react-nice-dates";
import "react-nice-dates/build/style.css";
import "./styles.scss";
//
import { cloneArrayObject } from "../../../../../utils/myFunction";
import Tooltip from "@material-ui/core/Tooltip";
import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles";

const theme = createMuiTheme({
  typography: {
    fontFamily: [
      "Signika",
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),
  },
});

export default function TimKiemPhim() {
  const location = useLocation();
  const history = useHistory();
  const dispatch = useDispatch();
  const { danhSachPhim } = useSelector((state) => state.danhSachPhim);
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [tenPhim, setTenPhim] = useState("");
  const [listCheckBox, setListCheckBox] = useState(
    cloneArrayObject(listSortCheckBox)
  );
  const [danhGia, setDanhGia] = useState([1, 10]);

  //ham xu ly range slider
  const danhGiaHandleChange = (event, newValue) => {
    setDanhGia(newValue);
  };

  //ham xu ly text hien thi range slider
  const danhGiaText = (value) => value;

  // ham xu ly gui thong tin tim kiem len reducer
  const timKiem = () => {
    const thongTinTrang = qs.parse(location.search, {
      ignoreQueryPrefix: true,
    });
    history.push(
      "/admin/quan-ly-phim?" +
        qs.stringify({
          ...thongTinTrang,
          tenPhim,
          tuNgay: startDate,
          denNgay: endDate,
          listCheckBox,
          danhGia,
        })
    );
  };

  //huy dieu kien tim kiem
  const resetTimKiem = () => {
    setStartDate(null);
    setEndDate(null);
    setTenPhim("");
    setListCheckBox(cloneArrayObject(listSortCheckBox));
    setDanhGia([1, 10]);
  };

  //ham xu ly check box
  const checkBoxHandleChange = (event, index) => {
    if (
      listCheckBox[index].isChecked === "true" &&
      countChecked(listCheckBox) === 1
    ) {
      dispatch(
        snackbarThongBaoToggle({
          message: "Phải check ít nhất 1 ô",
          type: "error",
          autoHideTime: 1500,
        })
      );
      return;
    }
    const newList = [...listCheckBox];
    newList[index].isChecked = event.target.checked.toString();
    setListCheckBox(newList);
  };

  //ham dem xem co bao nhieu o duoc check trong listChceckBox
  const countChecked = (data) => {
    return data.reduce((count, item) => {
      return item.isChecked === "true" ? count + 1 : count;
    }, 0);
  };

  //laydanhsachphim
  useEffect(() => {
    dispatch(layDanhSachPhim());

    if (location.search) {
      const thongTinTrang = qs.parse(location.search, {
        ignoreQueryPrefix: true,
      });
      setTenPhim(thongTinTrang.tenPhim);
      setStartDate(
        thongTinTrang.tuNgay === "" ? null : new Date(thongTinTrang.tuNgay)
      );
      setEndDate(
        thongTinTrang.denNgay === "" ? null : new Date(thongTinTrang.denNgay)
      );
      setListCheckBox(thongTinTrang.listCheckBox);
      setDanhGia(thongTinTrang.danhGia.map((item) => parseInt(item)));
    }
  }, []);

  //cap nhat thongtintimkiemreducer khi input thay doi
  useEffect(() => {
    console.log(startDate, endDate);
    timKiem();
  }, [tenPhim, startDate, endDate, listCheckBox, danhGia]);

  function ValueLabelComponent(props) {
    const { children, open, value } = props;

    return (
      <Tooltip open={open} enterTouchDelay={0} placement="top" title={value}>
        {children}
      </Tooltip>
    );
  }

  return danhSachPhim ? (
    <ThemeProvider theme={theme}>
      <FormControl>
        <div className="formTimKiemPhim">
          {/* line 1 */}
          <div className="line1">
            {/* input box */}
            <FormGroup className="inputBox">
              <Autocomplete
                onInputChange={(event, inputValue) => {
                  setTenPhim(inputValue);
                }}
                value={tenPhim}
                clearOnBlur={false}
                id="timKiemPhim"
                freeSolo
                disableClearable
                options={danhSachPhim.map((movie) => movie.tenPhim)}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    placeholder="Tìm kiếm ..."
                    margin="normal"
                    variant="outlined"
                    InputProps={{ ...params.InputProps, type: "search" }}
                  />
                )}
              />
            </FormGroup>

            {/* datepicker */}
            <FormGroup className="rangeDatePickerBox">
              <DateRangePicker
                startDate={startDate}
                endDate={endDate}
                onStartDateChange={setStartDate}
                onEndDateChange={setEndDate}
                minimumDate={new Date("2015-01-01T00:00:00")}
                // minimumLength={1}
                format="dd-MM-yyyy"
                locale={vi}
              >
                {({ startDateInputProps, endDateInputProps, focus }) => (
                  <div className="date-range">
                    <input
                      className={
                        "input" + (focus === START_DATE ? " -focused" : "")
                      }
                      {...startDateInputProps}
                      placeholder="Từ ngày"
                    />
                    <span className="date-range_arrow" />
                    <input
                      className={
                        "input" + (focus === END_DATE ? " -focused" : "")
                      }
                      {...endDateInputProps}
                      placeholder="Đến ngày"
                    />
                  </div>
                )}
              </DateRangePicker>
            </FormGroup>
          </div>

          {/* line 2 */}
          <div className="line2">
            {/* list checkbox */}
            <FormGroup className="listCheckboxBox">
              {listCheckBox.map((item, index) => (
                <FormControlLabel
                  key={index}
                  control={
                    <Checkbox
                      disableRipple={true}
                      checked={item.isChecked === "true"}
                      onChange={(event) => {
                        checkBoxHandleChange(event, index);
                      }}
                      name={item.name}
                    />
                  }
                  label={item.label}
                />
              ))}
            </FormGroup>

            {/* range slider */}
            <FormGroup className="rangeSliderBox">
              <Slider
                color="secondary"
                value={danhGia}
                onChange={danhGiaHandleChange}
                valueLabelDisplay="auto"
                aria-labelledby="range-slider"
                getAriaValueText={danhGiaText}
                min={1}
                max={10}
                ValueLabelComponent={ValueLabelComponent}
              />
              <Typography id="range-slider">Đánh Giá</Typography>
            </FormGroup>

            {/* button reset thong tin tim kiem */}
            <FormGroup>
              <Button color="secondary" onClick={resetTimKiem}>
                Reset
              </Button>
            </FormGroup>
          </div>
        </div>
      </FormControl>
    </ThemeProvider>
  ) : null;
}
