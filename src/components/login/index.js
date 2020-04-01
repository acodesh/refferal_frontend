import React from "react";

class Login extends React.Component {
  render() {
    const {action} = this.props;
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
                    <label>Username</label>
                    <input
                      type="text"
                      class="form-control"
                      required="required"
                    />
                  </div>
                  <div class="form-group">
                    <div class="clearfix">
                      <label>Password</label>
                      <a href="#" class="pull-right text-muted">
                        <small>Forgot?</small>
                      </a>
                    </div>

                    <input
                      type="password"
                      class="form-control"
                      required="required"
                    />
                  </div>
                </div>
                <div class="modal-footer">
                  <label class="checkbox-inline pull-left">
                    <input type="checkbox" /> Remember me
                  </label>
                  <input
                    type="submit"
                    class="btn btn-primary pull-right"
                    value="Login"
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
