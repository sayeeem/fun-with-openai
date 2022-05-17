import React from "react";

function Card({ prompt, promptResponse }) {
  return (
    <div className="flex flex-col gap-4 py-8 px-6 bg-gray-200">
      <div className="flex">
        <p className="w-28 text-left text-gray-900 text-md font-bold">
          Prompt:
        </p>
        <p className="flex-1 text-left text-gray-900 text-md">{prompt}</p>
      </div>
      <div className="flex">
        <p className="w-28 text-left text-gray-900 text-md font-bold">
          Response:
        </p>
        <p className="flex-1 text-left text-gray-900 text-md">
          {promptResponse}
        </p>
      </div>
    </div>
  );
}

export default Card;
