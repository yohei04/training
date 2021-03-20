import classNames from 'classnames';
import React from 'react';

interface ButtonProps {
  bgColor: 'bg-yellow-200' | 'bg-pink-900';
  textColor: 'text-green-400' | 'text-gray-200';
  color: 'primary' | 'secondary';
  size: 'sm' | 'md' | 'lg';
}

const Button: React.FC<ButtonProps> = ({ bgColor, textColor, color, size }) => {
  return (
    <>
      {/* <button className={classNames(textColor, bgColor)}>ボタンです</button>
      <button className="text-green-400 bg-yellow-200">
        propsなしボタンです
      </button> */}
      <button
        className={classNames(
          'text-gray-800 active:bg-red-600 border border-gray-300 rounded-2xl focus:outline-none shadow-lg transform hover:-translate-y-0.5 transition duration-100',
          { 'bg-blue-300 hover:bg-blue-200': color === 'primary' },
          {
            'bg-red-500 hover:bg-red-400': color === 'secondary',
          },
          {
            'px-4 py-1 text-base sm:px-7 sm:py-1 sm:text-lg md:px-12 md:py-2':
              size === 'lg',
          },
          {
            'px-2 py-1 text-sm sm:px-4 sm:py-1 sm:text-base md:px-7 md:py-2':
              size === 'sm',
          }
        )}
      >
        ボタン
      </button>
    </>
  );
};

export default Button;
