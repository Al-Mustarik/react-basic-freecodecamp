import React from 'react';
import ReactDOM from 'react-dom';

// CSS
import './index.css';
// import static data
import {books} from './books'
// import component
import Book from './Book'

function BookList(){
  return (
    <section className="bookList"> 
    {books.map((book) =>{
      return (<Book key={book.id} {...book}></Book>)
    })} 
    </section>
  );
}

ReactDOM.render(<BookList />, document.getElementById('root'));