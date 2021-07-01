import React from "react";
import PropTypes from "prop-types";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import SwipeableViews from "react-swipeable-views";
import TheoPhim from "./TheoPhim";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    // width: 700,
    // backgroundClip: "padding-box",
    // borderBottomLeftRadius: 15,
    // borderBottomRightRadius: 15,
    // backgroundColor: 'red'
  },
}));

export default function OrderTicketBox() {
  const classes = useStyles();
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };

  return (
    <div className="orderTicketBox" style={{ backgroundClip: "padding-box" }}>
      <div
        className={classes.root}
        // style={{ paddingTop: "20px", paddingBottom: "20px", marginLeft: "auto", marginRight: "auto" }}
      >
        <AppBar position="static" color="transparent" elevation={0}>
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="simple tabs example"
            // variant="fullWidth"
            //     indicatorColor="secondary"
            // textColor="primary"
            centered
          >
            <Tab label="THEO PHIM" {...a11yProps(0)} />
            <Tab label="THEO RẠP" {...a11yProps(1)} />
            <Tab label="THEO NGÀY" {...a11yProps(2)} />
          </Tabs>
        </AppBar>
        <SwipeableViews
          axis={theme.direction === "rtl" ? "x-reverse" : "x"}
          index={value}
          onChangeIndex={handleChangeIndex}
        >
          <TabPanel value={value} index={0} dir={theme.direction}>
            <div className="tab">
              <TheoPhim />
              {/* <select>
                <option>Chọn phim</option>
              </select>
              <select>
                <option>Chọn rạp</option>
              </select>
              <select>
                <option>Chọn ngày</option>
              </select>
              <select>
                <option>Chọn suất</option>
              </select> */}
            </div>
          </TabPanel>
          <TabPanel value={value} index={1} dir={theme.direction}>
            <div className="tab">
              <select>
                <option>Chọn rạp</option>
              </select>
              <select>
                <option>Chọn phim</option>
              </select>
              <select>
                <option>Chọn ngày</option>
              </select>
              <select>
                <option>Chọn suất</option>
              </select>
            </div>
          </TabPanel>
          <TabPanel value={value} index={2} dir={theme.direction}>
            <div className="tab">
              <select>
                <option>Chọn ngày</option>
              </select>
              <select>
                <option>Chọn rạp</option>
              </select>
              <select>
                <option>Chọn phim</option>
              </select>
              <select>
                <option>Chọn suất</option>
              </select>
            </div>
          </TabPanel>
        </SwipeableViews>
      </div>
    </div>
  );
}
