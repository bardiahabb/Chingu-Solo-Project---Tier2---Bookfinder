import Head from "next/head";
import BookCard from "../components/BookCard";
import { useState } from "react";

export default function Home() {
  const handleSearchBoxSubmit = (event) => {
    event.preventDefault();

    const fetchBooks = async () => {
      try {
        const response = await fetch(
          `https://www.googleapis.com/books/v1/volumes?q=${searchInput}`
        );
        if (!response.ok) {
          setSearchResults("Error");
          throw new Error("Error occurred while fetching data");
        }
        const data = await response.json();
        setSearchResults(data.items);
      } catch (err) {
        console.log(err);
      }
    };

    fetchBooks();
  };
  const handleSearchBoxChange = (event) => {
    setSearchInput(event.target.value);
  };
  const [searchInput, setSearchInput] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  return (
    <div>
      <Head>
        <title>Find Your Book!</title>
        <meta name="description" content="BookFinder" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <form
          className="mt-12 mb-20 flex justify-center"
          onSubmit={handleSearchBoxSubmit}
        >
          <input
            className="border-blue-200 border-2 rounded-lg pl-3 focus:border-blue-400 outline-none transition text-lg font-normal text-gray-600 w-[50vw]"
            type="text"
            onChange={handleSearchBoxChange}
            value={searchInput}
            placeholder="Enter Book Title ..."
            name="inputField"
            required
          />
          <button
            className="bg-white text-blue-500 hover:text-slate-100 font-medium text-xl ml-10 rounded-lg px-6 pt-2 pb-3  hover:bg-blue-500 border-blue-500 border-4 transition active:bg-blue-50 active:border-blue-50 shadow-lg shadow-gray-500 active:shadow-sm active:shadow-slate-800"
            type="submit"
          >
            search
          </button>
        </form>
        <div className="flex flex-wrap transition justify-center">
          {searchResults === "Error" ? (
            <div className="text-4xl font-black text-red-400 leading-loose">
              Error occurred while fetching data
              <br />
              please try again
            </div>
          ) : searchResults === undefined ? (
            <div className="text-4xl font-black text-red-400">
              No results found
            </div>
          ) : (
            searchResults.map((book) => (
              <BookCard
                key={book.id}
                CoverImage={
                  book.volumeInfo.imageLinks == undefined
                    ? undefined
                    : book.volumeInfo.imageLinks
                }
                Title={book.volumeInfo.title}
                Author={book.volumeInfo.authors}
                Publisher={book.volumeInfo.publisher}
                BookUrl={book.volumeInfo.infoLink}
              />
            ))
          )}
        </div>
      </div>
    </div>
  );
}
