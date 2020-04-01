import React from "react";

class Register extends React.Component {
  render() {
    const {action} = this.props;
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
                    <label>Username</label>
                    <input
                      type="text"
                      className="form-control"
                      required="required"
                    />
                  </div>
                  <div className="form-group">
                    <div className="clearfix">
                      <label>Password</label>
                    </div>

                    <input
                      type="password"
                      className="form-control"
                      required="required"
                    />
                  </div>
                </div>
                <div className="modal-footer">
                  <input
                    type="submit"
                    className="btn btn-primary pull-right"
                    value="Login"
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
