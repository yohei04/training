import React from 'react';

interface Button2Props {
  color: 'primary' | 'secondary';
  size: 'sm' | 'lg';
}

const Button2: React.FC<Button2Props> = ({ color, size }) => {
  const classNames = `${BaseStyle} ${ColorStyle[color]} ${SizeStyle[size]}`;

  return <button className={classNames}>ボタン</button>;
};

const BaseStyle =
  'text-gray-800 active:bg-red-600 border border-gray-300 rounded-2xl focus:outline-none shadow-lg transform hover:-translate-y-0.5 transition duration-100';

const ColorStyle = {
  primary: 'bg-blue-300 hover:bg-blue-200',
  secondary: 'bg-red-500 hover:bg-red-400',
};

const SizeStyle = {
  lg: 'px-4 py-1 text-base sm:px-10 sm:py-1 sm:text-lg md:px-12 md:py-2',
  sm: 'px-2 py-1 text-sm sm:px-4 sm:py-1 sm:text-base md:px-7 md:py-2',
};

export default Button2;
