import React from "react";
import PropTypes from "prop-types";
import {makeStyles} from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import history from "../../routes/history";

function TabPanel(props) {
  const {children, value, index, ...other} = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-auto-tabpanel-${index}`}
      aria-labelledby={`scrollable-auto-tab-${index}`}
      {...other}
    >
      {value === index && <Box p={3}>{children}</Box>}
    </Typography>
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

export default function TabView() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  function handleUserImgClick() {
    history.push("/profile/12");
  }

  return (
    <div className={classes.root}>
      <AppBar position="static" color="default">
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          variant="scrollable"
          scrollButtons="auto"
          aria-label="scrollable auto tabs example"
        >
          <Tab label="1 Answers" {...a11yProps(0)} />
          <Tab label="1 Question" {...a11yProps(1)} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        <ul class="h_lst">
          <li>
            <div class="paragraph">
              <div class="h_tit">
                <div>
                  <div>
                    <h3>
                      <a
                        href="/request/12"
                        class=""
                        title="Looking for a Referral to Apple and Facebook"
                      >
                        Looking for a Referral to Apple and Facebook
                      </a>
                    </h3>
                    <p class="date">Apr 18 2020 ~ Apr 18 2020</p>
                  </div>
                </div>
                <div class="reward_info">
                  <div class="reward">
                    <strong>
                      <em class="currency">$</em>30 / person
                    </strong>
                  </div>
                </div>
              </div>
              <div>
                <div class="person">
                  <div class="usr">
                    <span class="name">csusgrad19</span>
                  </div>
                  <a href="/profile/12" class="" title="csusgrad19">
                    <div class="photo bgcolor_c">
                      <img src="https://s3-us-west-2.amazonaws.com/s3.rooftopslushie.com/member_profile/550/ac01b6dbdb8eac107eb4488b4721e1e0.jpeg" />
                    </div>
                  </a>
                </div>
                <div x-placement="topleft" class="says">
                  <p>
                    BEST experience ever! qWJw51's super quick and I received a
                    referral within 5 minutes! Thank you so much for all your
                    help :)
                  </p>
                </div>
              </div>
            </div>
          </li>
          <div class="infinite-loading-container">
            <div class="infinite-status-prompt" style={{display: "none"}}>
              <span class="none_result_solution">
                <div class="uni_empty">
                  <div class="msg">
                    <h3>No answers yet</h3>
                  </div>
                </div>
              </span>
            </div>
            <div class="infinite-status-prompt" style={{display: "none"}}>
              <span></span>
            </div>
            <div
              class="infinite-status-prompt"
              style={{
                color: "rgb(102, 102, 102)",
                fontSize: "14px",
                padding: " 10px 0px",
                display: "none",
              }}
            >
              Opps, something went wrong :(
              <br /> <button class="btn-try-infinite">Retry</button>
            </div>
          </div>
        </ul>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <ul class="h_lst">
          <li>
            <div class="paragraph">
              <div class="h_tit">
                <div>
                  <div>
                    <h3>
                      <a
                        href="/post/1"
                        class=""
                        title="Looking for a Referral to Apple and Facebook"
                      >
                        Looking for a Referral to Apple and Facebook
                      </a>
                    </h3>
                  </div>
                  <p class="date">Apr 18 2020 ~ Apr 18 2020</p>
                </div>
                <div class="reward_info">
                  <div class="reward">
                    <strong>
                      <em class="currency">$</em>30 / person
                    </strong>
                  </div>
                </div>
              </div>
            </div>
          </li>
          <div class="infinite-loading-container">
            <div class="infinite-status-prompt" style={{display: "none"}}>
              <span class="none_result_request">
                <div class="uni_empty">
                  <div class="msg">
                    <h3>No questions yet</h3>
                  </div>
                </div>
              </span>
            </div>
            <div class="infinite-status-prompt">
              <span></span>
            </div>
            <div
              class="infinite-status-prompt"
              style={{
                color: "rgb(102, 102, 102)",
                fontSize: "14px",
                padding: "10px 0px",
                display: "none",
              }}
            >
              Opps, something went wrong :(
              <br /> <button class="btn-try-infinite">Retry</button>
            </div>
          </div>
          <div></div>
        </ul>
      </TabPanel>
    </div>
  );
}
