import React from "react";
import Image from "next/image";

interface LogoProps {
  width: number;
  height: number;
}

const Logo = ({ ...props }: LogoProps) => {
  return <Image src="/images/cars-1283997_1920.jpg" alt="ロゴ" {...props} />;
};

export default Logo;
