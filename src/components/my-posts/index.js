import React from "react";
import Table from "../../views/table";
import {connect} from "react-redux";
import {fetchUserPost} from "../../actions/posts-action-type";
import Loader from "../../views/loader";

class MyPosts extends React.Component {
  componentDidMount = () => {
    this.props.fetchUserPost();
  };
  render() {
    const {isLoadingUserPosts, postsUserError, postsUserData} = this.props;
    return (
      <>
        <div class="col-lg-9" data-aos="fade-left">
          <div class="row">
            {isLoadingUserPosts ? (
              <div className="my-posts-user-loader">
                <Loader />
              </div>
            ) : (
              <Table title={"My Posts"} />
            )}
          </div>
        </div>
      </>
    );
  }
}

const mapStateToProps = ({
  Posts: {isLoadingUserPosts, postsUserData, postsUserError},
}) => ({
  isLoadingUserPosts,
  postsUserError,
  postsUserData,
});
export default connect(mapStateToProps, {fetchUserPost})(MyPosts);
