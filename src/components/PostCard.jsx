import React from "react";
import moment from "moment";

const PostCard = ({ post }) => {
  const { title, author, content, date } = post;
  return (
    <div className="bg-white shadow-lg rounded-lg p-6">
      <div className="flex text-center items-center justify-between">
        <div className="flex items-center">
          <img
            src={`https://ui-avatars.com/api/?background=db2777&color=fff&rounded=true&bold=true&length=1&size=38&name=${author}`}
            alt="Profile"
          />
          <p className="inline align-middle text-gray-700 ml-2 font-medium text-lg">
            {author}
          </p>
        </div>
        <div className="font-medium text-gray-700">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 inline mr-2 text-pink-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
            />
          </svg>
          <span className="align-middle">
            {moment(date).format("MMM DD, YYYY")}
          </span>
        </div>
      </div>
      <h1 className="transition duration-500 text-center mb-4 text-pink-600 text-3xl font-semibold">
        {title}
      </h1>
      <p className="text-lg text-gray-700 font-normal px-4">
        {content}
      </p>
    </div>
  );
};

export default PostCard;
