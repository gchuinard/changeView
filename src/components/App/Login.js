import React from 'react';
import PropTypes from 'prop-types';

const Login = ({ email, password, syncField, changeView, submitForm }) => {
  // 1. On reprend le contrôle du navigateur, via React. On force la valeur du champ input.
  // 2. On complète ce contrôle par la possibilité de modifier
  //         la valeur du champ. On branche un callback pour autoriser
  //         l'utilisateur a intéragir avec le champ, ce qui va modifier
  //         le state de l'application React.

  // const emailCallback = (event) => {
  //   syncField('email', event);
  // };

  // const passwordCallback = (event) => {
  //   syncField('password', event);
  // };

  return <form className="app-login" onSubmit={submitForm}>
    <h1 className="app-title">Connexion</h1>
    <p className="app-desc">Renseignez votre email et votre mot de passe pour accéder à votre compte</p>
    <input
      className="app-field-input"
      type="email"
      placeholder="Votre email"
      value={email}
      onChange={syncField('email')}
    />
    <input
      className="app-field-input"
      type="password"
      placeholder="Votre mot de passe"
      value={password}
      onChange={syncField('password')}
    />
    <button className="form-submit form-submit--login">Se connecter</button>
    <a
      className="app-link app-link--back"
      onClick={changeView('forgottenPassword')}
    >
      Mot de passe oublié
    </a>
  </form>;
};

Login.propTypes = {
  email: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  syncField: PropTypes.func.isRequired,
  changeView: PropTypes.func.isRequired,
  submitForm: PropTypes.func.isRequired,
};

export default Login;
