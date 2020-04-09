import React from "react";
import Table from '../../views/table';

class MyProfile extends React.Component {

  render() {
    return (
      <>
        <div class="col-lg-9" data-aos="fade-left">
          <div class="row">
              <Table title={"My Posts"}/>             
            </div>            
        </div>
      </>
    );
  }
}

export default MyProfile;
