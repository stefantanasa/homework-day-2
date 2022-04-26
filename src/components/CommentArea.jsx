import React, { Component } from "react";
import CommentsList from "./CommentsList";
class CommentArea extends Component {
  // Functions to pass on as props for AddComment Component

  // onPostComment = async (e) => {
  //   e.preventDefault();
  //   try {
  //     const data = await fetch(
  //       "https://striveschool-api.herokuapp.com/api/comments/",
  //       {
  //         method: "POST",
  //         body: JSON.stringify(this.state.commentToAdd),
  //         headers: {
  //           Authorization:
  //             "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MWIwOWZmNTRjZmY1ZjAwMTU5MGJkYWUiLCJpYXQiOjE2NTA2NjM3MDYsImV4cCI6MTY1MTg3MzMwNn0.t-bhGh4Ste0C-qGe1NWOGB8jhgMqxJtbscKzTT-wrio",
  //           "Content-type": "application/json",
  //         },
  //       }
  //     );
  //     if (data.ok) {
  //       console.log("Worked!");
  //       console.log(data);
  //     }
  //   } catch (error) {
  //     console.log("❌There is an error: ", error);
  //   }
  //   console.log("Something happened!");
  // };

  // onSelectRating = (e) => {
  //   console.log(e.target.value);
  //   this.setState({
  //     ...this.state,
  //     commentToAdd: { ...this.state.commentToAdd, rate: e.target.value },
  //   });
  // };

  // onCommentWriting = (e) => {
  //   this.setState({
  //     ...this.state,
  //     commentToAdd: { ...this.state.commentToAdd, comment: e.target.value },
  //   });
  //   console.log(this.state);
  // };

  // //  Functions to pass as props for CommentsList

  // onDeleteComment = async (commentId) => {
  //   try {
  //     const data = await fetch(
  //       `https://striveschool-api.herokuapp.com/api/comments/${commentId}`,
  //       {
  //         method: "DELETE",

  //         headers: {
  //           Authorization:
  //             "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MWIwOWZmNTRjZmY1ZjAwMTU5MGJkYWUiLCJpYXQiOjE2NTA2NjM3MDYsImV4cCI6MTY1MTg3MzMwNn0.t-bhGh4Ste0C-qGe1NWOGB8jhgMqxJtbscKzTT-wrio",
  //           "Content-type": "application/json",
  //         },
  //       }
  //     );
  //     if (data.ok) {
  //       console.log("Comment Deleted!");
  //     }
  //   } catch (error) {
  //     console.log("❌There is an error: ", error);
  //   }
  //   console.log("Something happened!");
  // };

  // fetchData = async () => {
  //   try {
  //     if (this.props.isSelected) {
  //       let response = await fetch(
  //         `https://striveschool-api.herokuapp.com/api/comments/${this.props.asinSelected}`,
  //         {
  //           headers: {
  //             Authorization:
  //               "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MWIwOWZmNTRjZmY1ZjAwMTU5MGJkYWUiLCJpYXQiOjE2NTA2MzkyOTAsImV4cCI6MTY1MTg0ODg5MH0.7Nkan4-wzQ92nOq0FpNIvxiCPAJYIAQpdk2j0qrDOMg",
  //           },
  //         }
  //       );

  //       if (response.ok) {
  //         response = await response.json();
  //         this.setState({
  //           ...this.state.data,
  //           data: response,
  //         });
  //         console.log("CDM");
  //       }
  //     } else {
  //       console.log("No Asin");
  //     }
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  componentDidMount = async () => {};
  render() {
    return (
      <div className="bg-dark text-white ml-3">
        <h1>Comments here</h1>
        <CommentsList
          comments={this.props.comments}
          onDelete={this.props.onDelete}
          getElementId={this.props.getElementId}
        />
      </div>
    );
  }
}

export default CommentArea;
