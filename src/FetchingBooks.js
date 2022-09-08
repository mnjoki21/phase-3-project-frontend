import { useEffect, useState } from "react";

function useFetchBooks() {
    const [ book, setBooks ] = useState('')
    const url = 'http://localhost:9292/books'

    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(books => {
            setBooks(books)
            })
        .catch(err => console.log(err))
    }, [])
    return[doc, setDoc, url]
}

export default useFetchBooks