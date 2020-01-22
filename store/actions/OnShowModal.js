import { SHOW_DETAILS, SHOW_ADD, SHOW_FILTER } from '../types';

const OnShowModal = data => dispatch => {
  switch (data.type) {
    case 'showDetails': {
      return dispatch({
        type: SHOW_DETAILS,
        payload: data
      });
    }
    case 'showAdd': {
      return dispatch({
        type: SHOW_ADD,
        payload: data.showAdd
      });
    }
    case 'showFilter': {
      return dispatch({
        type: SHOW_FILTER,
        payload: data.showFilter
      });
    }
  }
};

export default OnShowModal;
