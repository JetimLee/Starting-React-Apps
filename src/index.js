import React from "react"; //not necessary to to this when setting up a component
import reactDom from "react-dom";
import "./index.styles.css";

const BookList = () => {
  return (
    <section className="bookList">
      <Book />
      <Book />
      <Book />
      <Book />
    </section>
  );
};

const Book = () => {
  return (
    <article className="book">
      <Image />
      <Title />
      <Author />
    </article>
  );
};

const Image = () => (
  <img src="https://images-na.ssl-images-amazon.com/images/I/81drfTT9ZfL._AC_UL200_SR200,200_.jpg"></img>
);

const Title = () => {
  return <h1>The Cat in the Hat</h1>;
};

const Author = () => <h2>Dr. Seuss</h2>;
reactDom.render(<BookList />, document.getElementById("root"));
