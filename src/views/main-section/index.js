import React from "react";

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

              <ul className="faq-list">
                <li data-aos="fade-up">
                  <a data-toggle="collapse" className="" href="#faq1">
                    Non consectetur a erat nam at lectus urna duis?{" "}
                    <i className="icofont-simple-up"></i>
                  </a>
                  <div
                    id="faq1"
                    className="collapse show"
                    data-parent=".faq-list"
                  >
                    <p>
                      Feugiat pretium nibh ipsum consequat. Tempus iaculis urna
                      id volutpat lacus laoreet non curabitur gravida. Venenatis
                      lectus magna fringilla urna porttitor rhoncus dolor purus
                      non.
                    </p>
                  </div>
                </li>

                <li data-aos="fade-up" data-aos-delay="100">
                  <a data-toggle="collapse" href="#faq2" className="collapsed">
                    Feugiat scelerisque varius morbi enim nunc faucibus a
                    pellentesque? <i className="icofont-simple-up"></i>
                  </a>
                  <div id="faq2" className="collapse" data-parent=".faq-list">
                    <p>
                      Dolor sit amet consectetur adipiscing elit pellentesque
                      habitant morbi. Id interdum velit laoreet id donec
                      ultrices. Fringilla phasellus faucibus scelerisque
                      eleifend donec pretium. Est pellentesque elit ullamcorper
                      dignissim. Mauris ultrices eros in cursus turpis massa
                      tincidunt dui.
                    </p>
                  </div>
                </li>

                <li data-aos="fade-up" data-aos-delay="200">
                  <a data-toggle="collapse" href="#faq3" className="collapsed">
                    Dolor sit amet consectetur adipiscing elit pellentesque
                    habitant morbi? <i className="icofont-simple-up"></i>
                  </a>
                  <div id="faq3" className="collapse" data-parent=".faq-list">
                    <p>
                      Eleifend mi in nulla posuere sollicitudin aliquam ultrices
                      sagittis orci. Faucibus pulvinar elementum integer enim.
                      Sem nulla pharetra diam sit amet nisl suscipit. Rutrum
                      tellus pellentesque eu tincidunt. Lectus urna duis
                      convallis convallis tellus. Urna molestie at elementum eu
                      facilisis sed odio morbi quis
                    </p>
                  </div>
                </li>

                <li data-aos="fade-up" data-aos-delay="300">
                  <a data-toggle="collapse" href="#faq4" className="collapsed">
                    Ac odio tempor orci dapibus. Aliquam eleifend mi in nulla?{" "}
                    <i className="icofont-simple-up"></i>
                  </a>
                  <div id="faq4" className="collapse" data-parent=".faq-list">
                    <p>
                      Dolor sit amet consectetur adipiscing elit pellentesque
                      habitant morbi. Id interdum velit laoreet id donec
                      ultrices. Fringilla phasellus faucibus scelerisque
                      eleifend donec pretium. Est pellentesque elit ullamcorper
                      dignissim. Mauris ultrices eros in cursus turpis massa
                      tincidunt dui.
                    </p>
                  </div>
                </li>

                <li data-aos="fade-up" data-aos-delay="400">
                  <a data-toggle="collapse" href="#faq5" className="collapsed">
                    Tempus quam pellentesque nec nam aliquam sem et tortor
                    consequat? <i className="icofont-simple-up"></i>
                  </a>
                  <div id="faq5" className="collapse" data-parent=".faq-list">
                    <p>
                      Molestie a iaculis at erat pellentesque adipiscing
                      commodo. Dignissim suspendisse in est ante in. Nunc vel
                      risus commodo viverra maecenas accumsan. Sit amet nisl
                      suscipit adipiscing bibendum est. Purus gravida quis
                      blandit turpis cursus in
                    </p>
                  </div>
                </li>

                <li data-aos="fade-up" data-aos-delay="500">
                  <a data-toggle="collapse" href="#faq6" className="collapsed">
                    Tortor vitae purus faucibus ornare. Varius vel pharetra vel
                    turpis nunc eget lorem dolor?{" "}
                    <i className="icofont-simple-up"></i>
                  </a>
                  <div id="faq6" className="collapse" data-parent=".faq-list">
                    <p>
                      Laoreet sit amet cursus sit amet dictum sit amet justo.
                      Mauris vitae ultricies leo integer malesuada nunc vel.
                      Tincidunt eget nullam non nisi est sit amet. Turpis nunc
                      eget lorem dolor sed. Ut venenatis tellus in metus
                      vulputate eu scelerisque. Pellentesque diam volutpat
                      commodo sed egestas egestas fringilla phasellus faucibus.
                      Nibh tellus molestie nunc non blandit massa enim nec.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </section>
        </main>
      </>
    );
  }
}

export default MainSection;
