import React from "react";
import DasnboardCard from "../../views/dashboard-card";
import history from "../../routes/history";
import {fetchUserDashboard} from "../../actions/user-dashboard-action-type";
import {connect} from "react-redux";
import Loader from "../../views/loader";

class UserLanding extends React.Component {
  changeView = (e, link) => {
    e.prevrntDefault(link);
    history.push();
  };
  componentDidMount = () => {
    this.props.fetchUserDashboard();
  };

  render() {
    const {dashboardData, isLoadingDashboard} = this.props;
    return (
      <>
        {isLoadingDashboard ? (
          <div className="col-lg-9 my-posts-user-loader">
            <Loader />
          </div>
        ) : (
          <div className="col-lg-9" data-aos="fade-left">
            <div className="row landing-card">
              <DasnboardCard
                title="Total Earning"
                other="40 USD"
                icon="bx bx-map"
                color="#ef9a9a"
              />
              <DasnboardCard
                title="Total Referral"
                other="0"
                icon="bx bx-map"
                color="#CE93D8"
              />
              <DasnboardCard
                title="Total Post"
                other="32"
                icon="bx bx-phone"
                color="#90CAF9"
              />
            </div>
            <div className="row landing-card landing-card-two">
              <DasnboardCard
                title="Total Earning"
                other="40 USD"
                icon="bx bx-map"
                color="#80CBC4"
              />
              <DasnboardCard
                title="Total Referral"
                other="0"
                icon="bx bx-map"
                color="#FFF59D"
              />
              <DasnboardCard
                title="Total Post"
                other="32"
                icon="bx bx-phone"
                color="#BCAAA4"
              />
            </div>
          </div>
        )}
      </>
    );
  }
}
const mapStateToProps = ({Dashboard: {dashboardData, isLoadingDashboard}}) => ({
  dashboardData,
  isLoadingDashboard,
});
export default connect(mapStateToProps, {fetchUserDashboard})(UserLanding);
