import React from "react";

class Header extends React.Component {
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
                    onClick={() => action("registerPopUp")}
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
                    onClick={() => action("loginPopUp")}
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
          </div>
        </header>
      </>
    );
  }
}

export default Header;
