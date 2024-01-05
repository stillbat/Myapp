"use client";
import { FaStar } from "react-icons/fa";

export const StarRating = ({ count }: { count: number }) => {
  return (
    <div className="App">
      {[...Array(count)].map((_, index) => {
        return (
          <FaStar className="star" size={20} color="#FFBB00" key={index} />
        );
      })}
    </div>
  );
};
