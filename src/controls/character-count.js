import React from "react";

const CharacterCount = ({ characterCount }) => {
  if (typeof characterCount !== "undefined") {
    return <span className="message character-count">{characterCount}</span>;
  }
  return null;
};

export default CharacterCount;
