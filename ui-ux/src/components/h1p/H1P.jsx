import React from "react";

const H1P = (props) => {
  return (
    <div>
      <div className="flex gap-20">
        <h1 className="text-5xl font-medium bg-lime-400 p-2 pl-0 pr-0">{props.h1}</h1>
        <p className="w-200">{props.p}</p>
      </div>
    </div>
  );
};

export default H1P;
