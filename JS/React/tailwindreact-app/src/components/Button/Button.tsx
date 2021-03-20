import classNames from 'classnames';
import React from 'react';

interface ButtonProps {
  bgColor: 'bg-yellow-200' | 'bg-pink-900';
  textColor: 'text-green-400' | 'text-gray-200';
  color: 'primary' | 'secondary';
}

const Button: React.FC<ButtonProps> = ({ bgColor, textColor, color }) => {
  const classes = classNames(
    { 'text-gray-800 bg-red-100': color === 'primary' },
    { 'text-gray-800 bg-red-400': color === 'secondary' }
  );

  return (
    <>
      <button className={classNames(bgColor, textColor)}>ボタンです</button>
      <button className="text-green-400 bg-yellow-200">
        propsなしボタンです
      </button>
      <button className="text-green-400 bg-yellow-200 ">
        基盤のボタンです
      </button>
      <button
        className={classNames(
          'rounded-2xl border-gray-300 border w-52 shadow-lg p-2 m-auto hover:-translate-y-0.5 transition transform focus:outline-none active:bg-red-600',
          { 'text-gray-800 bg-red-100': color === 'primary' },
          {
            'bg-red-500 text-gray-800  hover:bg-red-400 duration-100 focus:outline-none ':
              color === 'secondary',
          }
        )}
      >
        基盤のボタンです
      </button>
    </>
  );
};

export default Button;
