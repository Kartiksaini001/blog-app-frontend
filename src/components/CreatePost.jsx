import axios from "axios";
import React, { useRef, useState } from "react";
import ReactDOM from "react-dom";

const CreatePost = ({ show, close }) => {
  const [isLoading, setIsLoading] = useState(false);
  const formRef = useRef();

  const handleSubmit = () => {
    setIsLoading(true);
    const values = Array.from(formRef.current.children).map(
      (item) => item.children[1].value
    );
    // setTimeout(() => {
    //   console.log("reload");
    //   setIsLoading(false);
    //   window.location.reload();
    // }, 1000);
    axios
      .post("https://scout-blog-api.herokuapp.com/posts", {
        author: values[0],
        title: values[1],
        content: values[2],
      })
      .then((res) => {
        setIsLoading(false);
        window.location.reload();
      })
      .catch((err) => {
        console.log(err);
        setIsLoading(false);
      });
  };

  return ReactDOM.createPortal(
    <>
      {show ? (
        <div
          className="fixed top-0 right-0 bottom-0 left-0 flex items-center justify-center bg-gray-800/50"
          onClick={close}
        >
          <div
            className="mx-auto px-5 w-full sm:w-3/4 lg:w-1/2 pb-5"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="bg-white shadow-lg rounded-lg p-6 flex flex-col divide-y-2 gap-y-4">
              <div className="flex justify-between font-bold text-2xl">
                <div>Write a blog</div>
                <div
                  onClick={close}
                  className="cursor-pointer text-gray-500 hover:text-gray-800"
                >
                  &times;
                </div>
              </div>
              <div className="flex flex-col gap-y-4 pt-6 pb-2" ref={formRef}>
                <div className="flex gap-x-2 items-center">
                  <label htmlFor="author">Author Name:</label>
                  <input
                    className="flex-1 ring-2 ring-indigo-400 bg-indigo-50 caret-indigo-400 rounded-xl outline-none px-3 py-2"
                    type="text"
                    name="author"
                    id="author"
                  />
                </div>
                <div className="flex gap-x-2 items-center">
                  <label htmlFor="title">Blog Title:</label>
                  <input
                    className="flex-1 ring-2 ring-indigo-400 bg-indigo-50 caret-indigo-400 rounded-xl outline-none px-3 py-2"
                    type="text"
                    name="title"
                    id="title"
                  />
                </div>
                <div className="flex gap-x-2 items-center">
                  <label htmlFor="content">Content:</label>
                  <textarea
                    className="flex-1 ring-2 ring-indigo-400 bg-indigo-50 caret-indigo-400 rounded-xl outline-none px-3 py-2"
                    name="content"
                    id="content"
                  />
                </div>
              </div>
              <div className="text-right pt-4">
                <button
                  onClick={handleSubmit}
                  className="rounded-full px-5 py-2 bg-indigo-500 text-white hover:bg-indigo-600 active:bg-indigo-800 disabled:bg-indigo-400"
                  disabled={isLoading}
                >
                  <div className="flex items-center flex-row-reverse gap-x-2">
                    {isLoading && (
                      <div className="h-4 w-4 animate-spin border-t-2 border-white rounded-full"></div>
                    )}
                    Post
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </>,
    document.getElementById("modal")
  );
};

export default CreatePost;
