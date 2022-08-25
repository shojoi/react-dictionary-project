import React, { useState } from "react";
import axios from "axios";
import ResultsDisplay from "./ResultsDisplay";

export default function Dictionary() {
  let [keyword, setKeyword] = useState("");
  let [results, setResults] = useState(null);

  function handleResponse(response) {
    console.log(`Response from axios call is ${response.data[0]}`);
    setResults(response.data[0]);
  }

  function search(event) {
    event.preventDefault();

    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    console.log(`API URl is ${apiUrl}`);

    axios.get(apiUrl).then(handleResponse);
  }

  function handlekeywordChange(event) {
    console.log(`Keyword entered is ${event.target.value}`);
    setKeyword(event.target.value);
  }

  return (
    <div className="Dictionary">
      <h2> What word do you want to lookup</h2>
      <form onSubmit={search}>
        <input type="search" onChange={handlekeywordChange} />
      </form>
      <ResultsDisplay results={results} />
    </div>
  );
}
