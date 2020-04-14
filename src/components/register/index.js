import React from "react";
import InputField from "../../views/input-field";
import ContainedButtons from "../../views/contained-buttons";
import {connect} from "react-redux";
import {userSignUp} from "../../actions/user-action-type";

class Register extends React.Component {
  state = {
    email: "",
    password: "",
    first_name: "",
    last_name: "",
    company_email: "",
    transaction_email: "",
    company_name: "",
    bio: "",
    user_image: "",
    fieldValidations: {
      email: false,
      password: false,
      first_name: false,
      last_name: false,
      company_email: false,
      transaction_email: false,
      company_name: false,
      bio: false,
      user_image: false,
    },
  };
  handleChange = (field, e) => {
    const {target} = e;
    const {fieldValidations} = this.state;
    if (
      (field === "email" && !fieldValidations.email) ||
      (field === "password" && !fieldValidations.password) ||
      (field === "first_name" && !fieldValidations.first_name) ||
      (field === "last_name" && !fieldValidations.last_name) ||
      (field === "company_email" && !fieldValidations.company_email) ||
      (field === "transaction_email" && !fieldValidations.transaction_email) ||
      (field === "company_name" && !fieldValidations.company_name) ||
      (field === "bio" && !fieldValidations.bio) ||
      (field === "user_image" && !fieldValidations.user_image)
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
      email,
      password,
      user_image,
      bio,
      company_name,
      transaction_email,
      company_email,
      last_name,
      first_name,
    } = this.state;

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
      this.props.userSignUp({
        email,
        password,
        user_image,
        bio,
        company_name,
        transaction_email,
        company_email,
        last_name,
        first_name,
      });
    } else {
      this.setState({fieldValidations: errorIn});
    }
  };

  render() {
    const {
      action,
      manageLogin,
      userSignUpError,
      userSignUpSuccess,
    } = this.props;
    const {
      email,
      password,
      fieldValidations,
      user_image,
      bio,
      company_name,
      transaction_email,
      company_email,
      last_name,
      first_name,
    } = this.state;
    return (
      <>
        <div id="signupModel" className="modal fade">
          <div className="modal-dialog modal-login">
            <div className="modal-content">
              <form action="/examples/actions/confirmation.php" method="post">
                <div className="modal-header">
                  <h4 className="modal-title">SignUp</h4>
                  <button
                    onClick={(e) => action(e, "registerPopUp")}
                    type="button"
                    className="close"
                    data-dismiss="modal"
                    aria-hidden="true"
                  >
                    &times;
                  </button>
                </div>
                <div
                  className="modal-body"
                  style={{height: "400px", overflow: "scroll"}}
                >
                  <div className="form-group" style={{display: "flex"}}>
                    <InputField
                      label={"First Name"}
                      name="first_name"
                      value={first_name}
                      error={fieldValidations.first_name}
                      handleChange={this.handleChange.bind(this, "first_name")}
                      style={{width: "48%"}}
                    />
                    <InputField
                      label={"Last Name"}
                      name="last_name"
                      value={last_name}
                      error={fieldValidations.last_name}
                      handleChange={this.handleChange.bind(this, "last_name")}
                      style={{width: "48%"}}
                    />
                  </div>
                  <div className="form-group" style={{display: "flex"}}>
                    <InputField
                      label={"Email"}
                      name="email"
                      value={email}
                      error={fieldValidations.email}
                      handleChange={this.handleChange.bind(this, "email")}
                      style={{width: "48%"}}
                    />

                    <InputField
                      label={"Password"}
                      name="password"
                      value={password}
                      error={fieldValidations.password}
                      handleChange={this.handleChange.bind(this, "password")}
                      style={{width: "48%"}}
                      type={"password"}
                    />
                  </div>
                  <div className="form-group" style={{display: "flex"}}>
                    <InputField
                      label={"Transaction Email"}
                      name="transaction_email"
                      value={transaction_email}
                      error={fieldValidations.transaction_email}
                      handleChange={this.handleChange.bind(
                        this,
                        "transaction_email"
                      )}
                      style={{width: "48%"}}
                    />
                    <InputField
                      label={"Company Email"}
                      name="company_email"
                      value={company_email}
                      error={fieldValidations.company_email}
                      handleChange={this.handleChange.bind(
                        this,
                        "company_email"
                      )}
                      style={{width: "48%"}}
                    />
                  </div>
                  <div className="form-group">
                    <InputField
                      label={"Company Name"}
                      name="company_name"
                      value={company_name}
                      error={fieldValidations.company_name}
                      handleChange={this.handleChange.bind(
                        this,
                        "company_name"
                      )}
                    />
                  </div>
                  <div className="form-group">
                    <InputField
                      label={"Bio"}
                      name="bio"
                      value={bio}
                      error={fieldValidations.bio}
                      handleChange={this.handleChange.bind(this, "bio")}
                    />
                  </div>
                  {/* <div className="form-group">
                    <InputField
                      label={"Image"}
                      name="user_image"
                      value={user_image}
                      error={fieldValidations.user_image}
                      handleChange={this.handleChange.bind(this, "user_image")}
                      type={"file"}
                    />
                  </div> */}
                </div>
                <div className="modal-footer">
                  {userSignUpError && (
                    <div className="alert alert-danger">{userSignUpError}</div>
                  )}
                  {userSignUpSuccess && (
                    <div className="alert alert-success">
                      You have successfully registered.{" "}
                      <a
                        href="#"
                        className="pull-right text-muted"
                        onClick={(e) => manageLogin(e)}
                      >
                        Click here to login.
                      </a>{" "}
                    </div>
                  )}
                  <div>
                    <ContainedButtons
                      title="Register"
                      onClick={() => this.handleSubmitonClick()}
                    />
                  </div>
                  <div>
                    Already have account?{" "}
                    <a
                      href="#"
                      className="pull-right text-muted"
                      onClick={(e) => manageLogin(e)}
                    >
                      <small>Login</small>
                    </a>
                  </div>
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
const mapStateToProps = ({
  User: {userSignUpError, isLoadingUserSignUp, userSignUpSuccess},
}) => ({userSignUpError, isLoadingUserSignUp, userSignUpSuccess});
export default connect(mapStateToProps, {userSignUp})(Register);
