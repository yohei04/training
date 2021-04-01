import React from 'react';

interface AddNewPostBtnProps {
  onClick: () => void;
}

const AddNewPostBtn: React.FC<AddNewPostBtnProps> = ({ onClick }) => {
  return <button onClick={onClick}>Add New Post</button>;
};

export default AddNewPostBtn;
