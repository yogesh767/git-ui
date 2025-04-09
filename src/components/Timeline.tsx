import React from "react";

const Timeline = () => (
  <div className="flex w-100 flex-column items-center justify-center  px-5 py-4">
    <div className="border rounded  w-full p-5 text-center">
      <p className="font-medium"><span > First time contributing to shadcn-ui/ui? </span> </p>
      <div className="text-sm leading-1">
        <p >If you know how to fix an <a href="#"  >issue</a> <span>consider opening a pull request for it.</span><br></br>
        You can read this repository’s . <a href="#" title="A must-read for how to contribute to shadcn-ui/ui">contributing guidelines</a> or <a href="#">GitHub Help </a>
               to learn how to open a good pull request.
            </p>
      </div>
    </div>
  </div>
);

export default Timeline;