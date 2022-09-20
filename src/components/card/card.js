import React from "react";
import "./card.css";

const Card = React.memo(({ robot }) => {
  return (
    <section className="card">
      <figure>
        <img src={`https://robohash.org/${robot.id}?200x200`} alt="robot"></img>
      </figure>
      <h2>{robot.name}</h2>
      <p>{robot.email}</p>
    </section>
  );
});

export default Card;
