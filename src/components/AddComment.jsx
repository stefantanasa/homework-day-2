import React, { Component } from "react";

import { Form } from "react-bootstrap";
class AddComment extends Component {
  render() {
    return (
      <div className="bg-dark text-white ml-3">
        <Form onSubmit={this.props.onPostComment}>
          <Form.Group controlId="exampleForm.ControlSelect1">
            <Form.Label>Write a comment </Form.Label>
            <Form.Control as="select" onChange={this.props.getElementId}>
              <option value={1}>1 Star</option>
              <option value={2}>2 Stars</option>
              <option value={3}>3 Stars</option>
              <option value={4}>4 Stars</option>
              <option value={5}>5 Stars</option>
            </Form.Control>
          </Form.Group>
          <Form.Group
            className="textarea-comment"
            controlId="exampleForm.ControlTextarea1"
            onChange={this.props.onCommentWriting}
          >
            <Form.Control required as="textarea" rows={3} />
            <button type="submit" className="submit-comment">
              Send
            </button>
          </Form.Group>
        </Form>
      </div>
    );
  }
}

export default AddComment;
