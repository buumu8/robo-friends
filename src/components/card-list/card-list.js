import React from "react";
import Card from "../card/card";
import "./card-list.css";

export default function CardList({ robots }) {
  return (
    <section className="card-list">
      {robots.length ? (
        robots.map((robot) => <Card robot={robot} key={robot.id}></Card>)
      ) : (
        <p>Loading...</p>
      )}
    </section>
  );
}
