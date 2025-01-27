import React from "react";
import TrueFocus from "../ReactBitsComponents/TrueFocus";

const Focus = () => {
  return (
    <div>
      <TrueFocus
        sentence="About Me"
        manualMode={false}
        blurAmount={5}
        borderColor="pink"
        animationDuration={2}
        pauseBetweenAnimations={1}
      />
    </div>
  );
};

export default Focus;
