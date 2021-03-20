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
      <div className="flex flex-col mx-auto w-1/5 space-y-4">
        <button className={classNames(bgColor, textColor)}>ボタンです</button>
        <button className="text-green-400 bg-yellow-200">
          propsなしボタンです
        </button>
        <button className="text-green-400 bg-yellow-200 bg-">
          基盤のボタンです
        </button>
        <button className={classes}>基盤のボタンです</button>
      </div>
    </>
  );
};

export default Button;
