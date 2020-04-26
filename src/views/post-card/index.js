import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import {red} from "@material-ui/core/colors";
import AddIcon from "@material-ui/icons/Add";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import history from "../../routes/history";
import Link from "@material-ui/core/Link";

const useStyles = makeStyles((theme) => ({
  root: {marginTop: "10px"},
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: "rotate(180deg)",
  },
  avatar: {
    backgroundColor: red[500],
  },
}));

export default function PostCard(props) {
  const {post, showAddButton} = props;
  const classes = useStyles();

  const handleAddClick = (id) => {
    history.push(`/request/${id}`);
  };

  function handleCompanyClick(name) {
    history.push(`/search/${name}`);
  }
  function calculateDays() {
    var date1 = new Date();
    var date2 = new Date(post.dead_line);
    if (date1.getTime() < date2.getTime()) {
      var Difference_In_Time = date2.getTime() - date1.getTime();
      return Difference_In_Time / (1000 * 3600 * 24);
    }

    return "0";
  }
  return (
    <Card className={classes.root}>
      <CardHeader
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar}>
            R
          </Avatar>
        }
        action={
          showAddButton && (
            <IconButton
              aria-label="settings"
              onClick={() => handleAddClick(post.id)}
            >
              <AddIcon />
            </IconButton>
          )
        }
        title={
          <Link variant="subtitle1" href={`/post/${post.id}`}>
            {post.title}
          </Link>
        }
        subheader={new Date(post.createdAt).toTimeString()}
      />
      <CardContent style={{paddingTop: "0px"}}>
        <div class="info">
          <div class="mark">
            <div class="tag_">
              {post.desired_company &&
                post.desired_company.split(",").map((company, key) => (
                  <a
                    class="tag"
                    onClick={() => handleCompanyClick(company)}
                    key={key}
                  >
                    {company}
                  </a>
                ))}
            </div>
          </div>
        </div>
        <div class="reward_info">
          <div class="reward">
            <strong>
              <em class="currency">$</em> {post.pay_per_person}{" "}
            </strong>{" "}
            <span class="desc">Reward</span>
          </div>{" "}
          <div class="date">
            <time class="time">
              <span class="ico ico_clock"></span>{" "}
              <span class="bx_dday">
                <em> {parseInt(calculateDays())} days left </em>
              </span>
            </time>
          </div>
        </div>
        {/* <Typography variant="body2" color="textSecondary" component="p">
          {post.description}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          {parseInt(calculateDays())} days left
        </Typography> */}
      </CardContent>
    </Card>
  );
}
PostCard.defaultProps = {
  showAddButton: true,
};
