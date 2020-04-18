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
import {addRequest} from "../../actions/request-action-type";
import {connect} from "react-redux";

const styles = (theme) => ({
  mainGrid: {
    marginTop: 3,
  },
});

class RequestPost extends React.Component {
  state = {
    title: "",
    description: "",
    desired_company: "",
    linkedin_url: "",
    question_1: "",
    question_2: "",
    fieldValidations: {
      title: false,
      description: false,
      desired_company: false,
      linkedin_url: false,
      question_1: false,
      question_2: false,
    },
  };

  handleChange = (field, e) => {
    const {target} = e;
    const {fieldValidations} = this.state;
    if (
      (field === "title" && !fieldValidations.title) ||
      (field === "description" && !fieldValidations.description)
    ) {
      this.setState({
        [field]: target.value,
        fieldValidations: {[field]: false},
      });
    } else {
      this.setState({[field]: target.value});
    }
  };

  handleSubmitonClick = () => {
    const {
      title,
      description,
      desired_company,
      linkedin_url,
      question_1,
      question_2,
    } = this.state;

    let validation = true;
    let errorIn;
    if (!title) {
      errorIn = {title: true};
      validation = false;
    }
    if (!description) {
      errorIn = {...errorIn, description: true};
      validation = false;
    }
    if (!desired_company) {
      errorIn = {...errorIn, desired_company: true};
      validation = false;
    }

    if (validation) {
      this.props.addRequest({
        title,
        description,
        desired_company,
        linkedin_url,
        question_2,
        question_1,
        user_id: this.props.user_id,
      });
    } else {
      this.setState({fieldValidations: errorIn});
    }
  };

  render() {
    const {
      classes,
      isLoadingRequest,
      requestData,
      requestError,
      user_id,
    } = this.props;
    const {
      fieldValidations,
      description,
      title,
      desired_company,
      linkedin_url,
      question_1,
      question_2,
    } = this.state;
    return (
      <React.Fragment>
        <CssBaseline />
        <Container maxWidth="lg">
          <main>
            <Grid container spacing={5} className={classes.mainGrid}>
              <Grid item xs={12} md={12}>
                <Typography variant="h6" gutterBottom>
                  Let's get started on your question
                </Typography>
                <Divider />
                <div class="row">
                  <div className="form-group user-profile-form-group-full">
                    <InputField
                      label={"Title"}
                      name="title"
                      value={title}
                      error={fieldValidations.title}
                      handleChange={this.handleChange.bind(this, "title")}
                    />
                  </div>
                  <div
                    className="form-group user-profile-form-group-full"
                    style={{marginLeft: "10px"}}
                  >
                    <TextField
                      id="outlined-multiline-static"
                      label="Description"
                      multiline
                      rows="4"
                      defaultValue={description}
                      variant="outlined"
                      style={{width: "98%"}}
                      onChange={this.handleChange.bind(this, "description")}
                    />
                  </div>
                  <div className="form-group user-profile-form-group-full">
                    <InputField
                      label={"Desired Company"}
                      name="desired_company"
                      value={desired_company}
                      error={fieldValidations.desired_company}
                      value={desired_company}
                      handleChange={(e) =>
                        this.handleChange("desired_company", e)
                      }
                    />
                  </div>
                  <div className="form-group user-profile-form-group-full">
                    <InputField
                      label={"Linkedin Profile URL (Optional)"}
                      name="linkedin_url"
                      value={linkedin_url}
                      error={fieldValidations.linkedin_url}
                      handleChange={this.handleChange.bind(
                        this,
                        "linkedin_url"
                      )}
                    />
                  </div>
                  <div className="form-group user-profile-form-group-full">
                    <Divider />
                  </div>
                  <div className="form-group">
                    <h3>Questions</h3>
                  </div>
                  <div
                    className="form-group user-profile-form-group-full"
                    style={{marginLeft: "10px"}}
                  >
                    <TextField
                      id="outlined-multiline-static"
                      label="Question 1"
                      multiline
                      rows="4"
                      defaultValue={question_1}
                      variant="outlined"
                      style={{width: "98%"}}
                      value={question_1}
                      onChange={(e) => this.handleChange("question_1", e)}
                    />
                  </div>
                  <div
                    className="form-group user-profile-form-group-full"
                    style={{marginLeft: "10px"}}
                  >
                    <TextField
                      id="outlined-multiline-static"
                      label="Question 2"
                      multiline
                      rows="4"
                      defaultValue={question_2}
                      variant="outlined"
                      style={{width: "98%"}}
                      value={question_2}
                      onChange={(e) => this.handleChange("question_2", e)}
                    />
                  </div>
                  {requestError && (
                    <div className="alert alert-danger">{requestError}</div>
                  )}

                  {requestData && (
                    <div className="alert alert-success">{requestData}</div>
                  )}
                  <div className="form-group user-profile-form-group-full">
                    <ContainedButtons
                      title="Request"
                      onClick={() => this.handleSubmitonClick()}
                    />
                  </div>
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
  Request: {isLoadingRequest, requestData, requestError},
}) => ({
  isLoadingRequest,
  requestData,
  requestError,
});

export default withStyles(styles)(
  withRouter(connect(mapStateToProps, {addRequest})(RequestPost))
);
