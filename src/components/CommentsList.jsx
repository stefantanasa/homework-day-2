import React, { Component } from "react";
import { ListGroup, Badge } from "react-bootstrap";

const CommentsList = ({ comments }) => {
  let deleteComment = async (commentId) => {
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

  return (
    <div>
      <ListGroup as="ol">
        {comments.map((element) => (
          <div key={element._id}>
            <ListGroup.Item as="li" className="ml-2 text-dark comments-list">
              <div className="">
                <div className="fw-bold">
                  Rate:
                  <Badge variant="primary" pill>
                    {element.rate}
                  </Badge>
                </div>
                Comment:
                {element.comment}
              </div>
            </ListGroup.Item>
            <button
              key={element._id}
              onClick={() => this.props.onDeleteComment(element._id)}
              className="btn btn-warning delete-btn"
            >
              <i className="fa-solid fa-trash-can"></i>
            </button>
          </div>
        ))}
      </ListGroup>
    </div>
  );
};

export default CommentsList;
