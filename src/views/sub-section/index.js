import React from "react";
import history from "../../routes/history";
class SubSection extends React.Component {
  state = {
    companyName: "",
  };
  companyClickHandler = (e) => {
    const {target} = e;
    this.setState({companyName: target.value});
  };
  clickHandler = () => {
    history.push(`search/${this.state.companyName}`);
  };
  render() {
    const {companyName} = this.state;
    return (
      <>
        <section id="hero" style={{background: "#f5f5f5"}}>
          <div className="container">
            <div className="row">
              <div
                className="col-lg-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex flex-column justify-content-center"
                data-aos="fade-up"
              >
                <div>
                  <h1>Earn Job referrals From Top Company</h1>
                  <h2>
                    We are team of talanted designers making websites with
                    Bootstrap
                  </h2>
                  <form className="form-inline">
                    <div className="form-group mb-2">
                      <select
                        className="form-control-plaintext"
                        onChange={this.companyClickHandler}
                      >
                        <option>Choose a Company</option>
                        <option>Wipro</option>
                        <option>Facebook</option>
                        <option>Google</option>
                        <option>Wallmart</option>
                      </select>
                    </div>
                    <button
                      type="submit"
                      className="btn btn-primary mb-2 btn-get-started scrollto"
                      onClick={this.clickHandler}
                    >
                      Continue
                    </button>
                  </form>
                </div>
              </div>
              <div
                className="col-lg-6 order-1 order-lg-2 hero-img"
                data-aos="fade-left"
              >
                <img
                  src={require("../../assets/img/hero-img.png")}
                  className="img-fluid"
                  alt=""
                />
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }
}

export default SubSection;
