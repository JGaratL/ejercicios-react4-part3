import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateEmail } from '../redux/actions/userActions';

const Email = () => {
    const dispatch = useDispatch();
    const user = useSelector(state => state.user.user);
    const [email, setEmail] = useState(user ? user.email : '');

    const handleChange = (e) => {
        setEmail(e.target.value);
    };

    const handleClick = () => {
        dispatch(updateEmail(email));
    };

    return (
        <div>
            <input type="email" value={email} onChange={handleChange} />
            <button onClick={handleClick}>Update Email</button>
        </div>
    );
};

export default Email;
