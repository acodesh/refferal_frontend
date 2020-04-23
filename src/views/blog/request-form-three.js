import React from "react";

import {withStyles} from "@material-ui/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import TextField from "@material-ui/core/TextField";
import InputField from "../../views/input-field";
import ContainedButtons from "../../views/contained-buttons";
import {withRouter} from "react-router";
import {connect} from "react-redux";

const styles = (theme) => ({
  mainGrid: {
    marginTop: 3,
  },
});

class RequestFormThree extends React.Component {
  render() {
    const {
      classes,
      isLoadingRequest,
      requestData,
      requestError,
      user_id,
      request,
    } = this.props;

    return (
      <React.Fragment>
        <CssBaseline />
        <Container maxWidth="lg">
          <main>
            <Grid container spacing={5} className={classes.mainGrid}>
              <Grid item xs={12} md={12}>
                <Typography variant="h5" gutterBottom>
                  Confirm and submit
                </Typography>
                <Divider />
                <div class="sec_payment payment_info">
                  <div class="sec_tit">
                    <strong class="topic">Referral</strong>{" "}
                    <h1 class="box_tit">{request.title}</h1>{" "}
                    <div class="tags_list">
                      {request.desired_company &&
                        request.desired_company
                          .split(",")
                          .map((company, key) => (
                            <span class="tag label label-info">{company}</span>
                          ))}
                    </div>
                  </div>{" "}
                  <div class="tbl_report report_summary">
                    <table>
                      <thead>
                        <tr>
                          <th>title</th> <th>amount</th>
                        </tr>
                      </thead>{" "}
                      <tbody>
                        <tr class="t_provider">
                          <td>Applicants</td>{" "}
                          <td class="t">
                            {request.number_of_professional} Users
                          </td>
                        </tr>{" "}
                        <tr class="t_payperson">
                          <td>Payment Per Person</td>{" "}
                          <td class="c">${request.pay_each_person}</td>
                        </tr>{" "}
                        <tr class="t_deadline">
                          <td>Application Deadline</td>{" "}
                          <td class="t">
                            {request.dead_line.getFullYear() +
                              "/" +
                              (request.dead_line.getMonth() + 1) +
                              "/" +
                              request.dead_line.getDate()}
                          </td>
                        </tr>{" "}
                        {/* <tr class="t_visible">
                          <td>Answer Visibility</td> <td class="t">{request.post_anonymously ? "Private" : "Public"}</td>
                        </tr>{" "} */}
                        <tr class="t_uname">
                          <td>My Username</td>{" "}
                          <td class="t">
                            {request.post_anonymously ? "Private" : "Public"}
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  {requestError && (
                    <div className="alert alert-danger">{requestError}</div>
                  )}
                  {requestData && (
                    <div className="alert alert-success">{requestData}</div>
                  )}
                </div>
              </Grid>
            </Grid>
          </main>
        </Container>
      </React.Fragment>
    );
  }
}
const mapStateToProps = ({
  Request: {isLoadingRequest, requestData, requestError, request},
}) => ({
  isLoadingRequest,
  requestData,
  requestError,
  request,
});

export default withStyles(styles)(
  withRouter(connect(mapStateToProps, {})(RequestFormThree))
);
