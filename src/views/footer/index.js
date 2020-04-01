import React from "react";

class Footer extends React.Component {
  render() {
    return (
      <>
        <footer id="footer">
          <div className="container">
            <div className="copyright">
              © Copyright{" "}
              <strong>
                <span>Adiz</span>
              </strong>
              . All Rights Reserved
            </div>
            <div className="credits"></div>
          </div>
        </footer>
      </>
    );
  }
}

export default Footer;
