import React from 'react';
import ReactDOM from 'react-dom';

// CSS
import './index.css';

// setup variables
const firstBook = {
  img:'https://images-na.ssl-images-amazon.com/images/I/41L5qgUW2fL._SX327_BO1,204,203,200_.jpg',
  title:'A Promised Land',
  author: 'Barack Obama',
}
const secondBook = {
  img:'https://images-na.ssl-images-amazon.com/images/I/41U3yoF6sXL._SX427_BO1,204,203,200_.jpg',
  title:'Greenlights',
  author: 'Matthew McConaughey',
}

function BookList(){
  return(
    <section className = "bookList">
      <Book 
      img={firstBook.img} 
      title={firstBook.title} 
      author={firstBook.author} 
      >
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
          Nostrum dolorum cum nisi error possimus laborum praesentium 
          aspernatur quia placeat porro!</p>
      </Book>
      <Book 
      img={secondBook.img} 
      title={secondBook.title} 
      author={secondBook.author} 
      />
    </section>
  );
}


const Book = (props) => {
  const { img, title, author } = props;
  console.log(props);
  return (
    <article className = "book">
      <img src={img} alt=""/>
      <h2> {title} </h2>
      <h4> {author} </h4>
      {props.children}
    </article>
  );
};


// < /> ==> self closing tag
ReactDOM.render(<BookList />, document.getElementById('root'));