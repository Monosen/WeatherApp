import React from "react";

import "./LayoutIcon.styles.css";

const LayoutIcon = ({ children }) => {
  return (
    <div className="flex flex-col items-center justify-center w-28 h-28 md:w-40 md:h-40 rounded-xl glassmorfism">
      {children}
    </div>
  );
};

export default LayoutIcon;
