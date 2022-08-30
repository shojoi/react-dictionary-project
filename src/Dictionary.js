import React, { useState } from "react";
import axios from "axios";
import ResultsDisplay from "./ResultsDisplay";
import Photos from "./Photos";
import "./Dictionary.css";

export default function Dictionary() {
  let [keyword, setKeyword] = useState("");
  let [results, setResults] = useState(null);
  let [pageLoaded, setPageLoaded] = useState(false);
  let [photos, setPhotos] = useState(null);

  function handleDictionaryResponse(response) {
    console.log(`Response from Dictionary axios call is ${response.data[0]}`);
    setResults(response.data[0]);
  }

  function handlePexelsResponse(response) {
    console.log(`Response from Pexels axios call is ${response.data.photos}`);
    setPhotos(response.data.photos);
  }

  function search() {
    let dictionaryApiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    console.log(`API URl is ${dictionaryApiUrl}`);

    axios.get(dictionaryApiUrl).then(handleDictionaryResponse);

    let pexelsApiKey =
      "563492ad6f917000010000018b903e74b7ea4b0692abc1979622c222";
    let pexelsApiUrl = `https://api.pexels.com/v1/search?query=${keyword}&per_page=6`;
    let headers = { Authorization: `Bearer ${pexelsApiKey}` };

    axios.get(pexelsApiUrl, { headers: headers }).then(handlePexelsResponse);

    console.log(`Pexels URL is ${pexelsApiUrl}`);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handlekeywordChange(event) {
    console.log(`Keyword entered is ${event.target.value}`);
    setKeyword(event.target.value);
  }

  function load() {
    setPageLoaded(true);
    search();
  }

  if (pageLoaded) {
    return (
      <div className="Dictionary">
        <section>
          <form onSubmit={handleSubmit} defaultValue={"shobha"}>
            <input
              type="search"
              placeholder="Search for a word"
              onChange={handlekeywordChange}
            />
          </form>
        </section>
        <ResultsDisplay results={results} />
        <Photos photos={photos} />
      </div>
    );
  } else {
    load();
    return "Loading..";
  }
}
