import React from "react";
import Header from "../../views/header";
import SubSection from "../../views/sub-section";
import Footer from "../../views/footer";
import MainSection from "../../views/main-section";
import Register from "../../components/register";
import Login from "../../components/login";
import ForgetPassword from "../../components/forget-password";

class Landing extends React.Component {
  state = {
    registerPopUp: false,
    loginPopUp: false,
    forgetPasswordPopUp: false
  };

  togglePopup = (e,popupType) => {
    e.preventDefault();
    this.setState({[popupType]: !this.state[popupType]});
  };

  openforgetpasswordpopup =(e) => {
    e.preventDefault(); 
    this.setState({forgetPasswordPopUp: true, loginPopUp: false});
  };

  openloginpopup =(e) => {
    e.preventDefault(); 
    this.setState({loginPopUp: true, registerPopUp: false});
  };

  render() {
    const {registerPopUp, loginPopUp, forgetPasswordPopUp} = this.state;
    return (
      <>
        <Header action={this.togglePopup} />
        <SubSection />
        <MainSection />
        <Footer />
        {registerPopUp && <Register action={this.togglePopup} manageLogin={this.openloginpopup}/>}
        {loginPopUp && <Login action={this.togglePopup} manageForgetPassword={this.openforgetpasswordpopup}/>}
        {forgetPasswordPopUp && <ForgetPassword action={this.togglePopup} />}
      </>
    );
  }
}

export default Landing;
