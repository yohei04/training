import React from "react";

interface ButtonProps extends React.ComponentPropsWithoutRef<"button"> {
  color: "blue" | "red";
  size: "s" | "m" | "l";
}

const TWButton = ({ color, size, ...rest }: ButtonProps) => {
  const buttonStyle = `${baseStyle} ${colorStyle[color]} ${sizeStyle[size]}`;
  return (
    <>
      <button className={buttonStyle} {...rest} />
    </>
  );
};

type Valueof<T> = T[keyof T];

const baseStyle = "px-4 py-2 rounded-lg";

const colorStyle: Record<Valueof<Pick<ButtonProps, "color">>, string> = {
  blue: "bg-blue-400",
  red: "bg-red-400",
};

const sizeStyle: Record<Valueof<Pick<ButtonProps, "size">>, string> = {
  s: "w-32",
  m: "w-96",
  l: "w-full",
};

export default TWButton;
