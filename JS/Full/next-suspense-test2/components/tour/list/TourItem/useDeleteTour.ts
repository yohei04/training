import axios from 'axios';
import toast from 'react-hot-toast';
import { useMutation, useQueryClient } from 'react-query';

import { TourEntity } from '../../../../__generated__';

const deleteTour = (tourId: number) => {
  return axios.delete<TourEntity>(`http://localhost:4000/tours/${tourId}`);
};

export const useDeleteTour = (tourId: number) => {
  const queryClient = useQueryClient();

  return useMutation(deleteTour, {
    onSuccess: () => {
      queryClient.setQueriesData<TourEntity[]>(['tours'], (old) =>
        old ? old.filter((t) => t.id !== tourId) : []
      );
      toast.success('削除しました');
    },
  });
};
