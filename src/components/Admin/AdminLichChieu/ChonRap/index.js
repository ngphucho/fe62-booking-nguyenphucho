import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import ListSubheader from "@material-ui/core/ListSubheader";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
}));

function ChonRap(props) {
  const classes = useStyles();
  const { danhSachCumRap, handleChonRap } = props;
  const [maRap, setMaRap] = useState("");

  const handleChange = (e) => {
    console.log("e",e.target.value);
    e.target.value && setMaRap(e.target.value);
    console.log("marap",maRap);
    // if (handleChonRap) {
    //   handleChonRap(e.target.value);
    // }
  };

  return (
    <>
      <FormControl className={classes.formControl}>
        <InputLabel htmlFor="grouped-select">Chọn Rạp</InputLabel>
        <Select value={maRap} id="grouped-select" onChange={handleChange}>
          {danhSachCumRap.map((cumRap) => {
            const subList = [
              { tenCumRap: cumRap.tenCumRap },
              ...cumRap.danhSachRap,
            ];
            return subList.map((rap) =>
              rap.tenCumRap ? (
                <ListSubheader>{rap.tenCumRap}</ListSubheader>
              ) : (
                <MenuItem key={rap.maRap} value={rap.maRap}>
                  {rap.tenRap}
                </MenuItem>
              )
            );
          })}
        </Select>
      </FormControl>
    </>
  );
}

ChonRap.propTypes = {
  danhSachCumRap: PropTypes.array,
  handleChonRap: PropTypes.func,
};

ChonRap.defaultProps = {
  danhSachCumRap: [],
  handleChonRap: null,
};

export default ChonRap;
