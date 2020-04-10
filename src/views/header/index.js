import React from "react";
import history from "../../routes/history";

class Header extends React.Component {
  onClickHandlerPosts = (e) => {
    e.preventDefault();
    history.push("/posts");
  };

  render() {
    const {action} = this.props;

    return (
      <>
        <header id="header" className="fixed-top">
          <div className="container d-flex">
            <div className="logo mr-auto">
              <h1 className="text-light">
                <a href="index.html">
                  <span>Adiz</span>
                </a>
              </h1>
            </div>
            <nav className="nav-menu d-none d-lg-block">
              <ul>
                <li>
                  <a
                    onClick={(e) => action(e, "registerPopUp")}
                    href="#signupModel"
                    className="trigger-btn"
                    data-toggle="modal"
                    href="#contact"
                  >
                    Join
                  </a>
                </li>
                <li>
                  <a
                    onClick={(e) => action(e, "loginPopUp")}
                    href="#myModal"
                    className="trigger-btn"
                    data-toggle="modal"
                    href="#contact"
                  >
                    Login
                  </a>
                </li>
              </ul>
            </nav>
            <nav class="nav-menu d-none d-lg-block">
              <ul>
                <li>
                  <a
                    href="#signupModel"
                    class="trigger-btn"
                    data-toggle="modal"
                    href="#contact"
                  >
                    My Account
                  </a>
                </li>
                <li>
                  <a
                    href=""
                    class="trigger-btn"
                    onClick={(e) => this.onClickHandlerPosts(e)}
                  >
                    Post
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </header>
      </>
    );
  }
}

export default Header;
