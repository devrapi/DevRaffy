import React from "react";
import RollingProj1 from "../ReactBitsComponents/RollingProj1";

const Project1 = () => {
  const p1 = "/img/project1/project1-4.png";
  const p2 = "/img/project1/project1-2.png";
  const p3 = "/img/project1/project1-3.png";
  const p4 = "/img/project1/project1-4.png";
  const p5 = "/img/project1/project1-5.png";
  const p6 = "/img/project1/project1-1.png";

  const images = [p1, p3, p4, p5, p6];

  const transformStyles = [
    "rotate(5deg) translate(-150px)",
    "rotate(0deg) translate(-70px)",
    "rotate(-5deg)",
    "rotate(5deg) translate(70px)",
    "rotate(-5deg) translate(150px)",
  ];

  return (
    <div>
      <RollingProj1
        className="custom-class"
        images={images}
        containerWidth={300}
        containerHeight={200}
        animationDelay={1}
        animationStagger={0.08}
        easeType="elastic.out(1, 0.5)"
        transformStyles={transformStyles}
      />
    </div>
  );
};

export default Project1;
