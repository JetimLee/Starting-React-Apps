import React from "react"; //not necessary to to this when setting up a component
import reactDom from "react-dom";
import "./index.styles.css";

const firstBook = {
  img:
    "https://images-na.ssl-images-amazon.com/images/I/81drfTT9ZfL._AC_UL200_SR200,200_.jpg",
  title: "The Cat in the Hat",
  author: "Dr. Seuss",
};

const secondBook = {
  img:
    "https://images-na.ssl-images-amazon.com/images/I/81WZ6QvGZ2L._AC_UL200_SR200,200_.jpg",
  title: "It's Not Easy Being a Bunny",
  author: "Marilyn Sadler",
};

const BookList = () => {
  return (
    <section className="bookList">
      <Book
        img={firstBook.img}
        title={firstBook.title}
        author={firstBook.author}
      >
        <p>
          lorem ipsum lorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsum{" "}
          lorem ipsum{" "}
        </p>
      </Book>
      <Book
        img={secondBook.img}
        title={secondBook.title}
        author={secondBook.author}
      />
    </section>
  );
};

const Book = (props) => {
  //these two are the exact same thing ^ and Below
  const { img, title, author } = props;
  return (
    <article className="book">
      <img src={img}></img>
      <h1>{title}</h1>
      <h4>{author}</h4>
      {props.children}
    </article>
  );
};

reactDom.render(<BookList />, document.getElementById("root"));
