import React from "react";
import Header from "../../views/header";
import Footer from "../../views/footer";
import history from '../../routes/history';
import DashboardIcon from '@material-ui/icons/Dashboard';
import PersonIcon from '@material-ui/icons/Person';
import PostAddIcon from '@material-ui/icons/PostAdd';
import GroupAddIcon from '@material-ui/icons/GroupAdd';
import MonetizationOnIcon from '@material-ui/icons/MonetizationOn';

class Dashboard extends React.Component {
  constructor(props){
    super(props);
    let url = window.location.href.replace("http://", "").replace("https://", "").split("/");
    let activeNav = "dashboard";
    if(url.length > 2) {
      activeNav = url[2].replace("-", "");
    }
    this.state = {
      activeNav: activeNav
    }
  }
  
  changeView = (e, link) => {
    e.preventDefault();
    let url = link.split("/");
    let activeNav = "dashboard";
    if(url.length > 2) {
      activeNav = url[2].replace("-", "");
    }
    this.setState({activeNav: activeNav})
    history.push(link);
  }

  render() {
    const { children } = this.props;
    const { activeNav } = this.state;
    
    return (
      <>
        <Header />
          <main id="main" style={{marginTop: "100px"}}>
            <div className="container container-dashboard">
              <div className="row">
                <div className="col-lg-3" data-aos="fade-up">
                    <div>
                        <ul className="leftnav">
                        <li>
                          <DashboardIcon style={{color: activeNav == "dashboard" ? "rgb(0, 156, 234)" : "rgba(0, 0, 0, 0.54)"}}/>{" "}
                          <a  style={{color: activeNav == "dashboard" ? "rgb(0, 156, 234)" : "rgba(0, 0, 0, 0.54)"} } href="" onClick={(e)=> this.changeView(e, '/user/dashboard')}>Dashboard</a></li>
                        <li><PersonIcon style={{color: activeNav == "myprofile" ? "rgb(0, 156, 234)" : "rgba(0, 0, 0, 0.54)"} }/> {" "}<a  style={{color: activeNav == "myprofile" ? "rgb(0, 156, 234)" : "rgba(0, 0, 0, 0.54)"} } href="" onClick={(e)=> this.changeView(e, '/user/my-profile')}>My Profile</a></li>
                        <li><PostAddIcon style={{color: activeNav == "myposts" ? "rgb(0, 156, 234)" : "rgba(0, 0, 0, 0.54)"} }/> {" "}<a  style={{color: activeNav == "myposts" ? "rgb(0, 156, 234)" : "rgba(0, 0, 0, 0.54)"} } href="" onClick={(e)=> this.changeView(e, '/user/my-posts')}>My Posts</a></li>
                        <li><GroupAddIcon style={{color: activeNav == "myreferrals" ? "rgb(0, 156, 234)" : "rgba(0, 0, 0, 0.54)"} }/> {" "}<a  style={{color: activeNav == "myreferrals" ? "rgb(0, 156, 234)" : "rgba(0, 0, 0, 0.54)"} } href="" onClick={(e)=> this.changeView(e, '/user/my-referrals')}>My Referrals</a></li>
                        <li><MonetizationOnIcon style={{color: activeNav == "mypayment" ? "rgb(0, 156, 234)" : "rgba(0, 0, 0, 0.54)"} }/> {" "}<a  style={{color: activeNav == "mypayment" ? "rgb(0, 156, 234)" : "rgba(0, 0, 0, 0.54)"} } href="" onClick={(e)=> this.changeView(e, '/user/my-payment')}>My Payment</a></li>
                        </ul>
                    </div>
                </div>
                { children }
              </div>
          </div>
        </main>
        <Footer />
      </>
    );
  }
}

export default Dashboard;
