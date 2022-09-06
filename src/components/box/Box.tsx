import React, { FC, ReactNode } from "react";

const Box: FC<{ children: ReactNode }> = ({ children }) => {
  return <div>{children}</div>;
};

export default Box;
