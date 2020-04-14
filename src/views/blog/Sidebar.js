import React from "react";
import PropTypes from "prop-types";
import {makeStyles} from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";

const useStyles = makeStyles((theme) => ({
  sidebarAboutBox: {
    padding: "24px 35px 26px",
    backgroundColor: "#fff",
    border: "1px solid #eaeaea",
    borderRadius: "69px",
    boxShadow: "0 2px 10px -6px rgba(0,0,0,.5)",
    boxSizing: "border-box",
  },
  sidebarSection: {
    borderBottom: "1px solid #e8e9ea",
    padding: "24px 0 23px",
    marginBottom: "30px",
  },
  sidebarMain: {
    padding: "0px 35px 26px",
    backgroundColor: "#fafafa",
    marginTop: "10px",
  },
}));

const sidebarData = {
  title: "",
  description:
    "305 people have been referred through Rooftop Slushie in the last 7 days.",
  archives: [
    "facebook",
    "amazon",
    "google",
    "manager",
    "interview",
    "engineer",
    "data",
    "product",
    "program",
    "engineering",
    ,
  ],
};

export default function Sidebar(props) {
  const classes = useStyles();

  return (
    <Grid item xs={12} md={4}>
      <Paper elevation={0} className={classes.sidebarAboutBox}>
        <Typography variant="h6" gutterBottom>
          {sidebarData.title}
        </Typography>
        <Typography>{sidebarData.description}</Typography>
      </Paper>
      <Paper elevation={0} className={classes.sidebarMain}>
        <Typography
          variant="h6"
          gutterBottom
          className={classes.sidebarSection}
        >
          Popular Keywords
        </Typography>
        {sidebarData.archives.map((archive, index) => (
          <div style={{display: "flex"}}>
            <span
              style={{
                display: "inline-block",
                width: "24px",
                //marginRight: "6px",
                color: "#a7abb3",
                fontWeight: "700",
              }}
            >
              {index + 1}
            </span>
            <Link
              style={{
                color: " #02bade",
                paddingBottom: "9px",
                fontSize: "16px",
                fontWeight: "700",
                lineHeight: "20px",
              }}
              display="block"
              variant="body1"
              href={`/search/${archive}`}
              key={archive.title}
            >
              {archive}
            </Link>
          </div>
        ))}
      </Paper>
    </Grid>
  );
}

Sidebar.propTypes = {
  archives: PropTypes.array,
  description: PropTypes.string,
  social: PropTypes.array,
  title: PropTypes.string,
};
