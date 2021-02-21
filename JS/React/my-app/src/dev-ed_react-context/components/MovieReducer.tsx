import { IMovie } from "./MovieProvider";

export enum ActionType {
  ADD_MOVIE = 'ADD_MOVIE',
  REMOVE_MOVIE = 'REMOVE_MOVIE',
}

export interface MovieAction {
  type: ActionType
  payload: IMovie
}

export const movieReducer = (state: IMovie[], action: MovieAction) => {
  switch (action.type) {
    case ActionType.ADD_MOVIE:
      return [
        ...state,
        {
          name: action.payload.name,
          price: action.payload.price,
          id: action.payload.id,
        },
      ];

    case ActionType.REMOVE_MOVIE:
      return state.filter((movie) => movie.id !== action.payload.id);

    default:
      return state;
  }
};
