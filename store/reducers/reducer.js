import { combineReducers } from 'redux';
import toDoList from './toDoList';
import showModal from './showModal';

export default combineReducers({
  toDoList,
  showModal
});
