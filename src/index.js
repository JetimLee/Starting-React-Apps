import React from "react"; //not necessary to to this when setting up a component
import reactDom from "react-dom";

const Greeting = () => {
  return (
    <div>
      <Person />
      <Message />
    </div>
  );
};

const Person = () => {
  return <h2> john doe </h2>;
};

const Message = () => <p>this is my message</p>;

reactDom.render(<Greeting />, document.getElementById("root"));
