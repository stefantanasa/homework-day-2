import React, { Component } from "react";

import "./App.css";
import MyNav from "./components/MyNav";
import MyFooter from "./components/MyFooter";
import Welcome from "./components/Welcome";
import LatestRelease from "./components/LatestRelease";
import { Col, Row } from "react-bootstrap";
import CommentArea from "./components/CommentArea";
import horror from "./Data/horror.json";

class App extends Component {
  state = {
    newComment: { rate: null, comment: "" },
    asinSelected: null,
    data: [],
    comments: [],
    commentToDelete: null,
  };
  books = horror.slice(0, 115);

  selectBook = (asin) => {
    console.log("OK, works!", asin);
    this.setState({
      ...this.state,
      asinSelected: asin,
    });
  };
  getCommentId = (commentId) => {
    console.log(commentId);
    this.setState({
      ...this.state,
      commentToDelete: commentId,
    });
  };

  getElementId = (elementId) => {
    console.log(elementId);
    this.setState({
      ...this.state,
      newComment: { rate: elementId },
    });
  };

  fetchData = async () => {
    try {
      if (this.state.asinSelected) {
        let response = await fetch(
          `https://striveschool-api.herokuapp.com/api/comments/${this.state.asinSelected}`,
          {
            headers: {
              Authorization:
                "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MWIwOWZmNTRjZmY1ZjAwMTU5MGJkYWUiLCJpYXQiOjE2NTA2MzkyOTAsImV4cCI6MTY1MTg0ODg5MH0.7Nkan4-wzQ92nOq0FpNIvxiCPAJYIAQpdk2j0qrDOMg",
            },
          }
        );

        if (response.ok) {
          response = await response.json();
          this.setState({
            ...this.state,
            comments: response,
          });
          console.log("CDM");
        }
      } else {
        console.log("No Asin");
      }
    } catch (error) {
      console.log(error);
    }
  };
  onDeleteComment = async (commentId) => {
    try {
      const data = await fetch(
        `https://striveschool-api.herokuapp.com/api/comments/${commentId}`,
        {
          method: "DELETE",

          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MWIwOWZmNTRjZmY1ZjAwMTU5MGJkYWUiLCJpYXQiOjE2NTA2NjM3MDYsImV4cCI6MTY1MTg3MzMwNn0.t-bhGh4Ste0C-qGe1NWOGB8jhgMqxJtbscKzTT-wrio",
            "Content-type": "application/json",
          },
        }
      );
      if (data.ok) {
        console.log("Comment Deleted!");
      }
    } catch (error) {
      console.log("❌There is an error: ", error);
    }
    console.log("Something happened!");
  };
  componentDidUpdate = async (prevProps, PrevState) => {
    if (PrevState.asinSelected !== this.state.asinSelected) {
      console.log("fetch");
      await this.fetchData();
    } else {
      console.log("nofetch");
    }
    if (PrevState.commentToDelete !== this.state.commentToDelete) {
      console.log("delete");
      await this.onDeleteComment(this.state.commentToDelete);
      await this.fetchData();
    } else {
      console.log("no delete");
    }
  };

  componentDidMount = async () => {
    this.setState({
      ...this.state,
      data: this.books,
    });
  };
  render() {
    return (
      <div className="App bg-dark">
        <MyNav />
        <Welcome />
        <Row>
          <Col md={8}>
            <LatestRelease
              books={this.state.data}
              selectBook={this.selectBook}
            />
          </Col>
          <Col>
            <div>
              <h1 className="text-white latest-release">Comments</h1>
              <CommentArea
                comments={this.state.comments}
                onDelete={this.getCommentId}
                getElementId={this.getElementId}
              />
            </div>
          </Col>
        </Row>
        <MyFooter />
      </div>
    );
  }
}

export default App;
