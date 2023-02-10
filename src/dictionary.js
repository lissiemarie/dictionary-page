import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";
import Photos from "./Photos";
import "./Dictionary.css";

export default function Dictionary() {
    let [keyword, setKeyword] = useState("");
    let [results, setResults] = useState(null);
    let [photos, setPhotos] = useState(null);

    function handleResponse(response) {
        setResults(response.data[0]);
    }

    function handlePexelsResponse(response) {
        console.log(response);
        setPhotos(response.data.photos);
    }

    function search(event) {
        event.preventDefault();
        let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`
        axios.get(apiUrl).then(handleResponse);

        let pexelsApiKey = "Y1OrwAVXMoHUaF81lM7G6qgpxNC8jbkZLHeNDGdmG5RAnUm48I3mDKTI";
        let pexelsApiUrl = `https://api.pexels.com/v1/search?query=${keyword}&per_page=3`;
        let headers = { Authorization: `Bearer ${pexelsApiKey}`};
        axios.get(pexelsApiUrl, { headers: headers}).then(handlePexelsResponse);

    }

    function handleKeywordChange(event) {
        setKeyword(event.target.value);
    }

    return (
        <div className="Dictionary">
            <form onSubmit={search}>
                <input type="search" className="search" onChange={handleKeywordChange}/>
                <input type="submit" className="submit-button" />
            </form>
            <Results results={results}/>
            <Photos photos={photos} />
        </div>
    )
}