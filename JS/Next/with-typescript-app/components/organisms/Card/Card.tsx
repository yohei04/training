import React from 'react';
import { Button } from '../../atoms/Button';
import Image from 'next/image';

interface CardProps {}

const Card = (props) => {
  return (
    <div className="container">
      {/* <div className="image"> */}
        <Image
          width={300}
          height={200}
          src="/images/cars-1283997_1920.jpg"
          alt="card-image"
        />
      {/* </div> */}
      <div className="content">
        <h3 className="title">カードのタイトルです</h3>
        <p className="text">カードのテキストです</p>
        <p className="text">カードのテキストです</p>
        <p className="text">カードのテキストです</p>
      </div>
      <Button color="blue" size="l" margin={'mm-10'}>
        ほげ
      </Button>
    </div>
  );
};

export default Card;
