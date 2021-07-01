import React from "react";
import PropTypes from "prop-types";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import SwipeableViews from "react-swipeable-views";
import SubContent from "../SubContent";

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
        <Box py={3}>
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
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function MainContent({ currentMovies, comingMovies }) {
  // console.log("main", comingMovies);
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
    <div className="mt-4">
      <div className={classes.root}>
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
            <Tab label="PHIM ĐANG CHIẾU" {...a11yProps(0)} />
            <Tab label="PHIM SẮP CHIẾU" {...a11yProps(1)} />
            {/* <Tab label="Item Three" {...a11yProps(2)} /> */}
          </Tabs>
        </AppBar>
        <SwipeableViews
        
          axis={theme.direction === "rtl" ? "x-reverse" : "x"}
          index={value}
          onChangeIndex={handleChangeIndex}
        >
          <TabPanel value={value} index={0} dir={theme.direction}>
            <SubContent data={currentMovies} link="/phim-dang-chieu" />
          </TabPanel>
          <TabPanel value={value} index={1} dir={theme.direction}>
            <SubContent data={comingMovies} link="/phim-sap-chieu" />
          </TabPanel>
          {/* <TabPanel value={value} index={2} dir={theme.direction}>
            Item Three
          </TabPanel> */}
        </SwipeableViews>
      </div>
    </div>
  );
}
