import React from "react";
import Table from '../../views/table';

class MyReferrals extends React.Component {

  render() {
    return (
      <>
        <div class="col-lg-9" data-aos="fade-left">
          <div class="row">
              <Table title={"My Referrals"}/>             
            </div>            
        </div>
      </>
    );
  }
}

export default MyReferrals;
