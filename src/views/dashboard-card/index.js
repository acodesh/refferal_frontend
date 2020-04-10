import React from "react";
import Card from '@material-ui/core/Card';

class DashboardCard extends React.Component {
  render() {
    const {title,other,icon, color: cardcolor} = this.props;
    return (
      <Card style={{width: '25%',padding: '10px', backgroundColor: cardcolor}}>
        <div className="" data-aos="fade-up">
            <i className={icon}></i>
            <h4>{title}</h4>
            <p>{other}</p>
        </div>
      </Card>
    );
  }
}

export default DashboardCard;
