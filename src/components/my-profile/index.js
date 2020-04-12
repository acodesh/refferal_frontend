import React from "react";
import InputField from "../../views/input-field";
import ContainedButtons from "../../views/contained-buttons";
import {connect} from "react-redux";
import Card from "@material-ui/core/Card";
import {updateUserData, getUserDetails} from "../../actions/user-action-type";
import Loader from "../../views/loader";

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
    fieldValidations: {
      email: false,
      first_name: false,
      last_name: false,
      company_email: false,
      transaction_email: false,
      company_name: false,
      bio: false,
      user_image: false,
    },
  };

  componentDidMount = () => {
    this.props.getUserDetails();
  };

  static getDerivedStateFromProps(props, state) {
    if (Object.keys(props.userData).length === 0) return null;

    if (
      props.userData.email !== state.email ||
      props.userData.first_name !== state.first_name ||
      props.userData.last_name !== state.last_name ||
      props.userData.company_email !== state.company_email ||
      props.userData.transaction_email !== state.transaction_email ||
      props.userData.company_name !== state.company_name ||
      props.userData.bio !== state.bio
    ) {
      this.setState(props.userData);
    }
    return null;
  }

  handleChange = (field, e) => {
    const {target} = e;
    const {fieldValidations} = this.state;
    if (
      (field === "email" && !fieldValidations.email) ||
      (field === "first_name" && !fieldValidations.first_name) ||
      (field === "last_name" && !fieldValidations.last_name) ||
      (field === "company_email" && !fieldValidations.company_email) ||
      (field === "transaction_email" && !fieldValidations.transaction_email) ||
      (field === "company_name" && !fieldValidations.company_name) ||
      (field === "bio" && !fieldValidations.bio) ||
      (field === "user_image" && !fieldValidations.user_image)
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
            ) : (
              <>
                <div class="form-group user-profile-form-group">
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
                </div>
                <div class="form-group user-profile-form-group">
                  <InputField
                    label={"First Name"}
                    name="first_name"
                    value={first_name}
                    error={fieldValidations.first_name}
                    handleChange={this.handleChange.bind(this, "first_name")}
                  />
                </div>
                <div class="form-group user-profile-form-group">
                  <InputField
                    label={"Last Name"}
                    name="last_name"
                    value={last_name}
                    error={fieldValidations.last_name}
                    handleChange={this.handleChange.bind(this, "last_name")}
                  />
                </div>
                <div class="form-group user-profile-form-group">
                  <InputField
                    label={"Email"}
                    name="email"
                    value={email}
                    error={fieldValidations.email}
                    handleChange={this.handleChange.bind(this, "email")}
                  />
                  <small id="emailHelp" class="form-text text-muted">
                    We'll never share your email with anyone else.
                  </small>
                </div>
                <div class="form-group user-profile-form-group">
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
                <div class="form-group user-profile-form-group">
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
                <div className="form-group user-profile-form-group-full">
                  <InputField
                    label={"Bio"}
                    name="bio"
                    value={bio}
                    error={fieldValidations.bio}
                    handleChange={this.handleChange.bind(this, "bio")}
                  />
                </div>
                <div className="form-group user-profile-form-group-full">
                  <ContainedButtons
                    title="Save"
                    onClick={() => this.handleSubmitonClick()}
                  />
                </div>
              </>
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
