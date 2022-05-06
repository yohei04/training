import { ChangeEvent, useCallback, useReducer } from 'react';

const ACTION_TYPE = {
  HANDLE_INPUT_TEXT: 'HANDLE_INPUT_TEXT',
} as const;

type ActionTypeType = keyof typeof ACTION_TYPE;

type PostStateType = {
  title: string;
  body: string;
};

type ActionType = {
  type: ActionTypeType;
  payload: {
    name: string;
    value: string;
  };
};

const initialState = {
  title: '',
  body: '',
};

const reducer = (state: PostStateType, action: ActionType) => {
  switch (action.type) {
    case ACTION_TYPE.HANDLE_INPUT_TEXT: {
      return {
        ...state,
        [action.payload.name]: action.payload.value,
      };
    }
    default: {
      return state;
    }
  }
};

export const usePost = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleText = useCallback((e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.currentTarget;
    dispatch({
      type: ACTION_TYPE.HANDLE_INPUT_TEXT,
      payload: {
        name,
        value,
      },
    });
  }, []);

  const resetText = useCallback(() => {
    state.body = '';
    state.title = '';
  }, [state]);

  return { state, handleText, resetText };
};
