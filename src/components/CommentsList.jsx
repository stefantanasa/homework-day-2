import React, { Component } from "react";
import { ListGroup, Badge } from "react-bootstrap";

const CommentsList = ({ comments }) => {
  return (
    <div>
      <ListGroup as="ol">
        {comments.map((element) => (
          <ListGroup.Item
            key={element._id}
            as="li"
            className="ml-3 text-dark d-flex justify-content-between align-items-start"
          >
            <div className="ms-2 me-auto">
              <div className="fw-bold">
                Rate:
                <Badge variant="primary" pill>
                  {element.rate}
                </Badge>
              </div>
              {element.comment}
            </div>
          </ListGroup.Item>
        ))}
      </ListGroup>
    </div>
  );
};

export default CommentsList;
