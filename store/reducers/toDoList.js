import { ADD_TASK } from '../types';

const initialState = [];

const toDoList = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case ADD_TASK:
      return [...state, payload];
    default:
      return state;
  }
};

export default toDoList;
