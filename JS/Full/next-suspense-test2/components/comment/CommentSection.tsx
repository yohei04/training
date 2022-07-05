import {
  FC,
  ReactNode,
  Suspense,
  useCallback,
  useState,
  useTransition,
} from 'react';

import { Spinner } from '../spinner';

type Props = {
  create: ReactNode;
  list: ReactNode;
};

export const CommentSection: FC<Props> = ({ create, list }) => {
  const [isShowComment, setIsShowComment] = useState(false);
  const [isPending, startTransition] = useTransition();

  const handleShowComment = useCallback(() => {
    // startTransition(() => {
    setIsShowComment((prev) => !prev);
    // });
  }, []);

  return (
    <section>
      <p style={{ cursor: 'pointer', opacity: isPending ? 0.5 : 1 }} onClick={handleShowComment}>
        コメント表示
      </p>
      {isShowComment && create}
      <Suspense fallback={<Spinner />}>{isShowComment && list}</Suspense>
    </section>
  );
};
