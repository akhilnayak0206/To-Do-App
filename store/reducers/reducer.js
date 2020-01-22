import { combineReducers } from 'redux';
import toDoList from './toDoList';
import showModal from './showModal';
import filterTask from './filterTask';

export default combineReducers({
  toDoList,
  showModal,
  filterTask
});
