const initialState = {
    user: JSON.parse(localStorage.getItem('user')) || null,
    error: null,
};
  
const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'FETCH_USER_SUCCESS':
            localStorage.setItem('user', JSON.stringify(action.payload));
            return {
                ...state,
                user: action.payload,
                error: null,
            };
        case 'UPDATE_EMAIL':
            const updatedUser = { ...state.user, email: action.payload };
            localStorage.setItem('user', JSON.stringify(updatedUser));
            return {
                ...state,
                user: updatedUser,
            };
        case 'FETCH_USER_ERROR':
            return {
                ...state,
                user: null,
                error: action.payload,
            };
        default:
            return state;
    }
};

export default userReducer;
