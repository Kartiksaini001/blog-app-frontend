import { useState } from "react";
import "./App.css";
import CreatePost from "./components/CreatePost";
import Posts from "./components/Posts";

function App() {
  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);

  return (
    <div className="bg-gradient-to-br from-indigo-400 via-purple-400 to-rose-400 min-h-screen">
      <div className="bg-white h-16 pl-10 flex items-center shadow-md">
        <span className="bg-gradient-to-br from-indigo-400 to-rose-400 bg-clip-text text-transparent font-extrabold text-[2rem]">
          Bloooogerrr
        </span>
      </div>
      <div className="divide-y-2">
        <div className="mx-auto px-5 w-full sm:w-3/4 lg:w-1/2 py-3">
          <div
            onClick={toggle}
            className="bg-white shadow-lg rounded-lg p-6 cursor-pointer"
          >
            <div className="flex-1 rounded-full px-4 py-3 bg-indigo-50 hover:bg-indigo-100 text-indigo-500 text-lg ring-2 ring-indigo-400">
              Write a blog...
            </div>
          </div>
        </div>
        <CreatePost show={modal} close={toggle} />
        <Posts />
      </div>
    </div>
  );
}

export default App;
