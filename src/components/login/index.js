import React from "react";
import InputField from "../../views/input-field";
import ContainedButtons from "../../views/contained-buttons";

class Login extends React.Component {
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
        <div id="myModal" class="modal fade">
          <div class="modal-dialog modal-login">
            <div class="modal-content">
              <form action="/examples/actions/confirmation.php" method="post">
                <div class="modal-header">
                  <h4 class="modal-title">Login</h4>
                  <button
                    onClick={() => action("loginPopUp")}
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
                      label={"Username"}
                      name="username"
                      value={username}
                      error={fieldValidations.username}
                      handleChange={this.handleChange.bind(this, "username")}
                    />
                  </div>
                  <div class="form-group">
                    <div class="clearfix">
                      <a href="#" class="pull-right text-muted">
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
                <div class="modal-footer">
                  <label class="checkbox-inline pull-left">
                    <input type="checkbox" /> Remember me
                  </label>
                  <ContainedButtons
                    title="Login"
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

export default Login;
