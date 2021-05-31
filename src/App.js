import React, { useState } from "react";
import "./App.css";
import axios from "axios";

let API_URL = `https://www.googleapis.com/books/v1/volumes`;

const App = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const onInputChange = (e) => {
    setSearchTerm(e.target.value);
  };
  const fetchBooks = async () => {
    // Ajax call to API using Axios
    const result = await axios.get(`${API_URL}?q=${searchTerm}&orderBy=newest&key=${process.env.REACT_APP_BOOK_FINDER_API_KEY}`);
    // Books result
    console.log(result.data);
  };
  const onSubmitHandler = (e) => {
    // Prevent browser refreshing after form submission
    e.preventDefault();
    // Call fetch books async function
    fetchBooks();
  };


  return (
    <section>
      <form onSubmit={onSubmitHandler}>
        <label>
          <span>Search for books</span>
          <input
            type="search"

            value={searchTerm}
            onChange={onInputChange}
          />

          <button type="submit">Search</button>
        </label>
      </form>
    </section>
  );
};

export default App;
