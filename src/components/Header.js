// src/components/Header.js
import React from 'react';
import { connect } from 'react-redux';

const Header = ({ user }) => {
  if(!user) {
    return <div>Cargando...</div>;
  }
  
  return (
    <div>
      <h1>{user.name}</h1>
      <p>{user.username}</p>
    </div>
  );
};

const mapStateToProps = state => ({
  user: state.user.user,
});

export default connect(mapStateToProps)(Header);
