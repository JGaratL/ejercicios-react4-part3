import axios from 'axios';

export const fetchUser = () => {
  return (dispatch) => {
    const localStorageData = JSON.parse(localStorage.getItem('user'));

    if (localStorageData) {
      dispatch({ type: 'FETCH_USER_SUCCESS', payload: localStorageData });
    } else {
      axios
        .get('https://jsonplaceholder.typicode.com/users/1')
        .then(response => {
          dispatch({ type: 'FETCH_USER_SUCCESS', payload: response.data });
        })
        .catch(error => {
          dispatch({ type: 'FETCH_USER_ERROR', payload: error });
        });
    }
  };
};

export const updateEmail = (email) => {
  return {
    type: 'UPDATE_EMAIL',
    payload: email,
  };
};
