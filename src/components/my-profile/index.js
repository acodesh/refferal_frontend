import React from "react";
import InputField from "../../views/input-field";
import ContainedButtons from "../../views/contained-buttons";
import {connect} from "react-redux";

class MyProfile extends React.Component {
  state = {
    email: "",
    password: "",
    first_name: "",
    last_name: "",
    company_email:"",
    transaction_email:"",
    company_name:"",
    bio:"",
    user_image: "",
    fieldValidations: {
      email: false,
      password: false,
      first_name: false,
      last_name: false,
      company_email:false,
      transaction_email:false,
      company_name:false,
      bio:false,
      user_image: false,
    }
  };

  handleChange = (field, e) => {
    const {target} = e;
    const {fieldValidations} = this.state;
    if (
      (field === "email" && !fieldValidations.email) ||
      (field === "password" && !fieldValidations.password)||
      (field === "first_name" && !fieldValidations.first_name)||
      (field === "last_name" && !fieldValidations.last_name)||
      (field === "company_email" && !fieldValidations.company_email)||
      (field === "transaction_email" && !fieldValidations.transaction_email)||
      (field === "company_name" && !fieldValidations.company_name)||
      (field === "bio" && !fieldValidations.bio)||
      (field === "user_image" && !fieldValidations.user_image)
    ) {
      this.setState({
        [field]: target.value,
        fieldValidations: {[field]: false}
      });
    } else {
      this.setState({[field]: target.value});
    }
  };

  handleSubmitonClick = () => {
    const {email, password, user_image, bio, company_name, transaction_email, company_email, last_name, first_name} = this.state;

    let validation = true;
    let errorIn;
    if (!email) {
      errorIn = {email: true};
      validation = false;
    }
    if (!password) {
      errorIn = {...errorIn, password: true};
      validation = false;
    }

    if (validation) {
      // this.props.userSignUp({
      //   email,
      //   password,
      //   user_image, bio, company_name, transaction_email, company_email, last_name, first_name
      // });
    } else {
      this.setState({fieldValidations: errorIn});
    }
  };

  render() {
    const {email, password, fieldValidations, user_image, bio, company_name, transaction_email, company_email, last_name, first_name} = this.state;

    return (
      <>
        <div class="col-lg-9" data-aos="fade-left">
          <div class="row">
            <div class="form-group user-profile-form-group">
                <label for="exampleInputEmail1">Profile Image</label>
                <img class="profileimage" src="https://thumbs.dreamstime.com/b/creative-illustration-default-avatar-profile-placeholder-isolated-background-art-design-grey-photo-blank-template-mockup-144855718.jpg"/>
                
                
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
                <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
              </div>
              <div class="form-group user-profile-form-group">
              <InputField
                  label={"Transaction Email"}
                  name="transaction_email"
                  value={transaction_email}
                  error={fieldValidations.transaction_email}
                  handleChange={this.handleChange.bind(this, "transaction_email")}
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
            </div>            
        </div>
      </>
    );
  }
}

export default MyProfile;
