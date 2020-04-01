import React from "react";
import Header from "../../views/header";
import SubSection from "../../views/sub-section";
import Footer from "../../views/footer";
import MainSection from "../../views/main-section";

class Dashboard extends React.Component {
  render() {
    return (
      <>
        <Header />
        <SubSection />
        <MainSection />
        <Footer />
      </>
    );
  }
}

export default Dashboard;
