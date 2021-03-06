import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";

const useStyles = makeStyles(theme => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "97%"
    }
  }
}));

export default function BasicTextFields(props) {
  const classes = useStyles();

  return (
    <form className={classes.root} noValidate autoComplete="off">
      <TextField
        id="outlined-basic"
        label={props.label}
        variant="outlined"
        error={props.error}
        onChange={props.handleChange}
        value={props.value}
        type={props.type || 'text'}
      />
    </form>
  );
}
