import React from "react";

class Register extends React.Component {
  render() {
    return (
      <>
        <div id="signupModel" class="modal fade">
          <div class="modal-dialog modal-login">
            <div class="modal-content">
              <form action="/examples/actions/confirmation.php" method="post">
                <div class="modal-header">
                  <h4 class="modal-title">SignUp</h4>
                  <button
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
                    </div>

                    <input
                      type="password"
                      class="form-control"
                      required="required"
                    />
                  </div>
                </div>
                <div class="modal-footer">
                  <input
                    type="submit"
                    class="btn btn-primary pull-right"
                    value="Login"
                  />
                </div>
                Already have account?{" "}
                <a href="#" class="pull-right text-muted">
                  <small>Login</small>
                </a>
              </form>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Register;
