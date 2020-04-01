import React from "react";
import "./styles.css";
import store from "./store";
import {Provider} from "react-redux";
import Routes from "./routes";

import "./index.css";
import "./assets/vendor/bootstrap/css/bootstrap.min.css";
import "./assets/vendor/icofont/icofont.min.css";
import "./assets/vendor/boxicons/css/boxicons.min.css";
import "./assets/vendor/venobox/venobox.css";
import "./assets/vendor/owl.carousel/assets/owl.carousel.min.css";

export default function App() {
  return (
    <Provider store={store()}>
      <Routes />
    </Provider>
  );
}
