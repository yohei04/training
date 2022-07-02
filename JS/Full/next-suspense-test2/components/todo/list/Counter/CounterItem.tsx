import { FC, memo } from 'react';

type Props = {
  objCounter: {
    id: number;
    name: string;
    counter: number;
  };
  children: React.ReactNode;
};

export const CounterItem: FC<Props> = memo(({ objCounter, children }) => {
  return (
    <div>
      {children}: {objCounter.counter}
    </div>
  );
});

CounterItem.displayName = 'CounterItem';
