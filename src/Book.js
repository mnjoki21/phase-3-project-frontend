import React from 'react'
import useFetchBooks from './FetchingBooks'


function Book({ books }) {
    const [ book, setBook ] = useFetchBooks()
    const deleteBook = () => {
        fetch(`http://localhost:9292/books/${book?.id}`, {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
        })
            .then(res => res.json())
            .then(books => console.log(books))
            .catch(err => console.log(err))
        fetch('http://localhost:9292/books')
            .then(res => res.json())
            .then(data => {
                setBook(books)
                console.log(books)
            })
        .catch(err => console.log(err))
        
    
    }
  return (
      <>
          
          { `${book?.title} ${book?.author} - ${book?.publisher || book?.genre} ` } <button style={ { cursor:"pointer" } } onClick=
          {deleteBook}></button>
      </>
  )
}

export default Book