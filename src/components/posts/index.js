import React from "react";
import Header from "../../views/header";
import Footer from "../../views/footer";
import Register from "../../components/register";
import Login from "../../components/login";
import ForgetPassword from "../../components/forget-password";
import Blog from "../../views/blog";
import {fetchPost} from "../../actions/posts-action-type";
import {connect} from "react-redux";

class Posts extends React.Component {
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
    this.props.fetchPost();
  };

  render() {
    const {registerPopUp, loginPopUp, forgetPasswordPopUp} = this.state;
    const {isLoadingPosts, postsData} = this.props;

    return (
      <>
        <Header action={this.togglePopup} />
        <div className="container container-posts">
          <Blog data={postsData} isLoading={isLoadingPosts} />
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

const mapStateToProps = ({Posts: {isLoadingPosts, postsData, postsError}}) => ({
  isLoadingPosts,
  postsError,
  postsData,
});
export default connect(mapStateToProps, {fetchPost})(Posts);
