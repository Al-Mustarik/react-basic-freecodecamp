import React from 'react';
import ReactDOM from 'react-dom';

// CSS
import './index.css';

// setup variables
// list 
const books = [
  { id:1,
    img:'https://images-na.ssl-images-amazon.com/images/I/41L5qgUW2fL._SX327_BO1,204,203,200_.jpg',
    title:'A Promised Land',
    author: 'Barack Obama',
  },

  { id:2,
    img:'https://images-na.ssl-images-amazon.com/images/I/41U3yoF6sXL._SX427_BO1,204,203,200_.jpg',
    title:'Greenlights',
    author: 'Matthew McConaughey',
  },

  { id:3,
    img:'https://images-na.ssl-images-amazon.com/images/I/51XxSZxKoDL._SX331_BO1,204,203,200_.jpg',
    title:'A Time for Mercy (Jake Brigance)',
    author: 'John Grisham',
  },
]


function BookList(){
  return (
    <section className="bookList"> 
    {books.map((book) =>{
      // return(<Book key={book.id} book={book}> </Book>);
      return (<Book key={book.id} {...book}></Book>)
    })} 
    </section>
  );
}


const Book = (props) => {
  // console.log(props);
  // const { img, title, author } = props.book;
  const{img, title, author} = props;
  // onClick, onMouseOver
  const clickHandler = (e) => {
    console.log(e);
    console.log(e.target);
    alert('hello world');
  }

  const complexExample = (author) =>{
    console.log(author);
  }

  return (
    <article className = "book" onMouseOver={() => {
      console.log(title);
    }}>
      <img src={img} alt="" />
      <h2> {title} </h2>
      <h4> {author} </h4>
      <button type="button" onClick={clickHandler}>reference example</button>
      <button type="button" onClick={ () => complexExample(author) } >more complex example</button>
    </article>
  );
};


// < /> ==> self closing tag
ReactDOM.render(<BookList />, document.getElementById('root'));