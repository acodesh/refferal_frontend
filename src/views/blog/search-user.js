import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";

import Sidebar from "./Sidebar";
import Loader from "../loader";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import UserCard from "../../views/user-card";
import history from "../../routes/history";

const useStyles = makeStyles((theme) => ({
  mainGrid: {
    marginTop: theme.spacing(3),
  },
}));

export default function SearchUser(props) {
  const classes = useStyles();

  const handleReferrClick = (id) => {
    history.push(`/request/1`);
  };

  const {isLoading, title, data} = props;
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
              <Grid item xs={12} md={8}>
                <Typography variant="h6" gutterBottom>
                  {title}
                </Typography>
                <Divider />
                {data.length ? (
                  data.map((post, key) => <UserCard post={post} key={key} />)
                ) : (
                  <div class="notfind">
                    <div class="message">
                      <span>
                        Can't find the advice you need?
                        <br />
                        Verified professionals are waiting to answer your
                        questions.
                      </span>
                    </div>{" "}
                    <button
                      class="btn_write_post"
                      onClick={handleReferrClick}
                    >
                      <span>+ Ask Questions</span>
                    </button>
                  </div>
                )}
              </Grid>
            )}

            <Sidebar />
          </Grid>
        </main>
      </Container>
    </React.Fragment>
  );
}
