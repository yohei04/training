import {
  ChangeEvent,
  FC,
  Suspense,
  useCallback,
  useDeferredValue,
  useState,
} from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import toast, { Toaster } from 'react-hot-toast';
import { useQueryErrorResetBoundary } from 'react-query';

import { CustomErrorBoundary } from '../error-boundary/CustomErrorBoundary';
import { Spinner } from '../spinner';
import { CreatePost2, PostList2, PostListSearch2 } from './';

type Props = {
  userId: number;
};

export const PostListSection2: FC<Props> = ({ userId }) => {
  const [searchWord, setSearchWord] = useState('');
  const deferredSearchWord = useDeferredValue(searchWord);

  const handleSearch = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setSearchWord(e.currentTarget.value);
  }, []);

  return (
    <>
      <CreatePost2 userId={userId} />
      <PostListSearch2 searchWord={searchWord} handleSearch={handleSearch} />
      {/* <Suspense fallback={<div className="h-32 bg-yellow-100 "></div>}> */}
      <Toaster />
      <CustomErrorBoundary>
        <Suspense fallback={<Spinner />}>
          <PostList2 userId={userId} deferredSearchWord={deferredSearchWord} />
        </Suspense>
      </CustomErrorBoundary>
    </>
  );
};
