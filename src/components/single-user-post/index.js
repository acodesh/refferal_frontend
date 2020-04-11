import React from "react";
import Header from "../../views/header";
import Footer from "../../views/footer";
import Register from "../register";
import Login from "../login";
import ForgetPassword from "../forget-password";
import Single from "../../views/blog/single";
import {connect} from "react-redux";
import {fetchSingleUserPost} from "../../actions/posts-action-type";

class SingleUserPost extends React.Component {
  render() {
    const {
      isLoadingSingleUserPost,
      singleUserPostError,
      singleUserPostData,
    } = this.props;
    return (
      <>
        <div class="col-lg-9" data-aos="fade-left">
          <div class="row">
            <Single
              isLoadingSingleUserPost={isLoadingSingleUserPost}
              singleUserPostError={singleUserPostError}
              singleUserPostData={singleUserPostData}
              sidebar={false}
            />
          </div>
        </div>
      </>
    );
  }
}

const mapStateToProps = ({
  Posts: {isLoadingSingleUserPost, singleUserPostData, singleUserPostError},
}) => ({
  isLoadingSingleUserPost,
  singleUserPostError,
  singleUserPostData,
});
export default connect(mapStateToProps, {fetchSingleUserPost})(SingleUserPost);
