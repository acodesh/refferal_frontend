import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import Main from "./Main";
import Sidebar from "./Sidebar";
import post1 from "./blog-post.1.md";
import post2 from "./blog-post.2.md";
import post3 from "./blog-post.3.md";

const useStyles = makeStyles((theme) => ({
  mainGrid: {
    marginTop: theme.spacing(3),
  },
}));

const posts = [post1, post2, post3];

const sidebar = {
  title: "About",
  description:
    "Etiam porta sem malesuada magna mollis euismod. Cras mattis consectetur purus sit amet fermentum. Aenean lacinia bibendum nulla sed consectetur.",
  archives: [
    {title: "March 2020", url: "#"},
    {title: "February 2020", url: "#"},
    {title: "January 2020", url: "#"},
    ,
  ],
  social: [
    {name: "Twitter", icon: TwitterIcon},
    {name: "Facebook", icon: FacebookIcon},
  ],
};

export default function Single(props) {
  const classes = useStyles();
  const {sidebar} = props;
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="lg">
        <main>
          <Grid container spacing={5} className={classes.mainGrid}>
            <Main posts={posts} />
            {sidebar && (
              <Sidebar
                title={sidebar.title}
                description={sidebar.description}
                archives={sidebar.archives}
                social={sidebar.social}
              />
            )}
          </Grid>
        </main>
      </Container>
    </React.Fragment>
  );
}
