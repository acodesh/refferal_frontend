import React from "react";
import PropTypes from "prop-types";
import {makeStyles} from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";

const useStyles = makeStyles((theme) => ({
  sidebarAboutBox: {
    padding: "24px 35px 26px",
    backgroundColor: "#fff",
    border: "1px solid #eaeaea",
    //borderRadius: "69px",
    boxShadow: "0 2px 10px -6px rgba(0,0,0,.5)",
    boxSizing: "border-box",
  },
  sidebarSection: {
    borderBottom: "1px solid #e8e9ea",
    padding: "24px 0 23px",
    marginBottom: "30px",
  },
  sidebarMain: {
    padding: "0px 35px 26px",
    backgroundColor: "#fafafa",
    marginTop: "10px",
  },
}));

export default function SingleSidebar(props) {
  const classes = useStyles();

  const {
    postData: {pay_per_person, createdAt, dead_line},
  } = props;

  function calculateDays() {
    var date1 = new Date(createdAt);
    var date2 = new Date(dead_line);

    var Difference_In_Time = date2.getTime() - date1.getTime();

    return Difference_In_Time / (1000 * 3600 * 24);
  }

  function isTaskClosed() {
    var g1 = new Date();
    var g2 = new Date(dead_line);
    if (g1.getTime() < g2.getTime()) return false;
    else return true;
  }
  return (
    <aside className="side_area">
      <div id="requestDetailAttributeIScroll" className="iscroll">
        <section className="sec_read">
          <div className="sec_tit">
            <h3 className="price">
              ${pay_per_person}
              <em>/</em>
              <span>person</span>
            </h3>
            <div className="box_tools">
              <a className="btn_clse">
                <i className="blind">CLOSE</i>
              </a>
            </div>
          </div>
          <div className="tbl_report report_summary">
            <table>
              <thead>
                <tr>
                  <th>title</th>
                  <th>amount</th>
                </tr>
              </thead>
              <tbody>
                <tr className="t_provider">
                  <td> Answerers </td>
                  <td className="t">3 Users (3/3)</td>
                </tr>
                <tr className="t_date">
                  <td>
                    Application Deadline
                    <span refs="vuePopper">
                      <span style={{display: "none"}}>
                        <div className="popper">
                          <div className="pop_message">
                            <span>
                              You can apply to the project before the deadline.
                            </span>
                          </div>
                        </div>
                      </span>
                    </span>
                  </td>
                  <td className="t">
                    {dead_line}
                    {isTaskClosed && (
                      <>
                        <br /> Closed
                      </>
                    )}
                  </td>
                </tr>
                <tr className="t_deadline">
                  <td>
                    Complete within
                    <span>
                      <span style={{display: "none"}}>
                        <div className="popper">
                          <div className="pop_message">
                            <span>
                              Once you are accepted, you must submit an answer
                              within this period.
                            </span>
                          </div>
                        </div>
                      </span>
                    </span>
                  </td>
                  <td className="t point"> {parseInt(calculateDays())} days</td>
                </tr>
              </tbody>
            </table>
          </div>
          <ul className="notice">
            <div>
              <div>
                <div>
                  <li>
                    Complete your answer within 3 days of being matched with
                    requester.
                  </li>
                  <li>
                    The requester must review and confirm the answer you provide
                    within 72 hours. They may also request our team to evaluate
                    answers for validation.
                  </li>
                  <li>
                    You will be paid once the requester confirms your answer.
                  </li>
                  <li>
                    If an answer evaluation is requested, users who answered
                    this question will be compensated based on our team’s
                    evaluation.
                  </li>
                  <li>
                    To help operate Rooftop Slushie, we charge a service fee to
                    the requester and the professional who answers the question.
                  </li>
                  <li className="point">
                    This project is private. Only the requester can view the
                    answers.{" "}
                  </li>
                </div>
              </div>
            </div>
          </ul>
          <div>
            <div className="btn_group btn_grid btn_apply x1">
              <button
                type="button"
                name="button"
                disabled="disabled"
                className="btn btn_disable"
              >
                Completed
              </button>
            </div>
          </div>
        </section>
      </div>
    </aside>
  );
}

SingleSidebar.propTypes = {
  archives: PropTypes.array,
  description: PropTypes.string,
  social: PropTypes.array,
  title: PropTypes.string,
};
