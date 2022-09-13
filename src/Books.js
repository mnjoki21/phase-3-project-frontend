import React from 'react'
import useFetchBooks from './FetchingBooks'
import Book from "./Book";
import useFetchCustomers from './FetchCustomers'
import Customers from './Customers';

function Books() {
  const [ books] = useFetchBooks()
  const [ customer] = useFetchCustomers()
  console.log(books)
  return (
    <div>
      <h3>Books Available:</h3>
      <ol>
        { !books ? "Loading books..." : books?.map((book) => {
          return (
            <li key = {book?.id} >
              <Book books={book.title} />
            </li>
          )}
        )}
      </ol>
      <h3>Customers who have shopped from us:</h3>
      <ol>
        { !customer ? 'Loading customers...' : customer?.map((customer) => {
          return (
            <li key={ customer?.id }>
              <Customers customer={customer}  />
            </li>
          )
        })}
      </ol>

    </div>
  )
}

export default Books