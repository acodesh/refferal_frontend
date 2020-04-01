import React from "react";
import InputField from "../../views/input-field";
import ContainedButtons from "../../views/contained-buttons";

class Register extends React.Component {
  state = {
    username: "",
    password: "",
    fieldValidations: {
      username: false,
      password: false
    }
  };
  handleChange = (field, e) => {
    const {target} = e;
    const {fieldValidations} = this.state;
    if (
      (field === "username" && !fieldValidations.username) ||
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
    const {username, password} = this.state;

    let validation = true;
    let errorIn;
    if (!username) {
      errorIn = {username: true};
      validation = false;
    }
    if (!password) {
      errorIn = {...errorIn, password: true};
      validation = false;
    }

    if (validation) {
      // this.props.addBook({
      //   name,
      //   password
      // });
    } else {
      this.setState({fieldValidations: errorIn});
    }
  };

  render() {
    const {action} = this.props;
    const {username, password, fieldValidations} = this.state;
    return (
      <>
        <div id="signupModel" className="modal fade">
          <div className="modal-dialog modal-login">
            <div className="modal-content">
              <form action="/examples/actions/confirmation.php" method="post">
                <div className="modal-header">
                  <h4 className="modal-title">SignUp</h4>
                  <button
                    onClick={() => action("registerPopUp")}
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
                      name="username"
                      value={username}
                      error={fieldValidations.username}
                      handleChange={this.handleChange.bind(this, "username")}
                    />
                  </div>
                  <div className="form-group">
                    <div className="clearfix"></div>

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
                  <ContainedButtons
                    title="Register"
                    onClick={() => this.handleSubmitonClick()}
                  />
                </div>
                Already have account?{" "}
                <a href="#" className="pull-right text-muted">
                  <small>Login</small>
                </a>
              </form>
            </div>
          </div>
        </div>
        <div class="modal-backdrop fade show"></div>
      </>
    );
  }
}

export default Register;
