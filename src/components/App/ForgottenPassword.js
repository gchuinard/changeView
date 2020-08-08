import React from 'react';
import PropTypes from 'prop-types';

const ForgottenPassword = ({ email, syncField, changeView }) => {
  return <div className="app-fp">
    <h1 className="app-title">Mot de passe oublié ?</h1>
    <p className="app-desc">Renseignez votre email et nous enverrons un nouveau mot de passe.</p>
    <input
      className="app-field-input"
      type="email"
      placeholder="Votre email"
      value={email}
      onChange={syncField('email')}
    />
    <a
      className="app-link app-link--back"
      onClick={changeView('login')}
    >
      Retour
    </a>
    <button className="form-submit form-submit--forgottenPassword">Obtenir un nouveau mot de passe</button>
  </div>;
};

ForgottenPassword.propTypes = {
  email: PropTypes.string.isRequired,
  syncField: PropTypes.func.isRequired,
  changeView: PropTypes.func.isRequired
};

export default ForgottenPassword;
