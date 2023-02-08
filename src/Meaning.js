import React from "react";

import "./Dictionary.css";

export default function Meaning(props) {
    console.log(props.meaning)
    return (
        <div className="Meaning">
            <h4 className="partOfSpeech">{props.meaning.partOfSpeech}</h4>
            <p>{props.meaning.definitions[0].definition}</p>
            <p><em>{props.meaning.definitions[0].example}</em></p>
            
        </div>
    )
}