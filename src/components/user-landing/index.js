import React from "react";
import DasnboardCard from "../../views/dashboard-card";
import history from '../../routes/history';

class UserLanding extends React.Component {
    changeView = (e, link) => {
        e.prevrntDefault(link);
        history.push();
    }

  render() {
    return (
      <>
        <div className="col-lg-9" data-aos="fade-left">
            <div className="row landing-card">
                <DasnboardCard title="Total Earning" other="40 USD" icon="bx bx-map" color="#ef9a9a"/>
                <DasnboardCard title="Total Referral" other="0" icon="bx bx-map" color="#CE93D8"/>
                <DasnboardCard title="Total Post" other="32" icon="bx bx-phone" color="#90CAF9"/>
            </div>
            <div className="row landing-card landing-card-two">
                <DasnboardCard title="Total Earning" other="40 USD" icon="bx bx-map" color="#80CBC4"/>
                <DasnboardCard title="Total Referral" other="0" icon="bx bx-map" color="#FFF59D"/>
                <DasnboardCard title="Total Post" other="32" icon="bx bx-phone" color="#BCAAA4"/>
            
            </div>
        </div>
      </>
    );
  }
}

export default UserLanding;
