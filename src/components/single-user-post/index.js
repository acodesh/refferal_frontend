import React from "react";

import Single from "../../views/blog/single";
import {connect} from "react-redux";
import {fetchSingleUserPost} from "../../actions/posts-action-type";

class SingleUserPost extends React.Component {
  componentDidMount = () => {
    this.props.fetchSingleUserPost();
  };
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
              isLoading={isLoadingSingleUserPost}
              error={singleUserPostError}
              postData={singleUserPostData}
              sidebarDisplay={false}
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
