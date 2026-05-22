import React from "react";
import H1P from "../h1p/H1P";

const Section6 = () => {
  return (
    <div className="pt-10 pb-10">
      <H1P
        h1="Case study"
        p="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facilis, animi. Debitis nemo voluptatem excepturi officia, beatae, accusantium et, perferendis tenetur labore facere magnam voluptate modi magni deleniti ducimus. Reiciendis, eius."
      />
      <div className="mt-10 mb-10 bg-black p-10 rounded-4xl text-white flex justify-between">
        <div className="w-100 pl-10 pr-10">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio omnis
            soluta id cupiditate. Nesciunt soluta dignissimos ad nemo
            praesentium doloribus voluptate beatae nam. Tenetur, dicta?
          </p>
          <div className="flex pt-5 items-center gap-2">
            <p className="text-lg text-lime-400">Learn more</p>
            <i className="ri-arrow-right-up-line text-3xl w-9.5 rounded-full text-lime-400"></i>
          </div>
        </div>
        <div className="w-100 pl-10 border-r-2 border-r-white border-l-2 border-l-white pr-10">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio omnis
            soluta id cupiditate. Nesciunt soluta dignissimos ad nemo
            praesentium doloribus voluptate beatae nam. Tenetur, dicta?
          </p>
          <div className="flex pt-5 items-center gap-2">
            <p className="text-lg text-lime-400">Learn more</p>
            <i className="ri-arrow-right-up-line text-3xl w-9.5 rounded-full text-lime-400"></i>
          </div>
        </div>
        <div className="w-100 pl-10 pr-10">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio omnis
            soluta id cupiditate. Nesciunt soluta dignissimos ad nemo
            praesentium doloribus voluptate beatae nam. Tenetur, dicta?
          </p>
          <div className="flex pt-5 items-center gap-2">
            <p className="text-lg text-lime-400">Learn more</p>
            <i className="ri-arrow-right-up-line text-3xl w-9.5 rounded-full text-lime-400"></i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section6;
