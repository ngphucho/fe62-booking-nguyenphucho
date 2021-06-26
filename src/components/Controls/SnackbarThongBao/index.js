import React from "react";
import Snackbar from "@material-ui/core/Snackbar";
import { useSelector, useDispatch } from "react-redux";
import { snackbarThongBaoToggle } from "../../../actions/snackbarThongBao";
import Alert from "../Alert";

export default function SnackbarThongBao() {
  const { isOpen, autoHideTime, message, type } = useSelector(
    (state) => state.snackbarThongBao
  );
  const dispatch = useDispatch();
  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    dispatch(
      snackbarThongBaoToggle({ autoHideTime, message, type: "success" })
    );
  };
  return (
    <Snackbar
      open={isOpen}
      autoHideDuration={autoHideTime}
      onClose={handleClose}
    >
      <Alert onClose={handleClose} severity={type}>
        {message}
      </Alert>
    </Snackbar>
  );
}
