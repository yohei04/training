import NextLink from 'next/link';
import { FC, ReactNode } from 'react';

type Props = {
  href: string;
  children: ReactNode;
};

export const Link: FC<Props> = ({ href, children }) => {
  return (
    <NextLink href={href}>
      <a className="text-blue-500 border-b-2 border-blue-500 hover:text-blue-700 hover:border-blue-700">
        {children}
      </a>
    </NextLink>
  );
};
