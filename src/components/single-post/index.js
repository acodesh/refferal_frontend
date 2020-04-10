import React from "react";
import Header from "../../views/header";
import Footer from "../../views/footer";
import Register from "../register";
import Login from "../login";
import ForgetPassword from "../forget-password";
import Single from "../../views/blog/single";

class SinglePost extends React.Component {
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
    return (
      <>
        <Header action={this.togglePopup} />
        <div className="container container-posts">
          <Single />
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

export default SinglePost;
