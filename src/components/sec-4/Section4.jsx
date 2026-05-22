import React from "react";
import H1P from "../h1p/H1P";
import Card1 from "./Card1";
import Card2 from "./Card2";

const Section4 = () => {
  return (
    <div className="pt-10 pb-10">
      <H1P
        h1="Services"
        p="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facilis, animi. Debitis nemo voluptatem excepturi officia, beatae, accusantium et, perferendis tenetur labore facere magnam voluptate modi magni deleniti ducimus. Reiciendis, eius."
      />
      <div className="pt-10 pb-10 gap-10 flex flex-wrap justify-between">
        <Card1 h2="Search engine optimization" img="https://i.pinimg.com/1200x/a3/f3/46/a3f346eb0dccbbb94d74ebad404f3258.jpg" />
        <Card2 h2="Pay per click advertising" img="https://i.pinimg.com/1200x/75/a6/4a/75a64a28e5a4c72b7c874ef94898cbad.jpg" />
        <Card2 h2="E-mail marketing" img="https://i.pinimg.com/1200x/d4/d6/5b/d4d65b7265924d04c6aaff847fbe1aa4.jpg" />
        <Card1 h2="Social media marketing" img="https://i.pinimg.com/1200x/ee/d1/4b/eed14b8003a8c864e4c9ea8bd30d818a.jpg" />
      </div>
    </div>
  );
};

export default Section4;
