import React, { useState } from "react";
import ReactStar from "react-stars";
import { testimonials, images } from "../common/testimonials";

const Testimonials = () => {
  const [testimonial] = useState([...testimonials]);
  const [image] = useState([...images]);
  return (
    <div className="w-full mb-20" id={"Testimonial_Section"}>
      <div className="Award_Winning  py-14 relative text-center">
        <h1 className="text-white text-2xl">
          What they say about award-winning sound.
        </h1>
      </div>

      <div className="Testimonials_Card_Wrapper text-center py-20 md:max-w-7xl mx-auto px-5 sm:px-16 grid grid-cols-2 gap-y-5 lg:gap-10">
        {testimonial?.map((ele) => (
          <div
            key={ele.id}
            className="border col-span-2 lg:col-span-1 py-10 px-4 flex flex-col items-center"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M7 4a3 3 0 016 0v4a3 3 0 11-6 0V4zm4 10.93A7.001 7.001 0 0017 8a1 1 0 10-2 0A5 5 0 015 8a1 1 0 00-2 0 7.001 7.001 0 006 6.93V17H6a1 1 0 100 2h8a1 1 0 100-2h-3v-2.07z"
                clipRule="evenodd"
              />
            </svg>
            <p className="my-8">{ele.comment}</p>
            <h1 className="text-lg">{ele.name}</h1>
            <div>
              <ReactStar
                count={5}
                value={ele.rating}
                size={18}
                color2={"#ffd700"}
              />
            </div>
          </div>
        ))}
      </div>

      <div className="w-full grid grid-cols-1 lg:grid-cols-4 sm:grid-cols-2">
        {image?.map((ele, ind) => (
          <div className="h-60 " key={ind}>
            <img src={ele.img} alt="" className="h-full w-full object-cover" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
