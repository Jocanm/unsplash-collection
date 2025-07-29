import React from "react";

interface GradientTitleProps extends React.HTMLAttributes<HTMLHeadingElement> {
  children: React.ReactNode;
}

const GradientTitle = ({ children, ...props }: GradientTitleProps) => {
  return (
    <h1
      className="bg-gradient-to-r  from-[#F2C593] to-[#8A3282]  inline-block text-transparent bg-clip-text font-medium text-[40px]"
      {...props}
    >
      {children}
    </h1>
  );
};

export default GradientTitle;
