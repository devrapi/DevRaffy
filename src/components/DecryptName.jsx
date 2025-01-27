import React from "react";
import DecryptedText from "../ReactBitsComponents/DecryptedText";

const DecryptName = () => {
  return (
    <div className="flex flex-col">
      <DecryptedText
        text="RAFFY"
        animateOn="view"
        speed={150}
        maxIterations={20}
        revealDirection="start"
        characters="ABCD1234!?"
        className="revealed"
        parentClassName="all-letters"
        encryptedClassName="encrypted"
      />

      <DecryptedText
        text="DAPADAP"
        animateOn="view"
        speed={200}
        maxIterations={20}
        revealDirection="start"
        className="revealed"
        parentClassName="all-letters"
        encryptedClassName="encrypted"
      />
    </div>
  );
};

export default DecryptName;
