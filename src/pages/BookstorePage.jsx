import { useEffect, useState } from "react";
import Header from "../components/Header";
import Main from "../components/Main";
import { apiGetAllCustomers } from "../services/Bookstore/apiBookstoreCustomerService";

export default function BookstorePage() {
  const [allCustomers, setAllCustomers] = useState([]);

  useEffect(() => {
    apiGetAllCustomers().then((allCustomers) => {});
  });

  return (
    <>
      <Header>Bookstore</Header>

      <Main>The content is here!</Main>
    </>
  );
}
