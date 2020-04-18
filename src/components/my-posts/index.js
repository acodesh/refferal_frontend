import React from "react";
import Table from "../../views/table";
import {connect} from "react-redux";
import {fetchUserPost} from "../../actions/posts-action-type";
import Loader from "../../views/loader";

const columns = [
  {title: "Name", field: "name"},
  {title: "Surname", field: "surname"},
  {title: "Birth Year", field: "birthYear", type: "numeric"},
  {
    title: "Birth Place",
    field: "birthCity",
    lookup: {34: "İstanbul", 63: "Şanlıurfa"},
  },
];
const data = [
  {name: "Mehmet", surname: "Baran", birthYear: 1987, birthCity: 63},
  {
    name: "Zerya Betül",
    surname: "Baran",
    birthYear: 2017,
    birthCity: 34,
  },
];

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
              <Table
                title={"My Posts"}
                type={"posts"}
                data={data}
                columns={columns}
              />
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
