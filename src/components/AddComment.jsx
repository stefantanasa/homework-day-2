import React, { Component } from "react";

import { Form, ToggleButtonGroup, ToggleButton } from "react-bootstrap";
class AddComment extends Component {
  render() {
    return (
      <div className="bg-dark text-white m-3">
        <div>Write a comment</div>
        <Form onSubmit={this.props.onPostComment}>
          <Form.Group controlId="exampleForm.ControlSelect1">
            <Form.Label>
              <ToggleButtonGroup
                name="radio-btn"
                onClick={(e) => this.props.getCommentRate(e.target.value)}
                type="radio"
                defaultValue={null}
              >
                <ToggleButton
                  name="radio-btn"
                  variant="danger"
                  value={1}
                  required
                >
                  1 Star
                </ToggleButton>
                <ToggleButton
                  name="radio-btn"
                  variant="danger"
                  value={2}
                  required
                >
                  2 Stars
                </ToggleButton>
                <ToggleButton
                  name="radio-btn"
                  variant="secondary"
                  value={3}
                  required
                >
                  3 Stars
                </ToggleButton>
                <ToggleButton
                  name="radio-btn"
                  variant="success"
                  value={4}
                  required
                >
                  4 Stars
                </ToggleButton>
                <ToggleButton
                  name="radio-btn"
                  variant="success"
                  value={5}
                  required
                >
                  5 Stars
                </ToggleButton>
              </ToggleButtonGroup>
            </Form.Label>
            {/* <Form.Control
              required
              as="select"
              onChange={(e) => this.props.getCommentRate(e.target.value)}
            >
              <option value={1}>1 Star</option>
              <option value={2}>2 Stars</option>
              <option value={3}>3 Stars</option>
              <option value={4}>4 Stars</option>
              <option value={5}>5 Stars</option>
            </Form.Control> */}
          </Form.Group>
          <Form.Group
            className="textarea-comment"
            required
            controlId="exampleForm.ControlTextarea1"
            onChange={(e) => this.props.getCommentText(e.target.value)}
          >
            <Form.Control required as="textarea" rows={3} />
            <button type="submit" className="btn btn-sm submit-comment">
              Send
            </button>
          </Form.Group>
        </Form>
      </div>
    );
  }
}

export default AddComment;
