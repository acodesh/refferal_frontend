import React from "react";
import SimpleExpansionPanel from "../simple-expansion-panel";

class MainSection extends React.Component {
  render() {
    return (
      <>
        <main id="main">
          <section id="services" className="services section-bg">
            <div className="container">
              <div className="section-title" data-aos="fade-up">
                <h2>How It works </h2>
                <p>
                  Magnam dolores commodi suscipit. Necessitatibus eius
                  consequatur ex aliquid fuga eum quidem. Sit sint consectetur
                  velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit
                  suscipit alias ea. Quia fugiat sit in iste officiis commodi
                  quidem hic quas.
                </p>
              </div>

              <div className="row">
                <div
                  className="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0"
                  data-aos="zoom-in"
                >
                  <div className="icon-box icon-box-pink">
                    <div className="icon">
                      <i className="bx bxl-dribbble"></i>
                    </div>
                    <h4 className="title">
                      <a href="">Lorem Ipsum</a>
                    </h4>
                    <p className="description">
                      Voluptatum deleniti atque corrupti quos dolores et quas
                      molestias excepturi sint occaecati cupiditate
                    </p>
                  </div>
                </div>

                <div
                  className="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0"
                  data-aos="zoom-in"
                  data-aos-delay="100"
                >
                  <div className="icon-box icon-box-cyan">
                    <div className="icon">
                      <i className="bx bx-file"></i>
                    </div>
                    <h4 className="title">
                      <a href="">Sed ut perspiciatis</a>
                    </h4>
                    <p className="description">
                      Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum dolore eu fugiat nulla
                    </p>
                  </div>
                </div>

                <div
                  className="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0"
                  data-aos="zoom-in"
                  data-aos-delay="200"
                >
                  <div className="icon-box icon-box-green">
                    <div className="icon">
                      <i className="bx bx-tachometer"></i>
                    </div>
                    <h4 className="title">
                      <a href="">Magni Dolores</a>
                    </h4>
                    <p className="description">
                      Excepteur sint occaecat cupidatat non proident, sunt in
                      culpa qui officia deserunt mollit anim
                    </p>
                  </div>
                </div>

                <div
                  className="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0"
                  data-aos="zoom-in"
                  data-aos-delay="300"
                >
                  <div className="icon-box icon-box-blue">
                    <div className="icon">
                      <i className="bx bx-world"></i>
                    </div>
                    <h4 className="title">
                      <a href="">Nemo Enim</a>
                    </h4>
                    <p className="description">
                      At vero eos et accusamus et iusto odio dignissimos ducimus
                      qui blanditiis praesentium voluptatum
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section
            id="clients"
            className="clients"
            style={{background: "#f5f5f5"}}
          >
            <div className="container">
              <div className="section-title" data-aos="fade-up">
                <h2>Compaines Hiring Candidates</h2>
                <p>Signup and get Hired up on those company</p>
              </div>

              <div className="row no-gutters clients-wrap clearfix wow fadeInUp">
                <div className="col-lg-3 col-md-4 col-xs-6">
                  <div className="client-logo" data-aos="zoom-in">
                    <img
                      src={require("../../assets/img/clients/client-1.png")}
                      className="img-fluid"
                      alt=""
                    />
                  </div>
                </div>

                <div className="col-lg-3 col-md-4 col-xs-6">
                  <div
                    className="client-logo"
                    data-aos="zoom-in"
                    data-aos-delay="100"
                  >
                    <img
                      src={require("../../assets/img/clients/client-2.png")}
                      className="img-fluid"
                      alt=""
                    />
                  </div>
                </div>

                <div className="col-lg-3 col-md-4 col-xs-6">
                  <div
                    className="client-logo"
                    data-aos="zoom-in"
                    data-aos-delay="150"
                  >
                    <img
                      src={require("../../assets/img/clients/client-3.png")}
                      className="img-fluid"
                      alt=""
                    />
                  </div>
                </div>

                <div className="col-lg-3 col-md-4 col-xs-6">
                  <div
                    className="client-logo"
                    data-aos="zoom-in"
                    data-aos-delay="200"
                  >
                    <img
                      src={require("../../assets/img/clients/client-4.png")}
                      className="img-fluid"
                      alt=""
                    />
                  </div>
                </div>

                <div className="col-lg-3 col-md-4 col-xs-6">
                  <div
                    className="client-logo"
                    data-aos="zoom-in"
                    data-aos-delay="250"
                  >
                    <img
                      src={require("../../assets/img/clients/client-5.png")}
                      className="img-fluid"
                      alt=""
                    />
                  </div>
                </div>

                <div className="col-lg-3 col-md-4 col-xs-6">
                  <div
                    className="client-logo"
                    data-aos="zoom-in"
                    data-aos-delay="300"
                  >
                    <img
                      src={require("../../assets/img/clients/client-6.png")}
                      className="img-fluid"
                      alt=""
                    />
                  </div>
                </div>

                <div className="col-lg-3 col-md-4 col-xs-6">
                  <div
                    className="client-logo"
                    data-aos="zoom-in"
                    data-aos-delay="350"
                  >
                    <img
                      src={require("../../assets/img/clients/client-7.png")}
                      className="img-fluid"
                      alt=""
                    />
                  </div>
                </div>

                <div
                  className="col-lg-3 col-md-4 col-xs-6"
                  data-aos="zoom-in"
                  data-aos-delay="400"
                >
                  <div className="client-logo">
                    <img
                      src={require("../../assets/img/clients/client-8.png")}
                      className="img-fluid"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section id="faq" className="faq">
            <div className="container">
              <div className="section-title" data-aos="fade-up">
                <h2>Frequently Asked Questions</h2>
              </div>
              <SimpleExpansionPanel />
            </div>
          </section>
        </main>
      </>
    );
  }
}

export default MainSection;
