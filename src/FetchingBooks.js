import { useEffect, useState } from "react";

function useFetchBooks() {
  const [books, setbooks] = useState([]);
  const url = "https://books-endpoints.herokuapp.com/books";

    useEffect(() =>{
        fetch("https://books-endpoints.herokuapp.com/books")
          .then((res) => res.json())
          .then((books) => setbooks(books))
          .catch((err) => console.log(err));
    }, []);
    // console.log(books)
  return [books, setbooks, url];
}


// function useFetchBooks() {
//     const [ books, setBooks ] = useState([])
//     useEffect(() => {
//         fetch("http://localhost:9292/books")
//             .then((res) => res.json())
//             .then((data) => {
//                 setBooks(data)
//         })
//     }, [])
//      console.log(books)
//     console.log(useFetchBooks)
//     return (
//         <div>{ books.map((book) => {
//             return (
//                 <h1>{ book.title}</h1>
//             )
//         }
//             ) }</div>
        
//     )
// }

export default useFetchBooks;
