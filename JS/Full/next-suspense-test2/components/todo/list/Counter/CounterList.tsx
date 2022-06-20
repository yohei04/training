import { FC, useCallback, useState } from 'react';

import { CounterItem } from './';

export const CounterList: FC = () => {
  const [counter, setCounter] = useState(0);
  const [objCounter, setObjCounter] = useState({ id: 1, name: '偶数', counter: 0 });

  const handleUp = useCallback(() => setCounter((prev) => prev + 1), []);

  const handleObjUp = useCallback(
    () => setObjCounter((prev) => ({ ...prev, counter: prev.counter + 1 })),
    []
  );

  const handleName = useCallback(
    () =>
      setObjCounter((prev) => {
        if (prev.counter % 2 === 0) {
          return { ...prev, name: '偶数' };
        }
        return { ...prev, name: '奇数' };
      }),
    []
  );

  return (
    <div>
      <div className="p-5">
        <CounterItem counter={counter}>普通のカウンター</CounterItem>
        <button onClick={handleUp}>+</button>
      </div>

      <div className="p-5">
        <CounterItem {...objCounter}>オブジェクトのカウンター</CounterItem>
        <button onClick={handleObjUp}>+</button>
      </div>

      <div className="p-5">
        <div>名前: {objCounter.name}</div>
        <button onClick={handleName}>名前変更</button>
      </div>
    </div>
  );
};
