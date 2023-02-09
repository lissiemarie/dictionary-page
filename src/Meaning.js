import React from "react";
import Synonyms from "./Synonyms";

import "./Dictionary.css";

export default function Meaning(props) {
    return (
        <div className="Meaning">
            <h4 className="partOfSpeech">{props.meaning.partOfSpeech}</h4>
            {props.meaning.definitions.map(function(definition, index){
                return(
                    <div key={index}>
                        <p>
                        <strong>▸{definition.definition}</strong>
                        <br />
                        <em>{definition.example}</em>
                        </p>
                        <Synonyms synonyms={definition.synonyms} />
                    </div>
                )
            })} 
        </div>
    )
}