import React from "react";
import InputField from "../../views/input-field";
import ContainedButtons from "../../views/contained-buttons";
import {connect} from "react-redux";
import {loginUser} from "../../actions/user-action-type";

class Login extends React.Component {
  state = {
    email: "",
    password: "",
    fieldValidations: {
      email: false,
      password: false
    }
  };
  handleChange = (field, e) => {
    const {target} = e;
    const {fieldValidations} = this.state;
    if (
      (field === "email" && !fieldValidations.email) ||
      (field === "password" && !fieldValidations.password)
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
    const {email, password} = this.state;

    let validation = true;
    let errorIn;
    if (!email) {
      errorIn = {email: true};
      validation = false;
    }
    if (!password) {
      errorIn = {...errorIn, password: true};
      validation = false;
    }

    if (validation) {
       this.props.loginUser({
         email,
         password
       });
    } else {
      this.setState({fieldValidations: errorIn});
    }
  };

  render() {
    const {action, manageForgetPassword, userLoginError} = this.props;

    const {email, password, fieldValidations} = this.state;

    return (
      <>
        <div id="myModal" className="modal fade">
          <div className="modal-dialog modal-login">
            <div className="modal-content">
                <div className="modal-header">
                  <h4 className="modal-title">Login</h4>
                  <button
                    onClick={(e) => action(e, "loginPopUp")}
                    type="button"
                    className="close"
                    data-dismiss="modal"
                    aria-hidden="true"
                  >
                    &times;
                  </button>
                </div>
                <div className="modal-body">
                  <div className="form-group">
                    <InputField
                      label={"Username"}
                      name="email"
                      value={email}
                      error={fieldValidations.email}
                      handleChange={this.handleChange.bind(this, "email")}
                    />
                  </div>
                  <div className="form-group">
                    <div className="clearfix">
                      <a href="#" className="pull-right text-muted" onClick={(e) => manageForgetPassword(e)}>
                        <small>Forgot?</small>
                      </a>
                    </div>

                    <InputField
                      label={"Password"}
                      name="password"
                      value={password}
                      error={fieldValidations.password}
                      handleChange={this.handleChange.bind(this, "password")}
                    />
                  </div>
                </div>
                <div className="modal-footer">
                {userLoginError && <div className="alert alert-danger">{userLoginError}</div>}
                  <label className="checkbox-inline pull-left">
                    <input type="checkbox" /> Remember me
                  </label>
                  <ContainedButtons
                    title="Login"
                    onClick={() => this.handleSubmitonClick()}
                  />
                </div>
            </div>
          </div>
        </div>
        <div className="modal-backdrop fade show"></div>
      </>
    );
  }
}

const mapStateToProps = ({User: {userLoginError, isLoadingUserLogin}}) => ({userLoginError, isLoadingUserLogin});
export default connect(mapStateToProps, {loginUser})(Login);
