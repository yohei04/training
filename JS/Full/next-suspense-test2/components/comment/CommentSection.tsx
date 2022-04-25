import {
  FC,
  ReactNode,
  Suspense,
  useCallback,
  useState,
  useTransition,
} from 'react';

type Props = {
  children: ReactNode;
};

export const CommentSection: FC<Props> = ({ children }) => {
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
      <Suspense fallback={<h1>コメントをローディング中です........</h1>}>{isShowComment && children}</Suspense>
    </section>
  );
};
