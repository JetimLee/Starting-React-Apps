import React from "react"; //not necessary to to this when setting up a component
import reactDom from "react-dom";

const Greeting = () => {
  return <h1> Hello World </h1>;
};

reactDom.render(<Greeting />, document.getElementById("root"));
