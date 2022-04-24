import React, { Component } from "react";

import AddComment from "./AddComment";
import CommentsList from "./CommentsList";
class CommentArea extends Component {
  state = { data: [], selected: false };

  componentDidMount = async () => {
    try {
      let response = await fetch(
        `https://striveschool-api.herokuapp.com/api/comments/${this.props.asin}`,
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
          ...this.state.data,
          data: response,
        });
      }
    } catch (error) {
      console.log(error);
    }
  };
  render() {
    return (
      <div className="bg-dark text-white ml-3">
        {this.props.isSelected && (
          <AddComment className="under-card" asin={this.props.asin} />
        )}
        {this.props.isSelected && <CommentsList comments={this.state.data} />}
      </div>
    );
  }
}

export default CommentArea;
