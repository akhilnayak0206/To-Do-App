import { SHOW_DETAILS, SHOW_ADD, SHOW_FILTER } from '../types';

const initialState = { showDetails: false, showAdd: false, showFilter: false };

const toDoList = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case SHOW_DETAILS:
      return {
        ...state,
        showDetails: payload.showDetails,
        details: payload.details,
        showAdd: false,
        showFilter: false
      };
    case SHOW_ADD:
      return {
        ...state,
        showDetails: false,
        showAdd: payload,
        showFilter: false
      };
    case SHOW_FILTER:
      return {
        ...state,
        showDetails: false,
        showAdd: false,
        showFilter: payload
      };
    default:
      return state;
  }
};

export default toDoList;
