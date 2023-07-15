import React from "react";
import { AiOutlineStar } from "react-icons/ai";
import { AiFillStar } from "react-icons/ai";
import { BiSolidStarHalf } from "react-icons/bi";

// num 3.5
const maximumStars = 5;
export const Stars = ({ num }) => {
  let hasDecimal = !!(num % 1);
  const fullStarVal = parseInt(num);
  const emptyStar = hasDecimal
    ? maximumStars - fullStarVal - 1
    : maximumStars - fullStarVal;

  //   console.log(num, hasDecimal, parseInt(num), "slkdfj");

  //   const goldStart = Array(5)
  //     .fill("")
  //     .map((item, i) => {
  //       if (i + 1 <= fullStarVal) {
  //         return <AiFillStar className="text-warning " />;
  //       } else if (hasDecimal) {
  //         hasDecimal = false;
  //         return <BiSolidStarHalf className="text-warning " />;
  //       } else {
  //         return <AiOutlineStar />;
  //       }
  //     });

  //   return <div className="fs-3">{goldStart}</div>;

  ///different apporach

  const fs = Array(fullStarVal).fill(<AiFillStar className="text-warning " />);
  const es = Array(emptyStar).fill(<AiOutlineStar />);

  return (
    <div className="fs-3">
      {fs?.map((item) => item)}
      {hasDecimal && <BiSolidStarHalf className="text-warning " />}
      {es?.map((item) => item)}
    </div>
  );
};
