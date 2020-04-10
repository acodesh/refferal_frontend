import React from "react";
import history from "../../routes/history";
import Link from '@material-ui/core/Link';

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
                    className="trigger-btn"
                    data-toggle="modal"
                    href=""
                  >
                    Join
                  </a>
                </li>
                <li>
                  <a
                    onClick={(e) => action(e, "loginPopUp")}
                    className="trigger-btn"
                    data-toggle="modal"
                    href=""
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
                    href=""
                    class="trigger-btn"
                    data-toggle="modal"
                    
                  >
                    My Account
                  </a>
                </li>
                <li>
                <Link variant="subtitle1" href="/posts">
                  Post
              </Link>
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
