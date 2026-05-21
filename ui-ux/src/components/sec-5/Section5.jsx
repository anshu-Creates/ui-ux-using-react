import React from "react";

const Section5 = () => {
  return (
    <div className='flex mt-10 mb-10 justify-between gap-10 pt-10 pb-10 rounded-4xl bg-gray-100 p-10'>
      <div className="w-150 h-70 justify-around flex flex-col">
        <h1 className="text-4xl font-medium">
          Let's make things happen
        </h1>
        <p className="tracking-wider text-lg">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestias
          dolor praesentium maxime molestiae cupiditate quasi veritatis,
          voluptatibus, laboriosam suscipit non officia, at quam iste a?
        </p>
        <button className="border-2 bg-black font-medium text-white w-fit rounded-xl pl-15 pr-15 pt-5 pb-5 tracking-widest">
          Get your free proposal
        </button>
      </div>
      <img src='/src/assets/hero.png' className='h-70 w-100'></img>
    </div>
  );
};

export default Section5;
