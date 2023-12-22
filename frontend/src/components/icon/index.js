import React from "react";

import { Home } from "./Home";
import { Business } from "./Business";
import { Courses } from "./Courses";

const Icon = (props) => {
  switch (props.name.toLowerCase()) {
    case "home":
      return <Home {...props} />;
    case "buisness":
      return <Business {...props} />;
    case "courses":
      return <Courses {...props} />;
    default:
      return <div />;
  }
};

export { Icon };
