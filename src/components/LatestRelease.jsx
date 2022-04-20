import React, { Component } from "react";
import { Container, Navbar, Nav } from "react-bootstrap";
import Book from "./Book";
import horror from "../Data/horror.json";
import OneCard from "./OneCard";

const LatestRelease = () => {
  let books = horror.slice(0, 15);
  console.log(books);

  return (
    <div>
      <div className=" jumbotron-fluid bg-dark">
        <h1 className="text-white">Latest Release</h1>
      </div>
      <div className="container">
        <div className="row">
          {books.map((book) => (
            <OneCard
              title={book.title}
              category={book.category}
              image={book.img}
              key={book.asin}
              price={book.price}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default LatestRelease;
