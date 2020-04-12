import React from "react";
import Header from "../../views/header";
import Footer from "../../views/footer";
import Register from "../../components/register";
import Login from "../../components/login";
import ForgetPassword from "../../components/forget-password";
import SearchUser from "../../views/blog/search-user";
import {searchAction} from "../../actions/search-action-type";
import {connect} from "react-redux";
import {withRouter} from "react-router";

class Search extends React.Component {
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

  componentDidMount = () => {
    const {search} = this.props.match.params;

    this.props.searchAction(search);
  };

  render() {
    const {registerPopUp, loginPopUp, forgetPasswordPopUp} = this.state;
    const {isLoadingSearch, searchdData, searchError} = this.props;
    const {search} = this.props.match.params;
    return (
      <>
        <Header action={this.togglePopup} />
        <div className="container container-posts">
          <SearchUser
            data={searchdData}
            isLoading={isLoadingSearch}
            title={search ? `Search: ${search}` : "Top-rated Professionals"}
          />
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

const mapStateToProps = ({
  Search: {isLoadingSearch, searchdData, searchError},
}) => ({
  isLoadingSearch,
  searchError,
  searchdData,
});
export default withRouter(connect(mapStateToProps, {searchAction})(Search));
