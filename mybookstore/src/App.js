import React from 'react'
import ReactDom from "react-dom"
import "./index.css"


const book = [
  {
    img:'https://images-eu.ssl-images-amazon.com/images/I/41atPf++R5L._AC_UL604_SR200,200_.jpg',
    title:'Dear Stranger, You Deserve To Be Loved',
    author:'Ashish Bagrecha',
  },
  {
    img:'https://images-eu.ssl-images-amazon.com/images/I/71l9pCV99FL._AC_UL604_SR200,200_.jpg',
    title:'It Ends With Us: A Novel: Volume 1',
    author:'Colleen Hoover',
  },
  {
    img:'https://images-eu.ssl-images-amazon.com/images/I/813uPMOnskL._AC_UL604_SR200,200_.jpg',
    title:'You Can',
    author:'George Matthew Adams',
  },
  {
    img:'https://images-eu.ssl-images-amazon.com/images/I/710jnzKlDTL._AC_UL604_SR200,200_.jpg',
    title:'Attitude Is Everything',
    author:'Jeff Keller',
  },
  {
    img:'https://images-eu.ssl-images-amazon.com/images/I/814IUt6WOKL._AC_UL604_SR200,200_.jpg',
    title:'Deep Work',
    author:'Cal Newport',
  },
  {
    img:'https://images-eu.ssl-images-amazon.com/images/I/71e9MY-XE9L._AC_UL604_SR200,200_.jpg',
    title:'The Blue Umbrella',
    author:'Ruskin Bond',
  },
  {
    img:'https://images-eu.ssl-images-amazon.com/images/I/71aFt4+OTOL._AC_UL302_SR200,200_.jpg',
    title:'The Alchemist',
    author:'Paulo Coelho ',
  },
  {
    img:'https://images-eu.ssl-images-amazon.com/images/I/61kRkfsIMUL._AC_UL302_SR200,200_.jpg',
    title:'DO EPIC SHIT',
    author:'Ankur Warikoo',
  },
  {
    img:'https://images-eu.ssl-images-amazon.com/images/I/71rbw7ofP1L._AC_UL302_SR200,200_.jpg',
    title:'I Wish I Could Tell Her ',
    author:'Ajay K Pandey',
  } 
]
  


function BookList() {
  return(
    <section className='bookList'>
      {book.map((book) => {
        const {img,title,author } = book;
        return <Book book={book}></Book>
      })}
    </section>
  )
}

const Book = (props) => {
  const {img , title , author} = props.book
  return(
    <article className='book'>
      <img src={img}alt=''/>
      <h1>{title}</h1>
      <h4>{author}</h4>
    </article>
  ) 
}


export default BookList;