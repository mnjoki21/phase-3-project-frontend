import React from 'react'
import useFetchBooks from './FetchingBooks'
import book from "./Book";
import useFetchCustomers from './FetchCustomers'

function Books() {
  const [ books, setBooks, url ] = useFetchBooks()
  const [customer, setCustomer ] = useFetchCustomers()
  return (
    <div>
      <h3>Books Available</h3>
      <ol>
        { !books ? "Loading books..." : books.map((book) => {
          return (
            <li key={ Books?.id }>
              {/* <Book books={books} /> */}
            </li>
          )}
        )}
      </ol>
      <h3>Customers who have shopped from us:</h3>

    </div>
  )
}

export default Books