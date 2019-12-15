import React, { useEffect, useState } from "react";
import Books from "./Books";
import useDebounce from "./hooks/useDebounce";
import { getBooks } from "../services/books";
import Search from "./Search";

const Dashboard = () => {
  const [books, setBooks] = useState([]);
  const [totalBooks, setTotalBooks] = useState(0);
  const [searchTerm, setSearchTerm] = useState("Lord of the ring");

  const debounceSearchTerm = useDebounce(searchTerm, 500);

  useEffect(() => {
    async function fetchData(searchTerm) {
      try {
        const bookResults = await getBooks(searchTerm);

        return bookResults.data.data;
      } catch (error) {
        throw error;
      }
    }

    if (debounceSearchTerm) {
      fetchData(debounceSearchTerm).then(response => {
        setBooks(response.items);
        setTotalBooks(response.totalItems);
      });
    } else {
      fetchData().then(response => {
        setBooks(response.items);
        setTotalBooks(response.totalItems);
      });
    }
  }, [debounceSearchTerm]);

  const onHandleSearch = e => {
    setBooks([]);
    setSearchTerm(e.target.value === "" ? "Lord of the ring" : e.target.value);
  };

  return (
    <div>
      <h1>B-Books - Store</h1>
      <Search onChange={onHandleSearch} />
      {books.length > 0 ? (
        <Books books={books} totalBooks={totalBooks} />
      ) : (
        <p className="spinner">Loading...</p>
      )}
    </div>
  );
};

export default Dashboard;
