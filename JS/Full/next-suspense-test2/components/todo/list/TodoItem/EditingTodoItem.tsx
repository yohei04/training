import { FC } from 'react';

type Props = {};

export const EditingTodoItem: FC<Props> = () => {
  return (
    <div>
      <input type="text" />
      <div>
        <button>キャンセル</button>
        <button>保存</button>
      </div>
    </div>
  );
};
