import React from 'react';
import ReactDOM from 'react-dom';

// CSS
import './index.css';

function BookList(){
  return(
    <section className = "bookList">
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
    </section>
  );
}

const Book = () => {
  return (
    <article className = "book">
      <Image />
      <Title />
      <Author />
    </article>
  );
};
const Image = () => <img src="https://images-na.ssl-images-amazon.com/images/I/41L5qgUW2fL._SX327_BO1,204,203,200_.jpg" alt=""/>
const Title = () => <h2> A Promised Land </h2>
const Author = () => <h4> Barack Obama </h4>

// < /> ==> self closing tag
ReactDOM.render(<BookList />, document.getElementById('root'));