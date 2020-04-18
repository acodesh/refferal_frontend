import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import {func, string} from "prop-types";
import CircularLoader from "../circular-loader";
/**
 * button component
 * @title use to display the title on the button
 * @onClick use to handel the click for user
 */
const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
    },
  },
}));

export default function ContainedButtons(props) {
  const classes = useStyles();
  const {loader, disabled} = props;
  return (
    <div className={classes.root}>
      <Button
        variant="contained"
        class={classes.buttonStyle}
        onClick={props.onClick}
        disabled={disabled}
        style={{
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
        }}
      >
        {!!loader ? <CircularLoader /> : props.title}
      </Button>
    </div>
  );
}

ContainedButtons.propTypes = {
  title: string.isRequired,
  onClick: func,
};

ContainedButtons.defaultProps = {
  title: "Submit",
  loader: false,
  disabled: false,
};
