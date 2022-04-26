import React, { Component } from "react";

import { ListGroup } from "react-bootstrap";
import AddComment from "./AddComment";
const CommentsList = ({
  comments,
  onDelete,
  getCommentRate,
  getCommentText,
  onPostComment,
}) => {
  return (
    <React.Fragment>
      {comments.length > 0 && (
        <AddComment
          onPostComment={onPostComment}
          getCommentRate={getCommentRate}
          getCommentText={getCommentText}
        />
      )}
      <ListGroup className="">
        {comments.map((com) => (
          <div key={com._id}>
            <p>Rating: {com.rate}</p>
            <ListGroup.Item variant="info">
              Comment:{com.comment}
              <button
                type="button"
                onClick={() => onDelete(com._id)}
                className="btn btn-danger"
              >
                <i className="fa-solid fa-trash-can"></i>
              </button>
            </ListGroup.Item>
          </div>
        ))}
      </ListGroup>
    </React.Fragment>
  );
};

export default CommentsList;
