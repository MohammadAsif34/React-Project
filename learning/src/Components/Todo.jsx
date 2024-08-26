import React, { useCallback, useState } from "react";

export default function Todo(props) {
  const [taskList, setTaskList] = useState([]);
  const [taskString, setTaskString] = useState("");
  const handleSubmit = (event) => {
    event.preventDefault();
    setTaskList([...taskList, taskString]);
    setTaskString("");
  };
  return (
    <div className="w-full p-2">
      <div className="p-2 my-2">
        <h1 className="text-center text-4xl capitalize py-2">
          Welcome to React Learning
        </h1>
        <div className="conatiner border py-4">
          <div className="w-3/6 box-border m-auto h-12 flex shadow-lg">
            <form action="" className="flex w-full" onSubmit={handleSubmit}>
              <input
                type="text"
                name=""
                id=""
                value={taskString}
                className=" grow py-1 border-2 border-teal-700 px-3 rounded-l-lg focus:outline-none"
                placeholder=" New Tasks..."
                onChange={(e) => {
                  setTaskString(e.target.value);
                }}
              />
              <button
                type="submit"
                className="bg-teal-700 px-4 py-2 text-center text-white rounded-r-lg"
              >
                addtask
              </button>
            </form>
          </div>
          <div className="w-4/6 mx-auto my-3 rounded-lg p-4 bg-gray-100 shadow-lg">
            <div className="w-full">
              <h1 className="py-3 text-4xl font-semibold capitalize">
                task list
              </h1>
            </div>
            <div className="border-2 border-teal-600 rounded-lg p-3 min-h-56">
              {taskList.map((task, index) => (
                <li
                  key={index}
                  className="text-xl capitalize list-outside list-none py-2 flex-1"
                >
                  <i className="bi bi-check2-circle"></i> &nbsp;
                  <i className="bi bi-circle"></i>&nbsp;&nbsp;&nbsp;
                  {task}
                </li>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
