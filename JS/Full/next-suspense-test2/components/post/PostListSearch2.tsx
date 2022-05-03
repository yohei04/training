import { ChangeEvent, FC } from 'react';

type Props = {
  searchWord: string;
  handleSearch: (e: ChangeEvent<HTMLInputElement>) => void;
};

export const PostListSearch2: FC<Props> = ({ searchWord, handleSearch }) => {
  return (
    <div>
      <input
        className="w-full border-2"
        id="searchWord"
        name="searchWord"
        placeholder="検索ワード"
        type="text"
        value={searchWord}
        onChange={handleSearch}
      />
    </div>
  );
};
