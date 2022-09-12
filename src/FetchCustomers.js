import { useEffect, useState } from "react";


function useFetchCustomers() {
    const [ customer, setCustomer ] = useState('')
    const url = "https://books-endpoints.herokuapp.com/customers"

    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(customer => {
            setCustomer(customer)
            })
        .catch(err => console.log(err))
    }, [])
    return[customer, setCustomer, url]
}

export default useFetchCustomers;