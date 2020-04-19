import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import Main from "./Main";
import SingleSidebar from "./single-sidebar";

import Loader from "../loader";

const useStyles = makeStyles((theme) => ({
  mainGrid: {
    marginTop: theme.spacing(3),
  },
}));

export default function Single(props) {
  const classes = useStyles();
  const {sidebarDisplay, postData, error, isLoading} = props;
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="lg">
        <main>
          <Grid container spacing={5} className={classes.mainGrid}>
            {isLoading ? (
              <div className="single-post-loader">
                <Loader />
              </div>
            ) : (
              <Main post={postData} />
            )}
            {sidebarDisplay && <SingleSidebar postData={postData} />}
          </Grid>
        </main>
      </Container>
    </React.Fragment>
  );
}
