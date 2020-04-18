import Dashboard from "../components/dashboard";
import MyProfile from "../components/my-profile";
import UserLanding from "../components/user-landing";
import Landing from "../components/landing";
import AccessControlRoutes from "./access-control-routes";
import MyPosts from "../components/my-posts";
import MyPayment from "../components/my-payment";
import MyReferrals from "../components/my-referrals";
import Posts from "../components/posts";
import SinglePost from "../components/single-post";
import SingleUserPost from "../components/single-user-post";
import AddPost from "../components/add-post";
import Search from "../components/search";
import Request from "../components/request";
import Profile from "../components/profile";
const Paths = [
  {
    component: Landing,
    exact: true,
    path: "/",
    title: "Landing",
  },
  {
    component: Posts,
    exact: true,
    path: "/posts",
    title: "Posts",
  },
  {
    component: Search,
    exact: true,
    path: "/search/:search",
    title: "Search",
  },
  {
    component: SinglePost,
    exact: true,
    path: "/post/:id",
    title: "Single Post",
  },
  {
    component: Request,
    exact: true,
    path: "/request/:user_id",
    title: "Request",
  },
  {
    component: Profile,
    exact: true,
    path: "/profile/:user_id",
    title: "Profile",
  },
  {
    component: AccessControlRoutes,
    exact: false,
    path: "/",
    routes: {
      ["user"]: {
        initalComponent: Dashboard,
        routes: [
          {
            component: UserLanding,
            exact: true,
            path: "/dashboard",
            title: "UserLanding",
          },
          {
            component: MyProfile,
            exact: true,
            path: "/my-profile",
            title: "MyProfile",
          },
          {
            component: MyPosts,
            exact: true,
            path: "/my-posts",
            title: "Posts",
          },
          {
            component: MyReferrals,
            exact: true,
            path: "/my-referrals",
            title: "My Referrals",
          },
          {
            component: MyPayment,
            exact: true,
            path: "/my-payment",
            title: "Payment",
          },
          {
            component: AddPost,
            exact: true,
            path: "/add-post",
            title: "AddPost",
          },
          {
            component: SingleUserPost,
            exact: true,
            path: "/post/:id",
            title: "Post",
          },
        ],
        urlPrefix: "/user",
      },
    },
  },
];
export default Paths;
