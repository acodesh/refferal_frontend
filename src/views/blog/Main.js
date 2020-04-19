import React from "react";
import PropTypes from "prop-types";
import {makeStyles} from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import history from "../../routes/history";

const useStyles = makeStyles((theme) => ({
  markdown: {
    ...theme.typography.body2,
    padding: theme.spacing(3, 0),
  },
}));

export default function Main(props) {
  const classes = useStyles();
  const {post} = props;

  function handleAskClick() {
    history.push("/request/12");
  }

  function handleUserImgClick() {
    history.push("/profile/12");
  }

  return (
    <>
      <Grid item xs={12} md={8} style={{paddingTop: "0px", paddingLeft: "0px"}}>
        <div class="sec_read read_detail">
          <div>
            <div class="sec_tit">
              <h1 class="box_tit">
                {" "}
                {post.title || "Looking for a Referral to Apple and Facebook"}
              </h1>
              <div class="person">
                <div class="usr">
                  <span>
                    <a>
                      <span class="name">csusgrad19</span>
                    </a>
                  </span>{" "}
                  <span class="date">
                    8h<em class="gmt"></em>
                  </span>
                </div>
                <span>
                  <a onClick={handleUserImgClick}>
                    <div class="photo bgcolor_c">
                      <img src="https://s3-us-west-2.amazonaws.com/s3.rooftopslushie.com/member_profile/550/ac01b6dbdb8eac107eb4488b4721e1e0.jpeg" />
                    </div>
                  </a>
                </span>
              </div>
              <h2 class="sub_tit">
                {post.description}
                1. My Background:
                <br />
                <br />A recent Master's graduate working with one of the world's
                largest insurance companies as a Business Intelligence Analyst
                since August 2019. Interned for the same organization as a
                Systems Analyst, Analytics Intern for 5 months before being
                extended a full-time return offer. Previous experience also
                includes working as a Data Analyst for a major Healthcare IT
                firm based out of the US for 2 years. <br />
                <br />
                Keen problem-solver with incredible attention to detail and a
                quick learner who loves working in a fast paced environment.
                Skills include SQL, Tableau, MS PowerBI, Python, R, MS Visio, MS
                Project and a working knowledge of Applied ML concepts and model
                building among others.
                <br />
                <br />
                Actively looking for opportunities in Data and Business
                Analytics in organizations where I can further my skills and
                achieve a steeper learning curve.
              </h2>
              <div>
                <h3 class="tags_tit">Desired companies</h3>
                <div class="tags_list">
                  {post.desired_company &&
                    post.desired_company.split(",").map((company, key) => (
                      <span title="tag" class="tag label label-info" key={key}>
                        {company}
                      </span>
                    ))}
                </div>
              </div>
            </div>
            <div class="sec_ref_link">
              <h3 class="blind">Download links</h3>
              <p class="unabled">
                <a class="dnld">Resume</a>
              </p>
              <p class="unabled">
                <a class="prfl">LinkedIn Profile </a>
              </p>
              <p class="locked">This can only be accessed by accepted users.</p>
            </div>
            <div class="sec_detail_que">
              <div class="sec_tit">
                <h3 class="box_tit">Questions</h3>
              </div>
              <div class="question_list dropdown">
                <ul class="exp_list">
                  <li>
                    <div class="iflex">
                      <p>
                        <em class="num">1.</em>What can I expect after getting a
                        referral?
                      </p>
                    </div>
                    <div class="limit">10 words minimum.</div>
                  </li>
                  <li>
                    <div class="iflex">
                      <p>
                        <em class="num">2.</em>Is there anything else you need
                        from my end?
                      </p>
                    </div>
                    <div class="limit">10 words minimum.</div>
                  </li>
                  <li>
                    <div class="iflex">
                      <p>
                        <em class="num">3.</em>No further questions. Just a big
                        thank you for helping out in these trying times. I'm
                        super grateful and really appreciate all the assistance
                        I'm getting.
                      </p>
                    </div>
                    <div class="limit">50 words minimum.</div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div class="sec_read read_comment">
          <div class="sec_tit">
            <h3 class="box_tit">
              <em class="point"> 0 </em> Answers
            </h3>
          </div>
          <div class="comment">
            <div class="conwrap">
              <div>
                <div class="iflex sbetween">
                  <div class="person">
                    <div class="usr">
                      <span>
                        <a>
                          <span class="name">AppleGuru</span>
                        </a>
                      </span>{" "}
                      <i class="ico ico_grade_pro">
                        <span class="blind">professional</span>
                      </i>{" "}
                      <strong>Apple</strong>{" "}
                      <span class="date">
                        Feb 10<em class="gmt"></em>
                      </span>
                    </div>
                    <span>
                      <a>
                        <div data-init="A" class="photo bgcolor_a"></div>
                      </a>
                    </span>
                  </div>
                  <div>
                    <button class="btn_write_post" onClick={handleAskClick}>
                      <span>+ Ask</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="quickpost">
            <div class="message">
              Find the answers you need by posting a project
            </div>
            <button class="btn_write_post">
              <span>+ Ask Questions</span>
            </button>
          </div>
        </div>
      </Grid>
    </>
  );
}

Main.propTypes = {
  posts: PropTypes.array,
  title: PropTypes.string,
};
