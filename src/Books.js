import React from 'react'
import useFetchBooks from './FetchingBooks'
import Book from "./Book";
import useFetchCustomers from './FetchCustomers'
import Customers from './Customers';

function Books() {
  const [ books, setBooks, url ] = useFetchBooks()
  const [ customer, setCustomer ] = useFetchCustomers()
  console.log(books)
  return (
    <div>
      <h3>Books Available</h3>
      <ol>
        { !books ? "Loading books..." : books.map((book) => {
          return (
            <li >
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
              <Customers />
            </li>
          )
        })}
      </ol>

    </div>
  )
}

export default Books