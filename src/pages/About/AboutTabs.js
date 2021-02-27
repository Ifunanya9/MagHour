import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import boy from "../../img/chikamso.jpg";
import girl from "../../img/ifunanyachi.jpg";
import { Link } from "react-router-dom";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-auto-tabpanel-${index}`}
      aria-labelledby={`scrollable-auto-tab-${index}`}
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
    id: `scrollable-auto-tab-${index}`,
    "aria-controls": `scrollable-auto-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: "100%",
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function ScrollableTabsButtonAuto() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className="container">
      <div className={classes.root}>
        <AppBar position="static" color="default">
          <Tabs
            scrollButtons="auto"
            aria-label="scrollable auto tabs example"
            value={value}
            onChange={handleChange}
            indicatorColor="primary"
            textColor="primary"
            centered
          >
            <Tab label="Person 1" {...a11yProps(0)} />
            <Tab label="Person 2" {...a11yProps(1)} />
          </Tabs>
        </AppBar>
        <TabPanel value={value} index={0}>
          <Link
            className="px-5 mr-3"
            style={{
              cursor: "pointer",
              textDecoration: "none",
              color: "black",
            }}
            to="/about-ifunanyachi"
          >
            <img
              className="together"
              style={{ height: "120px", width: "120px" }}
              src={girl}
              alt="smiling"
            />{" "}
            Ifunanyachi
          </Link>
        </TabPanel>
        <TabPanel value={value} index={1}>
          <Link
            className="px-5 mr-3"
            style={{
              cursor: "pointer",
              textDecoration: "none",
              color: "black",
            }}
            to="/about-chikamso"
          >
            <img
              className="together"
              style={{ width: "120px", height: "120px" }}
              src={boy}
              alt="smiling"
            />{" "}
            Chikamso
          </Link>
        </TabPanel>
      </div>
    </div>
  );
}
