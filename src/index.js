// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();

import React from 'react';
import ReactDOM from 'react-dom';

// function Greeting(){
//   return (
//     <React.Fragment>
//       <div>
//         <h3>hello people</h3>
//         <ul>
//           <li>
//             <a href="http://"> hello world </a>
//           </li>
//           <img src="" alt=""/>
//           <input type="text" name="" id=""/>
//         </ul>
//       </div>
//       <div></div>
//     </React.Fragment>
//   );
// }

// const Greeting = () => {
//   return React.createElement(
//     'div', 
//     {}, 
//     React.createElement('h1', {}, 'hello world')
//     );
// }


// Nested Components, React Tools

function BookList(){
  return(
    <section>
      <Book />
      <Book />
      <Book />
      <Book />
    </section>
  );
}

const Book = () => {
  return (
    <article>
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