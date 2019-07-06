import { showLoading, hideLoading } from 'react-redux-loading';
import { receiveCategories } from '../actions/categories';
import { receivePosts } from '../actions/posts';
import { getInitialData } from "../utils/api";

export function handleInitialData() {
  return (dispatch) => {
    dispatch(showLoading());

    // return getCategories()
    //   .then((categories) => {
    //     dispatch(receiveCategories(categories));
    //     dispatch(hideLoading());
    //   }, (reason) => {
    //     alert("Error accessing api url.\n" + reason);
    //     dispatch(hideLoading());
    //   });

    return getInitialData()
      .then(({categories, posts}) => {
        dispatch(receiveCategories(categories));
        dispatch(receivePosts(posts));
        dispatch(hideLoading());
      }, (reason) => {
          alert("Error accessing api url.\n" + reason);
          dispatch(hideLoading());
      });
  }
}
