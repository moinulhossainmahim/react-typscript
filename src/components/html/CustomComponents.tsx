import React from "react";
import Greet from "../Basic-props-types/Greet";

const CustomComponents = (props: React.ComponentProps<typeof Greet>) => {
  return <div>{props.isLoggedIn}</div>;
};

export default CustomComponents;
