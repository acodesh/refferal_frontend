import React from "react";
import Header from "../../views/header";
import Footer from "../../views/footer";
import Register from "../../components/register";
import Login from "../../components/login";
import ForgetPassword from "../../components/forget-password";
import RequestPost from "../../views/blog/request-post";

import {withRouter} from "react-router";

class Request extends React.Component {
  state = {
    registerPopUp: false,
    loginPopUp: false,
    forgetPasswordPopUp: false,
  };

  togglePopup = (e, popupType) => {
    e.preventDefault();
    this.setState({[popupType]: !this.state[popupType]});
  };

  openforgetpasswordpopup = (e) => {
    e.preventDefault();
    this.setState({forgetPasswordPopUp: true, loginPopUp: false});
  };

  openloginpopup = (e) => {
    e.preventDefault();
    this.setState({loginPopUp: true, registerPopUp: false});
  };

  render() {
    const {registerPopUp, loginPopUp, forgetPasswordPopUp} = this.state;
    const {user_id} = this.props.match.params;
    return (
      <>
        <Header action={this.togglePopup} />
        <div className="container container-posts">
          <RequestPost user_id={user_id} />
        </div>
        <Footer />
        {registerPopUp && (
          <Register
            action={this.togglePopup}
            manageLogin={this.openloginpopup}
          />
        )}
        {loginPopUp && (
          <Login
            action={this.togglePopup}
            manageForgetPassword={this.openforgetpasswordpopup}
          />
        )}
        {forgetPasswordPopUp && <ForgetPassword action={this.togglePopup} />}
      </>
    );
  }
}

export default withRouter(Request);
