import React from "react";
import {makeStyles} from "@material-ui/core/styles";

import TabView from "../tab-view";
import Loader from "../loader";
import history from "../../routes/history";
const useStyles = makeStyles((theme) => ({
  mainGrid: {
    marginTop: theme.spacing(3),
  },
}));

export default function ProfileView(props) {
  const classes = useStyles();
  const {sidebarDisplay, postData, error, isLoading} = props;

  function handleAskClick() {
    history.push("/request/12");
  }

  return (
    <>
      {!isLoading ? (
        <div className="single-post-loader">
          <Loader />
        </div>
      ) : (
        <section id="idMemberProfileViewSection" class="lst_area notice_area">
          <div className="mypage_bx">
            <div>
              <div className="is_mynick">
                <h3>Ask csusgrad19 for career advice</h3>
              </div>
              <div className="pinfo bx">
                <div className="iflex">
                  <div className="person">
                    <div className="usr">
                      <span className="name">csusgrad19</span> <strong></strong>
                    </div>
                    <div data-init="c" className="photo bgcolor_c">
                      <img
                        src="https://s3-us-west-2.amazonaws.com/s3.rooftopslushie.com/member_profile/550/ac01b6dbdb8eac107eb4488b4721e1e0.jpeg"
                        alt="csusgrad19"
                      />
                    </div>
                  </div>
                  <div className="status">
                    <div className="btn_group">
                      <button
                        type="button"
                        name="button"
                        className="btn btn_xs line btn_ico"
                      >
                        <i className="ico ico_declaration">
                          <span className="blind">declaration</span>
                        </i>
                      </button>{" "}
                      <button
                        type="button"
                        name="button"
                        className="btn btn_sm btn_point"
                        onClick={handleAskClick}
                      >
                        + Ask <i className="is_web">Privately</i>
                      </button>
                    </div>
                  </div>
                </div>
                <div className="my_profile_desc">
                  <span>
                    Recent graduate working with a Fortune 500 Company as a
                    Business Intelligence &amp; Data Analyst. Looking to grow
                    more as a professional, learn as much as I can, and seek
                    some referrals to top-tier companies along the way! :)
                  </span>
                </div>
                <div className="tags_list">
                  <div className="tag_">
                    <a className="tag">Referral</a>
                    <a className="tag">Interview</a>
                    <a className="tag">Google</a>
                    <a className="tag">FAANG</a>
                    <a className="tag">Analyst</a>
                    <a className="tag">Analytical Skills</a>
                    <a className="tag">Data Analyst</a>
                    <a className="tag">Business Analyst</a>
                  </div>
                </div>
              </div>
            </div>
            <div className="phistory">
              <TabView />
            </div>
          </div>
        </section>
      )}
    </>
  );
}
