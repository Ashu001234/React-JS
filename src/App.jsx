import { useState } from "react";

import "./App.css";

function App() {
  const [color, setColor] = useState("olive");

  return (
    <div
      className="w-full h-screen duration-200"
      style={{ backgroundColor: color }}
    >
      <div className="  fixed flex flexwrap justify-center bottom-10 inset-x-0 px-2">
        <div className=" flex flex-wrap justify-center bg-white rounded-xl px-2 py-1 gap-3 shadow-lg ">
          <button
          onClick={()=>setColor("red")}
           // onclick is a event handler, it need function it dont want to return value from function
            className="outline-none px-4 py-1 rounded-full shadow-lg"
            style={{ backgroundColor: "red" }}
          >
            red
          </button>
          <button
            onClick={()=>setColor("green")}
            className="outline-none px-4 py-1 rounded-full shadow-lg"
            style={{ backgroundColor: "green" }}
          >
            green
          </button>

          <button
            onClick={()=>setColor("yellow")}
            className="outline-none px-4 py-1 rounded-full shadow-lg"
            style={{ backgroundColor: "yellow" }}
          >
            yellow
          </button>
          <button onClick={()=>setColor("purple")}
         
            className="outline-none px-4 py-1 rounded-full shadow-lg"
            style={{ backgroundColor: "purple" }}
          >
            purple
          </button>

          <button
            onClick={()=>setColor("brown")}
            className="outline-none px-4 py-1 rounded-full shadow-lg"
            style={{ backgroundColor: "brown" }}
          >
            brown
          </button>

          <button
            onClick={()=>setColor("aqua")}
            className="outline-none px-4 py-1 rounded-full shadow-lg"
            style={{ backgroundColor: "aqua" }}
          >
            aqua
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
