import React from "react";
import InputField from "../../views/input-field";
import ContainedButtons from "../../views/contained-buttons";
import {connect} from "react-redux";
import Card from "@material-ui/core/Card";
import {updateUserData, getUserDetails} from "../../actions/user-action-type";
import Loader from "../../views/loader";
import TextField from "@material-ui/core/TextField";
class MyProfile extends React.Component {
  state = {
    email: "",
    first_name: "",
    last_name: "",
    company_email: "",
    transaction_email: "",
    company_name: "",
    bio: "",
    user_image: "",
    anonymous_name: "",
    linkedin_url: "",
    propLoaded: false,
    fieldValidations: {
      email: false,
      first_name: false,
      last_name: false,
      company_email: false,
      transaction_email: false,
      company_name: false,
      bio: false,
      user_image: false,
      anonymous_name: false,
      linkedin_url: false,
    },
  };

  componentDidMount = () => {
    this.props.getUserDetails();
  };

  static getDerivedStateFromProps(props, state) {
    console.log("bio", props.userData);
    console.log("asdasd", state);
    if (Object.keys(props.userData).length === 0) return null;

    if (
      (props.userData.email !== state.email ||
        props.userData.first_name !== state.first_name ||
        props.userData.last_name !== state.last_name ||
        props.userData.company_email !== state.company_email ||
        props.userData.transaction_email !== state.transaction_email ||
        props.userData.company_name !== state.company_name ||
        props.userData.bio !== state.bio ||
        props.userData.anonymous_name !== state.anonymous_name ||
        props.userData.linkedin_url !== state.linkedin_url) &&
      !state.propLoaded
    ) {
      return {
        ...props.userData,
        propLoaded: true,
      };
    }
    return null;
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.props.selected !== prevProps.selected) {
      this.selectNew();
    }
  }

  handleChange = (field, e) => {
    const {target} = e;
    const {fieldValidations} = this.state;

    console.log("bio", target.value);
    if (
      (field === "email" && !fieldValidations.email) ||
      (field === "first_name" && !fieldValidations.first_name) ||
      (field === "last_name" && !fieldValidations.last_name) ||
      (field === "company_email" && !fieldValidations.company_email) ||
      (field === "transaction_email" && !fieldValidations.transaction_email) ||
      (field === "company_name" && !fieldValidations.company_name) ||
      (field === "bio" && !fieldValidations.bio) ||
      (field === "user_image" && !fieldValidations.user_image) ||
      (field === "anonymous_name" && !fieldValidations.anonymous_name) ||
      (field === "linkedin_url" && !fieldValidations.linkedin_url)
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
    const {
      email,
      user_image,
      bio,
      company_name,
      transaction_email,
      company_email,
      last_name,
      first_name,
      anonymous_name,
      linkedin_url,
    } = this.state;

    let validation = true;
    let errorIn;
    if (!email) {
      errorIn = {email: true};
      validation = false;
    }

    if (validation) {
      this.props.updateUserData({
        email,
        user_image,
        bio,
        company_name,
        transaction_email,
        company_email,
        last_name,
        first_name,
        anonymous_name,
        linkedin_url,
      });
    } else {
      this.setState({fieldValidations: errorIn});
    }
  };

  render() {
    const {
      email,
      fieldValidations,
      user_image,
      bio,
      company_name,
      transaction_email,
      company_email,
      last_name,
      first_name,
      anonymous_name,
      linkedin_url,
    } = this.state;

    const {
      isLoadingUpdateUser,
      isLoadingUserDetails,
      userData,
      userError,
      updateError,
      updateSuccess,
    } = this.props;

    return (
      <div class="col-lg-9" data-aos="fade-left">
        <Card style={{width: "100%", padding: "30px"}}>
          <div class="row">
            {isLoadingUserDetails ? (
              <div className="my-posts-user-loader">
                <Loader />
              </div>
            ) : Object.keys(userData).length !== 0 ? (
              <>
                {/*<div class="form-group user-profile-form-group">
                  <label for="exampleInputEmail1">Profile Image</label>
                   <img
                    class="profileimage"
                    src="https://thumbs.dreamstime.com/b/creative-illustration-default-avatar-profile-placeholder-isolated-background-art-design-grey-photo-blank-template-mockup-144855718.jpg"
                  />
                </div>
                <div class="form-group user-profile-form-group">
                  <InputField
                    label={"Image"}
                    name="user_image"
                    value={user_image}
                    error={fieldValidations.user_image}
                    handleChange={this.handleChange.bind(this, "user_image")}
                    type={"file"}
                  />
                </div> */}
                <div className="form-group user-profile-form-group">
                  <InputField
                    label={"Anonymous Name"}
                    name="anonymous_name"
                    value={anonymous_name}
                    error={fieldValidations.anonymous_name}
                    handleChange={this.handleChange.bind(
                      this,
                      "anonymous_name"
                    )}
                  />
                </div>
                <div className="form-group user-profile-form-group">
                  <InputField
                    label={"First Name"}
                    name="first_name"
                    value={first_name}
                    error={fieldValidations.first_name}
                    handleChange={this.handleChange.bind(this, "first_name")}
                  />
                </div>
                <div className="form-group user-profile-form-group">
                  <InputField
                    label={"Last Name"}
                    name="last_name"
                    value={last_name}
                    error={fieldValidations.last_name}
                    handleChange={this.handleChange.bind(this, "last_name")}
                  />
                </div>
                <div className="form-group user-profile-form-group">
                  <InputField
                    label={"Email"}
                    name="email"
                    value={email}
                    error={fieldValidations.email}
                    handleChange={this.handleChange.bind(this, "email")}
                  />
                  <small id="emailHelp" className="form-text text-muted">
                    We'll never share your email with anyone else.
                  </small>
                </div>
                <div className="form-group user-profile-form-group">
                  <InputField
                    label={"Transaction Email"}
                    name="transaction_email"
                    value={transaction_email}
                    error={fieldValidations.transaction_email}
                    handleChange={this.handleChange.bind(
                      this,
                      "transaction_email"
                    )}
                  />
                </div>
                <div className="form-group user-profile-form-group">
                  <InputField
                    label={"Company Email"}
                    name="company_email"
                    value={company_email}
                    error={fieldValidations.company_email}
                    handleChange={this.handleChange.bind(this, "company_email")}
                  />
                </div>
                <div className="form-group  user-profile-form-group">
                  <InputField
                    label={"Company Name"}
                    name="company_name"
                    value={company_name}
                    error={fieldValidations.company_name}
                    handleChange={this.handleChange.bind(this, "company_name")}
                  />
                </div>
                <div className="form-group  user-profile-form-group">
                  <InputField
                    label={"LinkedIn URL"}
                    name="linkedin_url"
                    value={linkedin_url}
                    error={fieldValidations.linkedin_url}
                    handleChange={this.handleChange.bind(this, "linkedin_url")}
                  />
                </div>
                <div className="form-group user-profile-form-group-full">
                  {/* <InputField
                    label={"Bio"}
                    name="bio"
                    value={bio}
                    error={fieldValidations.bio}
                    handleChange={this.handleChange.bind(this, "bio")}
                  /> */}
                  <TextField
                    id="outlined-multiline-static"
                    label="Bio"
                    name="bio"
                    multiline
                    rows="4"
                    defaultValue={bio}
                    variant="outlined"
                    style={{width: "98%"}}
                    onChange={(e) => this.handleChange("bio", e)}
                  />
                </div>

                <div className="form-group user-profile-form-group-full">
                  <ContainedButtons
                    title="Save"
                    onClick={() => this.handleSubmitonClick()}
                    loader={isLoadingUpdateUser}
                    disabled={isLoadingUpdateUser}
                  />
                </div>
                {updateError && (
                  <div className="form-group user-profile-form-group-full alert alert-danger">
                    {updateError}
                  </div>
                )}

                {updateSuccess && (
                  <div className="form-group user-profile-form-group-full alert alert-success">
                    {updateSuccess}
                  </div>
                )}
              </>
            ) : (
              <div className="form-group user-profile-form-group alert alert-danger">
                Server is not responding, please try again.
              </div>
            )}
          </div>
        </Card>
      </div>
    );
  }
}

const mapStateToProps = ({
  User: {
    isLoadingUpdateUser,
    isLoadingUserDetails,
    userData,
    userError,
    updateError,
    updateSuccess,
  },
}) => ({
  isLoadingUpdateUser,
  isLoadingUserDetails,
  userData,
  userError,
  updateError,
  updateSuccess,
});
export default connect(mapStateToProps, {updateUserData, getUserDetails})(
  MyProfile
);
