import React from "react";
import InputField from "../../views/input-field";
import ContainedButtons from "../../views/contained-buttons";
import {forgetPassword} from "../../actions/user-action-type";
import {connect} from "react-redux";

class ForgetPassword extends React.Component {
  state = {
    email: "",
    fieldValidations: {
      email: false,
    }
  };
  handleChange = (field, e) => {
    const {target} = e;
    const {fieldValidations} = this.state;
    if (
      (field === "email" && !fieldValidations.username)
    ) {
      this.setState({
        [field]: target.value,
        fieldValidations: {[field]: false}
      });
    } else {
      this.setState({[field]: target.value});
    }
  };

  handleSubmitonClick = () => {
    const {email} = this.state;

    let validation = true;
    let errorIn;
    if (!email) {
      errorIn = {email: true};
      validation = false;
    }

    if (validation) {
      this.props.forgetPassword({
        email
      });
    } else {
      this.setState({fieldValidations: errorIn});
    }
  };

  render() {
    const {action, forgetPasswordError, forgetPasswordStatus} = this.props;

    const {email, fieldValidations} = this.state;

    return (
      <>
        <div id="myModal" class="modal fade">
          <div class="modal-dialog modal-login">
            <div class="modal-content">
              <form action="/examples/actions/confirmation.php" method="post">
                <div class="modal-header">
                  <h4 class="modal-title">Forget Password</h4>
                  <button
                    onClick={(e) => action(e, "forgetPasswordPopUp")}
                    type="button"
                    class="close"
                    data-dismiss="modal"
                    aria-hidden="true"
                  >
                    &times;
                  </button>
                </div>
                <div class="modal-body">
                  <div class="form-group">
                    <InputField
                      label={"Email"}
                      name="email"
                      value={email}
                      error={fieldValidations.email}
                      handleChange={this.handleChange.bind(this, "email")}
                    />
                  </div>
                </div>
                <div class="modal-footer">
                {<div class="alert alert-success">A password reset link will be emailed to you provided that account with this email exists. </div>}
                {forgetPasswordError && <div className="alert alert-danger">{forgetPasswordError}</div>}
                  <ContainedButtons
                    title="Send Password"
                    onClick={() => this.handleSubmitonClick()}
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
        <div class="modal-backdrop fade show"></div>
      </>
    );
  }
}
const mapStateToProps = ({User: {forgetPasswordError, isLoadingForgetPassword, forgetPasswordStatus}}) => ({forgetPasswordError, isLoadingForgetPassword, forgetPasswordStatus});
export default connect(mapStateToProps, {forgetPassword})(ForgetPassword);
