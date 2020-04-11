import React from "react";
import InputField from "../../views/input-field";
import ContainedButtons from "../../views/contained-buttons";
import Card from "@material-ui/core/Card";
import TextField from "@material-ui/core/TextField";
import {connect} from "react-redux";
import {addPost} from "../../actions/posts-action-type";

class AddPost extends React.Component {
  state = {
    title: "",
    description: "",
    fieldValidations: {
      title: false,
      description: false,
    },
  };

  handleChange = (field, e) => {
    const {target} = e;
    const {fieldValidations} = this.state;
    if (
      (field === "title" && !fieldValidations.title) ||
      (field === "description" && !fieldValidations.description)
    ) {
      this.setState({
        [field]: target.value,
        fieldValidations: {[field]: false},
      });
    } else {
      this.setState({[field]: target.value});
    }
  };

  handleSubmitonClick = () => {
    const {title, description} = this.state;

    let validation = true;
    let errorIn;
    if (!title) {
      errorIn = {title: true};
      validation = false;
    }
    if (!description) {
      errorIn = {...errorIn, description: true};
      validation = false;
    }

    if (validation) {
      this.props.addPost({
        title,
        description,
      });
    } else {
      this.setState({fieldValidations: errorIn});
    }
  };

  render() {
    const {fieldValidations, description, bio} = this.state;
    const {isLoadingAddPost, addPostError, addPostData} = this.props;
    return (
      <div class="col-lg-9" data-aos="fade-left">
        <div className="container-header">
          <h3>Add Post</h3>
        </div>
        <Card style={{width: "100%", padding: "30px"}}>
          <div class="row">
            <div className="form-group user-profile-form-group-full">
              <InputField
                label={"Title"}
                name="title"
                value={bio}
                error={fieldValidations.bio}
                handleChange={this.handleChange.bind(this, "title")}
              />
            </div>
            <div
              className="form-group user-profile-form-group-full"
              style={{marginLeft: "10px"}}
            >
              <TextField
                id="outlined-multiline-static"
                label="Description"
                multiline
                rows="4"
                defaultValue={description}
                variant="outlined"
                style={{width: "98%"}}
              />
            </div>
            {addPostError && (
              <div className="alert alert-danger">{addPostError}</div>
            )}
            <div className="form-group user-profile-form-group-full">
              <ContainedButtons
                title="Add"
                onClick={() => this.handleSubmitonClick()}
              />
            </div>
          </div>
        </Card>
      </div>
    );
  }
}

const mapStateToProps = ({
  Posts: {isLoadingAddPost, addPostData, addPostError},
}) => ({
  isLoadingAddPost,
  addPostError,
  addPostData,
});
export default connect(mapStateToProps, {addPost})(AddPost);