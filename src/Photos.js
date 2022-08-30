import React from "react";
import "./Photos";

export default function Photos(props) {
  if (props.photos) {
    console.log(props.photos);
    return (
      <section className="Photos">
        <div className="row">
          {props.photos.map(function (photo, index) {
            console.log(photo);
            return (
              <div className="col-2" key={index}>
                <a href={photo.src.original} target="_blank" rel="norefferer">
                  <img src={photo.src.landscape} className="img-fluid" />;
                </a>
              </div>
            );
          })}
        </div>
      </section>
    );
  } else {
    return null;
  }
}
