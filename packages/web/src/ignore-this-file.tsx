import * as React from "react";

interface ButtonProps {
  color: string;
}

const Button: React.FC<ButtonProps> = ({ children, color }) => {
  return  <button style={{ color }}>{children}</button>;
};

export default Button;
