/* eslint no-useless-escape: 0 */
import {push} from "connected-react-router";
import Storage from "./storage";

class User {
  getAccessToken = () => {
    const {token} = Storage.get("userDetails");

    return token;
  };

  userInfo = () => {
    const userDetails = Storage.get("userDetails");

    return userDetails;
  };

  removeUserDetailsToken = () => {
    Storage.delete("userDetails");
  };

  isAuthenticated = () => {
    const userDetails = Storage.get("userDetails");

    if (!userDetails.accessToken) {
      return false;
    }

    return true;
  };

  validateEmail = (email) => {
    if (
      /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/.test(
        email
      )
    ) {
      return true;
    }

    return false;
  };

  // Note : This is static values returned because integration of survey and crossTab is not done yet.

  signOut = () => {
    Storage.delete("userDetails");
    Storage.delete("adminDetails");
    push("/");
  };
}

export default User;
