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
import {addRequestData} from "../../actions/request-action-type";
import {connect} from "react-redux";
import SimpleSelect from "../simple-select";
import DatePicker from "../date-picker";
const styles = (theme) => ({
  mainGrid: {
    marginTop: 3,
  },
});

class RequestFormTwo extends React.Component {
  state = {
    post_anonymously: "",
    number_of_professional: "",
    pay_each_person: "",
    dead_line: new Date("2014-08-18T21:11:54"),
    fieldValidations: {
      number_of_professional: false,
      post_anonymously: false,
      pay_each_person: false,
      dead_line: false,
    },
  };

  handleChange = (field, e) => {
    const {target} = e;
    const {fieldValidations} = this.state;
    if (field === "post_anonymously" && !fieldValidations.post_anonymously) {
      this.setState({
        [field]: target.value,
        fieldValidations: {[field]: false},
      });
    } else if (field === "dead_line") {
      this.setState({[field]: e});
    } else {
      this.setState({[field]: target.value});
    }
  };

  handleSubmitonClick = () => {
    const {
      post_anonymously,
      number_of_professional,
      pay_each_person,

      dead_line,
    } = this.state;

    let validation = true;
    let errorIn;
    if (!post_anonymously) {
      errorIn = {post_anonymously: true};
      validation = false;
    }

    if (validation) {
      this.props.addRequestData({
        ...this.props.request,
        post_anonymously,
        number_of_professional,
        pay_each_person,
        dead_line,
      });
      this.props.handleNext();
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
      request,
    } = this.props;

    const {
      fieldValidations,
      post_anonymously,
      number_of_professional,
      pay_each_person,
      dead_line,
    } = this.state;
    return (
      <React.Fragment>
        <CssBaseline />
        <Container maxWidth="lg">
          <main>
            <Grid container spacing={5} className={classes.mainGrid}>
              <Grid item xs={12} md={12}>
                <Typography variant="h5" gutterBottom>
                  Almost done!
                </Typography>
                <Divider />
                <div className="row" style={{margin: "45px"}}>
                  <div className="form-group user-profile-form-group-full">
                    <SimpleSelect
                      title={"Post Anonymously"}
                      name="post_anonymously"
                      value={post_anonymously}
                      error={fieldValidations.post_anonymously}
                      handleChange={this.handleChange.bind(
                        this,
                        "post_anonymously"
                      )}
                      options={[
                        {key: 1, value: "Yes"},
                        {key: 2, value: "No"},
                      ]}
                    />
                  </div>
                  <div className="form-group user-profile-form-group-full">
                    <InputField
                      type={"number"}
                      label={
                        "How many professionals do you want to get matched with?"
                      }
                      name="number_of_professional"
                      value={number_of_professional}
                      error={fieldValidations.number_of_professional}
                      handleChange={this.handleChange.bind(
                        this,
                        "number_of_professional"
                      )}
                    />
                  </div>
                  <div className="form-group user-profile-form-group-full">
                    <InputField
                      type={"number"}
                      label={"How much will you pay each person?"}
                      name="pay_each_person"
                      value={pay_each_person}
                      error={fieldValidations.pay_each_person}
                      handleChange={this.handleChange.bind(
                        this,
                        "pay_each_person"
                      )}
                    />
                  </div>
                  <div className="form-group user-profile-form-group-full">
                    <DatePicker
                      title={
                        "I want to keep this project open for applications until..."
                      }
                      name="dead_line"
                      value={dead_line}
                      error={fieldValidations.dead_line}
                      handleChange={this.handleChange.bind(this, "dead_line")}
                    />
                  </div>
                  <div className="form-group user-profile-form-group-full">
                    <ContainedButtons
                      title="Next"
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
  Request: {isLoadingRequest, requestData, requestError, request},
}) => ({
  isLoadingRequest,
  requestData,
  requestError,
  request,
});

export default withStyles(styles)(
  withRouter(connect(mapStateToProps, {addRequestData})(RequestFormTwo))
);
