import { split } from "postcss/lib/list";
import React, { useState } from "react";

export default function TextEditor() {
  const handleUppercase = () => {
    setText(text.toUpperCase());
  };
  const handleLowercase = () => {
    setText(text.toLowerCase());
  };
  const handleCapitalize = () => {
    const words = text.split(" ");
    const finalText = words
      .map((word) => {
        return word.charAt(0).toUpperCase() + word.substring(1);
      })
      .join(" ");
    setText(finalText);
  };
  const handleClear = () => {
    setText("");
  };
  const [text, setText] = useState("enter your text");
  const btn = [
    {
      name: "uppercase",
      handle: () => {
        setText(text.toUpperCase());
      },
    },
    // { name: "lowercase", handle: { handleLowercase } },
    // { name: "capitalize", handle: { handleCapitalize } },
  ];

  return (
    <div className=" py-12">
      <div className="w-4/6  my-2 mx-auto p-3  bg-gray-100 rounded-lg shadow-lg ">
        <div className="w-full flex ">
          <h1 className="text-4xl font-semibold py-3  flex-1">
            Text Formatter
          </h1>
          <div
            className=" flex justify-center items-center"
            onClick={handleClear}
          >
            <span className=" p-1 my-3 text-sm  text-gray-600 rounded-lg hover:bg-gray-200 cursor-pointer">
              clear
              <i className="bi bi-trash3 p-1 text-sm "></i>
            </span>
          </div>
        </div>
        <textarea
          name="txt"
          id=""
          value={text}
          className="border-2 border-teal-700 resize-none w-full h-56 p-3 text-lg text-teal-900 rounded-lg"
          onChange={(e) => {
            setText(e.target.value);
          }}
        ></textarea>
        {/* {btn.map((item) => (
          <button className=" my-2 mr-3 px-3 py-1 bg-teal-800 rounded-lg text-white capitalize">
            {item.name}
          </button>
        ))} */}
        <div className="btn flex flex-wrap">
          {/* edit text normal  */}
          <div className="normal flex-1  m-auto">
            <button
              className=" my-2 mr-3 px-3 py-1 bg-teal-800 rounded-lg text-white capitalize"
              onClick={handleUppercase}
            >
              upppercase
            </button>
            <button
              className=" my-2 mr-3 px-3 py-1 bg-teal-800 rounded-lg text-white capitalize"
              onClick={handleLowercase}
            >
              lowercase
            </button>
            <button
              className=" my-2 mr-3 px-3 py-1 bg-teal-800 rounded-lg text-white capitalize"
              onClick={handleCapitalize}
            >
              captilize
            </button>
          </div>
          {/* selected text edit / */}
          <div className=" flex-1 justify-center">
            <h1 className="text-center text-xl font-semibold capitalize">
              selected text format
            </h1>
            <div className="flex justify-center">
              <button
                className=" my-2 mr-3 px-3 py-1 bg-teal-800 rounded-lg text-white capitalize"
                onClick={() => {}}
              >
                touppercase
              </button>
              <button className=" my-2 mr-3 px-3 py-1 bg-teal-800 rounded-lg text-white capitalize">
                tolowercase
              </button>
              <button className=" my-2 mr-3 px-3 py-1 bg-teal-800 rounded-lg text-white capitalize">
                capitalize
              </button>
            </div>
          </div>
        </div>
        <div className="conatiner">
          <h1 className="text-3xl font-semibold py-2 capitalize">summary</h1>
          <div className="container border-2 border-teal-700 rounded-lg p-2 capitalize text-gray-600 ">
            <p>words &nbsp; : &nbsp;{text.trim().split(" ").length}</p>
            <p>character &nbsp; : &nbsp;{text.length} </p>
            <p>WPM &nbsp; : &nbsp; {text.split(" ").length / 10} </p>
            <h1 className="text-xl text-black">preview :</h1>
            <p className="indent-4  caret-teal-800">{text}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
