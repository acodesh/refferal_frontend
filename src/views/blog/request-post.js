import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import RequestFormOne from "./request-form-one";
import RequestFormTwo from "./request-form-two";
import RequestFormThree from "./request-form-three";
import {addRequest} from "../../actions/request-action-type";
import {connect} from "react-redux";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  backButton: {
    marginRight: theme.spacing(1),
  },
  instructions: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
}));

const style = {
  backgroundColor: "#009cea",
  fontFamily: '"Raleway", sans-serif',
  fontWeight: "600",
  fontSize: "13px",
  textTransform: "uppercase",
  letterSpacing: "1px",
  display: "inline-block",
  padding: "12px 28px",
  borderRadius: "3px",
  transition: "0.5s",
  color: "#fff",
};
function getSteps() {
  return ["Describe your request", "Fill your details", "Submit Request"];
}

function getStepContent(stepIndex) {
  switch (stepIndex) {
    case 0:
      return <RequestFormOne />;
    case 1:
      return <RequestFormTwo />;
    case 2:
      return <RequestFormThree />;
    default:
      return "Unknown stepIndex";
  }
}

function RequestPost(props) {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const [validateOne, setValidateOne] = React.useState(0);
  const steps = getSteps();

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const submitRequest = () => {
    props.addRequest(props.request);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <div className={classes.root}>
      <Stepper activeStep={activeStep} alternativeLabel>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      <>
        {activeStep === steps.length ? (
          <div>
            <Typography className={classes.instructions} component={"span"}>
              All steps completed
            </Typography>
            <Button onClick={handleReset}>Reset</Button>
          </div>
        ) : (
          <div
            style={{
              width: "100%",
              display: "flex",
              justifyContent: "space-between",
              paddingTop: "20px",
            }}
          >
            <div style={{background: "#fff", width: "68%", padding: "40px"}}>
              <Typography className={classes.instructions} component={"span"}>
                {activeStep == 0 && <RequestFormOne handleNext={handleNext} />}
                {activeStep == 1 && <RequestFormTwo handleNext={handleNext} />}
                {activeStep == 2 && (
                  <RequestFormThree handleNext={handleNext} />
                )}
                {activeStep == 3 && "Unknown stepIndex"}
              </Typography>
              <div style={{display: "flex", justifyContent: "center"}}>
                {!props.requestData && (
                  <>
                    <Button
                      disabled={activeStep === 0}
                      onClick={handleBack}
                      className={classes.backButton}
                      style={style}
                    >
                      Back
                    </Button>

                    {activeStep === steps.length - 1 && (
                      <Button
                        variant="contained"
                        color="primary"
                        //onClick={handleNext}
                        onClick={submitRequest}
                        style={style}
                      >
                        Submit
                      </Button>
                    )}
                  </>
                )}
              </div>
            </div>
            <div style={{width: "30%", padding: "20px"}}>
              <div class="saying">
                <h2>
                  What people are saying about <strong>Referral</strong>
                </h2>{" "}
                <div class="reviews">
                  <div class="review">
                    <div class="rating">
                      {" "}
                      <div class="by">UESU26</div>{" "}
                      <div class="txtwp">
                        <p class="txt">
                          "Got a referral for Palantir technologies. Very
                          friendly and immensely helpful!"
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </>
    </div>
  );
}

const mapStateToProps = ({
  Request: {isLoadingRequest, requestData, requestError, request},
}) => ({
  isLoadingRequest,
  requestData,
  requestError,
  request,
});

export default connect(mapStateToProps, {addRequest})(RequestPost);
