import React from 'react'
import useFetchCustomers from './FetchCustomers'

function Customers({ custom }) {
  const [ customer, setCustomer ] = useFetchCustomers()
  const deleteCustomer = () => {
    fetch(`https://books-endpoints.herokuapp.com/customers/${custom?.id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then(res => res.json())
      .then(data => console.log(data))
      .catch(err => console.log(err));
    fetch("https://books-endpoints.herokuapp.com/customers")
      .then(res => res.json())
      .then(data => {
        setCustomer(customer);
        console.log(customer);
      })
      .catch((err) => console.log(err));
  }
  return (
    <>
      { `${custom?.name}` }  <span style={{cursor: "pointer"}} onClick={deleteCustomer}>🗑</span>
    </>
  )
}
export default Customers