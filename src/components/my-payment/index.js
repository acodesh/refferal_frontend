import React from "react";
import Table from '../../views/table';

class MyPayment extends React.Component {

  render() {
    return (
      <>
        <div class="col-lg-9" data-aos="fade-left">
          <div class="row">
              <Table title={"My Payments"}/>             
            </div>            
        </div>
      </>
    );
  }
}

export default MyPayment;
