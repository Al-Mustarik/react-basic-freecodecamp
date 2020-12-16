import React from 'react';
import ReactDOM from 'react-dom';

// CSS
import './index.css';

// setup variables
// list 
// const books = [
//   {
//     img:'https://images-na.ssl-images-amazon.com/images/I/41L5qgUW2fL._SX327_BO1,204,203,200_.jpg',
//     title:'A Promised Land',
//     author: 'Barack Obama',
//   },

//   {
//     img:'https://images-na.ssl-images-amazon.com/images/I/41U3yoF6sXL._SX427_BO1,204,203,200_.jpg',
//     title:'Greenlights',
//     author: 'Matthew McConaughey',
//   },
// ]

const names = ['jhon', 'peter', 'susan'];
const newNames = names.map((name) => {
  return <h1>{name}</h1>
});

console.log(newNames);
function BookList(){
  return (
    <section className="bookList"> {newNames} </section>
  );
}


// const Book = (props) => {
//   const { img, title, author } = props;
//   console.log(props);
//   return (
//     <article className = "book">
//       <img src={img} alt=""/>
//       <h2> {title} </h2>
//       <h4> {author} </h4>
//     </article>
//   );
// };


// < /> ==> self closing tag
ReactDOM.render(<BookList />, document.getElementById('root'));