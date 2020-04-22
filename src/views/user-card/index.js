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

export default function UserCard(props) {
  const {post} = props;

  console.log("post", post);
  const classes = useStyles();

  const handleAddClick = (id) => {
    history.push(`/request/${id}`);
  };

  return (
    <Card className={classes.root}>
      <CardHeader
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar}>
            {post.first_name.charAt(0)}
          </Avatar>
        }
        action={
          <IconButton
            aria-label="settings"
            onClick={() => handleAddClick(post.id)}
          >
            <AddIcon />
          </IconButton>
        }
        title={
          <Link variant="subtitle1" href={`/post/${post.id}`}>
            {post.first_name} {post.last_name}
          </Link>
        }
        subheader={<strong>{post.company_name}</strong>}
      />
      <CardContent style={{paddingTop: "0px"}}>
        <div class="info user-card-info">
          <div class="mark">
            <div class="tag_">
              {post.company_name &&
                post.company_name.split(",").map((company, key) => (
                  <a class="tag" key={key}>
                    {company}
                  </a>
                ))}
            </div>
          </div>
        </div>
        <div class="reward_info">
          <div class="reward">
            {post.bio.length > 200 ? post.bio.substr(0, 200) + "..." : post.bio}
          </div>{" "}
        </div>
        {/* <Typography variant="body2" color="textSecondary" component="p">
          {post.bio.length > 200 ? post.bio.substr(0, 200) + "..." : post.bio}
        </Typography> */}
      </CardContent>
    </Card>
  );
}
