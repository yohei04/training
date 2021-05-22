import React from 'react';
import { Button, LinkButton } from '../../atoms/Button';
import Image from 'next/image';
import Link from 'next/link';

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
      <Button color="blue" size="s" space="mr_3">
        ボタン
      </Button>
      <Link href="/" passHref>
        <LinkButton color="blue" size="s">
          リンクボタン
        </LinkButton>
      </Link>
    </div>
  );
};

export default Card;
