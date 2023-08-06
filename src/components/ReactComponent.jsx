import { useState } from "react";

function ReactComponent(props) {
  const [title, setTitle] = useState("React Component");

  const handleClick = () => {
    setTitle((prev) => {
      return prev === "React Component"
        ? "React Title Changed"
        : "React Component";
    });
  };
  return (
    <div className="m-5">
      <h2 className="text-lime-500">{title}</h2>
      <div>{props.children}</div>
      <button
        className="mt-5 border-2 p-2 rounded hover:bg-slate-100"
        onClick={handleClick}
      >
        Change Title
      </button>
    </div>
  );
}

export default ReactComponent;
