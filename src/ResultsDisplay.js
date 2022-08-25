import React from "react";
import Meaning from "./Meaning.js";

export default function ResultsDisplay(props) {
  //console.log(props.results);
  if (props.results) {
    return (
      <div className="ResultsDisplay">
        <h2>{props.results.word}</h2>
        {props.results.meanings.map(function (meaning, index) {
          return (
            <div key={index}>
              <Meaning meaning={meaning} />
            </div>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}
