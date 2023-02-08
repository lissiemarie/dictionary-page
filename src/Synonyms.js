import React from "react";

export default function Synonyms(props) {
    if(props.synonyms.length !== 0) {
        return (
            <div className="Synonyms">
                <h4 className="middle-heading">Synonyms:</h4>
                <div className="synonym-list">
                {props.synonyms.map(function(synonyms, index) {
                    return (
                        <div key={index}>
                            <p className="synonym-word">{synonyms}</p>
                        </div>
                    )
                })}
                </div>
            </div>
        )
    } else {
        return null;
    }
}