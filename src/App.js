import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { fetchUser } from './redux/actions/userActions';
import Header from './components/Header';
import Email from './components/Email';

const App = ({ fetchUser }) => {
  useEffect(() => {
    fetchUser();
  }, [fetchUser]);

  return (
    <div>
      <Header />
      <Email />
    </div>
  );
}

export default connect(null, { fetchUser })(App);
