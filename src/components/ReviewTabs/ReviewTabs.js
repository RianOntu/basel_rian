import React from "react";
import ReviewList from "../ReviewList/ReviewList";
import ReviewForm from "../ReviewForm/ReviewForm";

function ReviewTabs() {
  return (
    <div className="App flex flex-col lg:flex-row  items-start justify-between gap-36">
      <ReviewList className="w-1/2" />
      <ReviewForm className="w-1/2"  />
    </div>
  );
}

export default ReviewTabs;
