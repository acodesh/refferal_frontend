import React from "react";

class DashboardCard extends React.Component {
  render() {
      const {title,other,icon} = this.props;
    return (
      <>
        <div className="col-lg-3 dash-info aos-init aos-animate" data-aos="fade-up">
            <i className={icon}></i>
            <h4>{title}</h4>
            <p>{other}</p>
        </div>
      </>
    );
  }
}

export default DashboardCard;
