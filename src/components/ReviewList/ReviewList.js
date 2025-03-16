import React from "react";
import { FaStar } from "react-icons/fa";

const reviews = [
  { name: "Ola", date: "April 6, 2016", comment: "Good stuff" },
  { name: "gurugeler", date: "June 4, 2016", comment: "Wow! Amazing Stuff!" },
  { name: "gurugeler", date: "June 4, 2016", comment: "Such a great Thing" },
];

const ReviewList = () => {
  return (
    <div className="w-full">
      
      {reviews.map((review, index) => (
        <div key={index} className="mt-3 w-full">
          <div className="flex items-start justify-between w-full">
            <div>
              <strong>{review.name}</strong> - <em>{review.date}</em>
              <p>{review.comment}</p>
            </div>
            <div className="flex items-center">
                <FaStar/>
                <FaStar/>
                <FaStar/>
                <FaStar/>
                <FaStar/>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ReviewList;
