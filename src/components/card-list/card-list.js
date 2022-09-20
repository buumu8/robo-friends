import React from "react";
import Card from "../card/card";
import "./card-list.css";

export default function CardList({ robots, loading }) {
  return (
    <section className="card-list">
      {!loading ? (
        robots.map((robot) => <Card robot={robot} key={robot.id}></Card>)
      ) : (
        <p>Loading...</p>
      )}
    </section>
  );
}
