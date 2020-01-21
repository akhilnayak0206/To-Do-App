import { ADD_TASK, DELETE_TASK, FILTER_TASK } from '../types';

const initialState = [
  { title: 'Task1', description: 'Some description', status: 'NC' }
];

const toDoList = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case ADD_TASK:
      return [...state, payload];
    case DELETE_TASK: {
      return [...state, payload];
    }
    case FILTER_TASK: {
      return [...state, payload];
    }
    default:
      return state;
  }
};

export default toDoList;
