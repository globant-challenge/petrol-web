import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import FaqWidget from '../../FaqWidget';
import Login from '../../Login';

function FaqLayout({ user }) {
  return (
    user
      ? <FaqWidget isAdmin={user.admin} />
      : <Login />
  );
}

FaqLayout.propTypes = {
  user: PropTypes.object,
};

const mapStateToProps = ({ session: { user } }) => ({ user });

export default connect(mapStateToProps)(FaqLayout);
