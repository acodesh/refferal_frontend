import React from "react";
import Header from "../../views/header";
import SubSection from "../../views/sub-section";
import Footer from "../../views/footer";
import MainSection from "../../views/main-section";
import Register from "../../components/register";
import Login from "../../components/login";

class Dashboard extends React.Component {
  state = {
    registerPopUp: false,
    loginPopUp: false
  };
  togglePopup = popupType => {
    this.setState({[popupType]: !this.state[popupType]});
  };
  render() {
    const {registerPopUp, loginPopUp} = this.state;
    return (
      <>
        <Header action={this.togglePopup} />
        <SubSection />
        <MainSection />
        <Footer />
        {registerPopUp && <Register action={this.togglePopup} />}
        {loginPopUp && <Login action={this.togglePopup} />}
      </>
    );
  }
}

export default Dashboard;
