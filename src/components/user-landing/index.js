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
            <div className="row">
                <DasnboardCard title="Total Earning" other="40 USD" icon="bx bx-map"/>
                <DasnboardCard title="Total Referral" other="0" icon="bx bx-map"/>
                <DasnboardCard title="Total Post" other="32" icon="bx bx-phone"/>
            </div>
            <div className="row">
                <DasnboardCard title="Total Earning" other="40 USD" icon="bx bx-map"/>
                <DasnboardCard title="Total Referral" other="0" icon="bx bx-map"/>
                <DasnboardCard title="Total Post" other="32" icon="bx bx-phone"/>
            
            </div>
        </div>
      </>
    );
  }
}

export default UserLanding;
