import { MODIFY_STATUS } from '../types';

const OnChangeStatus = data => dispatch => {
  return dispatch({
    type: MODIFY_STATUS,
    payload: data
  });
};

export default OnChangeStatus;
