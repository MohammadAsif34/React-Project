import { useState } from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import Todo from "./Components/Todo";
import TextEditor from "./Components/TextEditor";
import Footer from "./Components/Footer";

function App() {
  const [count, setCount] = useState(0);
  const [mode, setMode] = useState("teal-700");
  const toggleMode = () => {
    if (mode === "teal-700") {
      setMode("black");
      // document.body.style.backgroundColor = "black";
    } else {
      setMode("teal-700");
      // document.body.style.backgroundColor = "gray-200";
    }
  };
  console.log(mode);
  return (
    <>
      <div>
        <Navbar title="learning" mode={mode} toggleMode={toggleMode} />
        <Todo mode={mode} />
        <TextEditor mode={mode} />
        <Footer mode={mode} />
      </div>
    </>
  );
}

export default App;
