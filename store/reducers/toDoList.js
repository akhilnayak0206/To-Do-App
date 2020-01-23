import { ADD_TASK, DELETE_TASK, MODIFY_STATUS } from '../types';

const initialState = [
  // { id: '0', title: 'Task1', description: 'Some description', status: 'NC' }  //This is the structure of the object
];

const toDoList = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case ADD_TASK:
      return [...state, payload];
    case DELETE_TASK: {
      state = state.filter(obj => {
        return obj.id !== payload;
      });
      return [...state];
    }
    case MODIFY_STATUS: {
      for (let i = 0; i < state.length; i++) {
        if (state[i].id === payload.key) {
          state[i].status = payload.status;
          break;
        }
      }
      return [...state];
    }
    default:
      return state;
  }
};

export default toDoList;
