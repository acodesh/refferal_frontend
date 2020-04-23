import "date-fns";
import React from "react";
import Grid from "@material-ui/core/Grid";
import DateFnsUtils from "@date-io/date-fns";
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from "@material-ui/pickers";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    margin: theme.spacing(1),
    minWidth: "97%",
  },
}));

export default function DatePicker(props) {
  const classes = useStyles();
  const {title, name, value, handleChange} = props;

  const handleDateChange = (date) => {
    handleChange(date);
  };

  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <Grid container justify="space-around">
        <KeyboardDatePicker
          name={name}
          margin="normal"
          id="date-picker-dialog"
          label={title}
          format="MM/dd/yyyy"
          value={value}
          onChange={handleDateChange}
          KeyboardButtonProps={{
            "aria-label": "change date",
          }}
          style={{width: "100%"}}
        />
      </Grid>
    </MuiPickersUtilsProvider>
  );
}
