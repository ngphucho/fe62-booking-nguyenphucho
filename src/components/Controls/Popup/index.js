import React from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  Typography,
  Button,
  makeStyles,
  useMediaQuery,
  useTheme,
} from "@material-ui/core";
import { useSelector, useDispatch } from "react-redux";
import { popupModalToggle } from "../../../actions/popupModal";
import "./style.scss"

const useStyle = makeStyles({
  root: {
    borderRadius: 0,
  },
});

export default function Popup({ children }) {
  const dispatch = useDispatch();
  const classes = useStyle();
  const { isOpen, title } = useSelector((state) => state.popupModal);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const handleClose = () => {
    dispatch(popupModalToggle(title));
  };
  return (
    <Dialog
      open={isOpen}
      onClose={handleClose}
      fullScreen={fullScreen}
      className={classes.root}
    >
      <DialogTitle>
        <div style={{ display: "flex" }}>
          <Typography variant="h6" component="div" style={{ flexGrow: 1 }}>
            {title}
          </Typography>
          <Button color="secondary" onClick={handleClose}>
            x
          </Button>
        </div>
      </DialogTitle>
      <DialogContent>
        <div>{children}</div>
      </DialogContent>
    </Dialog>
  );
}
