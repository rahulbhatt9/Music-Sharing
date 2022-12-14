import React from "react";
import Image from "../assets/reviewImage.jpg";
import "../styles/ReviewForm.css";

function ReviewForm() {
  return (
    <div className="reviewForm">
      <div
        className="leftSide"
        style={{ backgroundImage: `url(${Image})` }}
      ></div>
      <div className="rightSide">
        <h1> Review Artist</h1>

        <form id="review-form" method="POST">
          <label htmlFor="name">Rating (1 - 10)</label>
          <input name="name" placeholder="Enter rating..." type="number" min="1" max="10"/>
          <label htmlFor="email">Email</label>
          <input name="email" placeholder="Enter email..." type="email" />
          <label htmlFor="message">Review Message</label>
          <textarea
            rows="6"
            placeholder="Enter message..."
            name="message"
            required
          ></textarea>
          <button type="submit"> Send Review</button>
        </form>
      </div>
    </div>
  );
}

export default ReviewForm;
