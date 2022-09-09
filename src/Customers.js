import React from 'react'
import useFetchCustomers from './FetchCustomers'

function Customers({ custom }) {
  const [ customer, setCustomer ] = useFetchCustomers()
  const deleteCustomer = () => {
    fetch(`http://localhost:9292/customers/${custom?.id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      }
    })
    .then(res => res.json())
      .then(customer => console.log(customer))
      .catch(err => console.log(err))
    fetch('http://localhost:9292/patients')
      .then(res => res.json())
      .then(data => {
        setCustomer(customer)
        console.log(customer)
      })
    .catch(err => console.loh(err))
  }
  return (
    <>
      { `${custom?.name} ` }  <span style={{cursor: "pointer"}} onClick={deletePat}>🗑</span>
    </>
  )
}
export default Customers