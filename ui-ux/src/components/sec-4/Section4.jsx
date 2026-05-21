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
        <Card1 h2="Search engine optimization" img="/src/assets/hero.png" />
        <Card2 h2="Pay per click advertising" img="/src/assets/hero.png" />
        <Card2 h2="E-mail marketing" img="/src/assets/hero.png" />
        <Card1 h2="Social media marketing" img="/src/assets/hero.png" />
      </div>
    </div>
  );
};

export default Section4;
