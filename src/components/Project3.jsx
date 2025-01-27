import React from "react";
import RollingProj1 from "../ReactBitsComponents/RollingProj1";
const Project3 = () => {
  const p1 = "/img/project3/project3-4.png";
  const p2 = "/img/project3/project3-5.png";
  const p3 = "/img/project3/project3-3.png";
  const p4 = "/img/project3/project3-2.png";
  const p5 = "/img/project3/project3-1.png";

  const images = [p1, p2, p3, p4, p5];

  const transformStyles = [
    "rotate(5deg) translate(-150px)",
    "rotate(0deg) translate(-70px)",
    "rotate(-5deg)",
    "rotate(5deg) translate(70px)",
    "rotate(-5deg) translate(150px)",
  ];
  return (
    <div>
      {" "}
      <div>
        {" "}
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
      </div>
    </div>
  );
};

export default Project3;
