import React from "react";
import InputField from "../../views/input-field";
import ContainedButtons from "../../views/contained-buttons";
import Card from "@material-ui/core/Card";
import TextField from "@material-ui/core/TextField";
import {connect} from "react-redux";
import {addPost} from "../../actions/posts-action-type";
import SimpleSelect from "../../views/simple-select";
import DatePicker from "../../views/date-picker";

class AddPost extends React.Component {
  state = {
    title: "",
    description: "",
    desired_company: "",
    post_anonymously: "",
    number_of_professional: "",
    pay_per_person: "",
    dead_line: new Date("2014-08-18T21:11:54"),
    fieldValidations: {
      title: false,
      description: false,
      desired_company: false,
      post_anonymously: false,
      number_of_professional: false,
      pay_per_person: false,
      dead_line: false,
    },
  };

  handleChange = (field, e) => {
    const {target} = e;
    console.log("asdasdas");
    const {fieldValidations} = this.state;
    if (
      (field === "title" && !fieldValidations.title) ||
      (field === "description" && !fieldValidations.description)
    ) {
      this.setState({
        [field]: target.value,
        fieldValidations: {[field]: false},
      });
    } else if (field === "dead_line") {
      this.setState({[field]: e});
    } else {
      this.setState({[field]: target.value});
    }
  };

  handleSubmitonClick = () => {
    const {
      title,
      description,
      desired_company,
      post_anonymously,
      number_of_professional,
      pay_per_person,
      dead_line,
    } = this.state;

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
        desired_company,
        post_anonymously,
        number_of_professional,
        pay_per_person,
        dead_line,
      });
    } else {
      this.setState({fieldValidations: errorIn});
    }
  };

  render() {
    const {
      fieldValidations,
      description,
      title,
      desired_company,
      post_anonymously,
      number_of_professional,
      pay_per_person,
      dead_line,
    } = this.state;
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
                value={title}
                error={fieldValidations.title}
                handleChange={this.handleChange.bind(this, "title")}
              />
            </div>
            <div className="form-group user-profile-form-group-full">
              <InputField
                label={"Desired Company"}
                name="desired_company"
                value={desired_company}
                error={fieldValidations.desired_company}
                handleChange={this.handleChange.bind(this, "desired_company")}
              />
            </div>
            <div className="form-group user-profile-form-group-full">
              <SimpleSelect
                title={"Post Anonymously"}
                name="post_anonymously"
                value={post_anonymously}
                error={fieldValidations.post_anonymously}
                handleChange={this.handleChange.bind(this, "post_anonymously")}
                options={[
                  {key: 1, value: "Yes"},
                  {key: 2, value: "No"},
                ]}
              />
            </div>
            <div className="form-group user-profile-form-group-full">
              <InputField
                type={"number"}
                label={"Number of Professional"}
                name="number_of_professional"
                value={number_of_professional}
                error={fieldValidations.number_of_professional}
                handleChange={this.handleChange.bind(
                  this,
                  "number_of_professional"
                )}
              />
            </div>
            <div className="form-group user-profile-form-group-full">
              <SimpleSelect
                title={"Pay Per Person"}
                name="pay_per_person"
                value={pay_per_person}
                error={fieldValidations.pay_per_person}
                handleChange={this.handleChange.bind(this, "pay_per_person")}
                options={[
                  {key: 1, value: "Yes"},
                  {key: 2, value: "No"},
                ]}
              />
            </div>
            <div className="form-group user-profile-form-group-full">
              <DatePicker
                title={"Dead Line"}
                name="dead_line"
                value={dead_line}
                error={fieldValidations.dead_line}
                handleChange={this.handleChange.bind(this, "dead_line")}
              />
            </div>
            <div
              className="form-group user-profile-form-group-full"
              style={{marginLeft: "10px"}}
            >
              <TextField
                id="outlined-multiline-static"
                label="Description"
                name="description"
                multiline
                rows="4"
                defaultValue={description}
                variant="outlined"
                style={{width: "98%"}}
                onChange={this.handleChange.bind(this, "description")}
              />
            </div>
            {addPostError && (
              <div className="alert alert-danger">{addPostError}</div>
            )}
            <div className="form-group user-profile-form-group-full">
              <ContainedButtons
                title="Add"
                onClick={() => this.handleSubmitonClick()}
                loader={isLoadingAddPost}
                disabled={isLoadingAddPost}
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
