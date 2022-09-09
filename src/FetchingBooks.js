import { useEffect, useState } from "react";

function useFetchBooks() {
  const [books, setBooks] = useState("");
  const url = "http://localhost:9292/books";

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((books) => {
        setBooks(books);
      })
      .catch((err) => console.log(err));
  }, []);
  return [books, setBooks, url];
}

export default useFetchBooks;
