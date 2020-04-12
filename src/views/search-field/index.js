import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import InputBase from "@material-ui/core/InputBase";
import IconButton from "@material-ui/core/IconButton";
import SearchIcon from "@material-ui/icons/Search";
import history from "../../routes/history";
import {withStyles} from "@material-ui/styles";

const styles = (theme) => ({
  root: {
    padding: "2px 4px",
    display: "flex",
    alignItems: "center",
    width: 400,
  },
  input: {
    marginLeft: 1,
    flex: 1,
  },
  iconButton: {
    padding: 10,
  },
  divider: {
    height: 28,
    margin: 4,
  },
});

class SearchField extends React.Component {
  constructor() {
    super();
    this.search = React.createRef();
  }

  state = {
    search: "",
  };

  searchClickHandler = () => {
    const {search} = this.state;
    if (search) history.push(`/search/${search}`);
  };

  handleChange = (e) => {
    const {target} = e;
    this.setState({search: target.value});
  };

  render() {
    const {search} = this.state;

    const {classes} = this.props;
    return (
      <Paper component="form" className={classes.root}>
        <InputBase
          name="search"
          className={classes.input}
          placeholder="Search"
          inputProps={{"aria-label": "Search"}}
          onChange={(e) => this.handleChange(e)}
          ref={this.search}
          value={search}
        />
        <IconButton
          className={classes.iconButton}
          aria-label="search"
          onClick={(e) => this.searchClickHandler(e)}
        >
          <SearchIcon />
        </IconButton>
      </Paper>
    );
  }
}
export default withStyles(styles)(SearchField);
