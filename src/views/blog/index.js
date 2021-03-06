import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import GitHubIcon from "@material-ui/icons/GitHub";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import MainFeaturedPost from "./MainFeaturedPost";
import FeaturedPost from "./FeaturedPost";
import Main from "./Main";
import Sidebar from "./Sidebar";
import Loader from "../loader";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import PostCard from "../../views/post-card";

const useStyles = makeStyles((theme) => ({
  mainGrid: {
    marginTop: theme.spacing(3),
  },
}));

const mainFeaturedPost = {
  title: "Title of a longer featured blog post",
  description:
    "Multiple lines of text that form the lede, informing new readers quickly and efficiently about what's most interesting in this post's contents.",
  image: "https://source.unsplash.com/random",
  imgText: "main image description",
  linkText: "Continue reading…",
};

const featuredPosts = [
  {
    title: "Featured post",
    date: "Nov 12",
    description:
      "This is a wider card with supporting text below as a natural lead-in to additional content.",
    image: "https://source.unsplash.com/random",
    imageText: "Image Text",
  },
  {
    title: "Post title",
    date: "Nov 11",
    description:
      "This is a wider card with supporting text below as a natural lead-in to additional content.",
    image: "https://source.unsplash.com/random",
    imageText: "Image Text",
  },
];

const sidebar = {
  title: "About",
  description:
    "Etiam porta sem malesuada magna mollis euismod. Cras mattis consectetur purus sit amet fermentum. Aenean lacinia bibendum nulla sed consectetur.",
  archives: [
    {title: "March 2020", url: "#"},
    {title: "February 2020", url: "#"},
    {title: "January 2020", url: "#"},
    ,
  ],
  social: [
    {name: "Twitter", icon: TwitterIcon},
    {name: "Facebook", icon: FacebookIcon},
  ],
};

export default function Blog(props) {
  const classes = useStyles();

  const {
    isLoading,
    title,
    isFeaturePost,
    isFeaturePosts,
    data,
    isSidebar,
  } = props;
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="lg" style={{paddingBottom: "10px"}}>
        <main>
          {/* {isFeaturePost && <MainFeaturedPost post={mainFeaturedPost} />}
          <Grid container spacing={4}>
            {isFeaturePosts &&
              featuredPosts.map((post) => (
                <FeaturedPost key={post.title} post={post} />
              ))}
          </Grid> */}
          <Grid
            container
            spacing={5}
            className={classes.mainGrid}
            style={{marginTop: "0px"}}
          >
            {!!isLoading ? (
              <div className="single-post-loader">
                <Loader />
              </div>
            ) : (
              // <Main title={title} posts={posts} />
              <Grid item xs={12} md={isSidebar ? 8 : 12}>
                <Typography variant="h6" gutterBottom>
                  {title}
                </Typography>
                <Divider />
                {!!data.length &&
                  data.map((post, key) => (
                    <PostCard post={post} key={key} showAddButton={isSidebar} />
                  ))}
              </Grid>
            )}

            {isSidebar && (
              <Sidebar
                title={sidebar.title}
                description={sidebar.description}
                archives={sidebar.archives}
                social={sidebar.social}
              />
            )}
          </Grid>
        </main>
      </Container>
    </React.Fragment>
  );
}
