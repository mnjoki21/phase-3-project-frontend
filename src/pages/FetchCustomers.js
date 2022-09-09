import { useEffect, useState } from "react";

function useFetchCustomers() {
    const [ customer, setCustomer ] = useState('')
    const url = 'http://localhost:9292/patients'

    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(customer => {
            setBooks(customer)
            })
        .catch(err => console.log(err))
    }, [])
    return[customer, setCustomer, url]
}

export default useFetchCustomers;