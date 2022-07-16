import { useEffect, useState } from "react";
import Books from "../components/Books";
import Header from "../components/Header";
import Main from "../components/Main";
import { apiGetAllBooks } from "../services/Bookstore/apiBookstoreBookService";

export default function RatingstorePage() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    apiGetAllBooks().then((apiBooks) => {
      console.log(apiBooks);
      setBooks(apiBooks);
    });
  }, []);

  return (
    <>
      <Header>Bookstore</Header>

      <Main>
        <Books>{books}</Books>
      </Main>
    </>
  );
}
