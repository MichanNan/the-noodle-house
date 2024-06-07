import React from "react";

interface ContainerProps {
  children: React.ReactNode;
}

const Container: React.FC<ContainerProps> = ({ children }) => {
  return (
    <main className="w-full h-full mx-auto bg-neutral-100">{children}</main>
  );
};

export default Container;
