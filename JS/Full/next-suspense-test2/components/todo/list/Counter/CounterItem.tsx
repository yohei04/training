import { FC, memo } from 'react';

type Props = {
  counter: number;
  children: React.ReactNode;
};

export const CounterItem: FC<Props> = memo(({ counter, children }) => {
  return (
    <div>
      {children}: {counter}
    </div>
  );
});

CounterItem.displayName = 'CounterItem';
