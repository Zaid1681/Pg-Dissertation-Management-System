import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const domains = [
  "Technology",
  "Science",
  "Business",
  "Health",
  "Education",
  "Arts",
  "Sports",
  "Entertainment",
  "Environment",
  "Social Sciences",
  // Add more domains as needed
];

const institutes = [
  "University of Delhi",
  "Andhra University",
  "Harisingh Vishwavidyalay",
  "Assam University",
  "Madurai Kamaraj University",
  "Bundelkhand University",
  "Periyar University",
];

function SearchBar() {
  const [title, setTitle] = useState("");
  return (
    <div>
      <form className="sm:flex sm:items-center">
        <label
          htmlFor="default-search"
          className="mb-2 text-sm text-large text-gray-900 sr-only dark:text-white"
        >
          Search
        </label>
        <div className="relative sm:flex-grow">
          <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <svg
              className="w-4 h-4 text-gray-500 dark:text-gray-400"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
              />
            </svg>
          </div>
          <input
            type="search"
            id="default-search"
            onChange={(e) => {
              setTitle(e.target.value);
            }}
            className="block w-full xl:w-96 p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Search Dissertations with title"
            required
          />

        </div>
        <div className="flex flex-row">
          {/* <select className="block w-full sm:w-auto mt-4 sm:mt-0 sm:ml-2 text-white p-2 border border-gray-300 rounded-lg bg-gray-800 h-[55px] dark:border-gray-600">
            <option value="" disabled selected>
              Select a domain
            </option>
            {domains.map((domain) => (
              <option key={domain} value={domain}>
                {domain}
              </option>
            ))}
          </select>

          <select className="block w-full sm:w-auto mt-4 sm:mt-0 sm:ml-2 text-white p-2 border border-gray-300 rounded-lg bg-gray-800 dark:border-gray-600">
            <option value="" disabled selected>
              Select an Institute
            </option>
            {institutes.map((institute) => (
              <option key={institute} value={institute}>
                {institute}
              </option>
            ))}
          </select> */}
          <NavLink to={`/table?title=${title}`}>
            <button
              type="submit"
              className="mt-4 sm:mt-0 sm:ml-2 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-4  dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 "
            >
              Search
            </button>
          </NavLink>
        </div>
      </form>
    </div>
  );
}

export default SearchBar;
