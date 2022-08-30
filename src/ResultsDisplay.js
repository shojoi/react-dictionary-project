import React from "react";
import Meaning from "./Meaning.js";
import Phonetic from "./Phonetic.js";

export default function ResultsDisplay(props) {
  //console.log(props.results);
  if (props.results) {
    return (
      <div className="ResultsDisplay">
        <section>
          <h2>{props.results.word}</h2>

          {props.results.phonetics.map(function (phonetic, index) {
            return (
              <div key={index}>
                <Phonetic phonetic={phonetic} />
              </div>
            );
          })}
        </section>

        {props.results.meanings.map(function (meaning, index) {
          return (
            <div key={index}>
              <section>
                <Meaning meaning={meaning} />
              </section>
            </div>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}
