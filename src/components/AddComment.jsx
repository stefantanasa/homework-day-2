import React, { Component } from "react";

import { Form, Button } from "react-bootstrap";
class AddComment extends Component {
  state = {
    rate: 5,
    comment: "Worked",
    elementId: this.props.asin,
  };

  onCommentWriting = (e) => {
    this.setState({
      ...this.state,
    });
    console.log(this.state);
  };

  onSelectRating = (e) => {
    console.log(e.target.value);
    this.setState({
      ...this.state,
      rate: e.target.value,
    });
  };
  submitForm = (e) => {
    e.preventDefault();
    this.saveData();
    this.setState({
      ...this.state,
    });
  };
  saveData = async (e) => {
    try {
      const data = await fetch(
        "https://striveschool-api.herokuapp.com/api/comments/",
        {
          method: "POST",
          body: JSON.stringify(this.state),
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MWIwOWZmNTRjZmY1ZjAwMTU5MGJkYWUiLCJpYXQiOjE2NTA2NjM3MDYsImV4cCI6MTY1MTg3MzMwNn0.t-bhGh4Ste0C-qGe1NWOGB8jhgMqxJtbscKzTT-wrio",
            "Content-type": "application/json",
          },
        }
      );
      if (data.ok) {
        console.log("Worked!");
        console.log(data);
      }
    } catch (error) {
      console.log("❌There is an error: ", error);
    }
    console.log("Something happened!");
  };

  render() {
    return (
      <div className="bg-dark text-white ml-3">
        <Form onSubmit={this.submitForm}>
          <Form.Group controlId="exampleForm.ControlSelect1">
            <Form.Label>Write a comment to: {this.props.asin} </Form.Label>
            <Form.Control as="select" onClick={this.onSelectRating}>
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
            onChange={this.onCommentWriting}
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
