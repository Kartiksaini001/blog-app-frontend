import axios from "axios";
import React, { useState, useEffect } from "react";
import PostCard from "./PostCard";

const Posts = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios
      .get("https://scout-blog-api.herokuapp.com/posts")
      .then((res) => {
        setPosts(res.data);
        setIsLoading(false);
      })
      .catch((err) => {
        setIsLoading(false);
      });
  }, []);

  return (
    <div className="mx-auto px-5 w-full sm:w-3/4 lg:w-1/2 py-3">
      {isLoading ? (
        <div className="bg-white shadow-lg rounded-lg p-8">
          <div className="animate-pulse flex space-x-4">
            <div className="rounded-full bg-gray-400 h-10 w-10"></div>
            <div className="flex-1 space-y-6 py-1">
              <div className="h-2 bg-gray-400 rounded"></div>
              <div className="space-y-3">
                <div className="grid grid-cols-3 gap-4">
                  <div className="h-2 bg-gray-400 rounded col-span-2"></div>
                  <div className="h-2 bg-gray-400 rounded col-span-1"></div>
                </div>
                <div className="h-2 bg-gray-400 rounded"></div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex flex-col-reverse gap-y-4 pb-4">
          {posts.map((post, key) => (
            <PostCard post={post} key={key} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Posts;
