import React from 'react';
import axios from 'axios';


import Login from 'src/components/App/Login';
import ForgottenPassword from 'src/components/App/ForgottenPassword';

import './app.scss';

class App extends React.Component {
  state = {
    // L'email de l'utilisateur en cours de frappe au clavier.
    view: 'login',
    email: '',
    password: ''
  }

  // syncEmailData = (event) => {
  //   // On récupère la valeur de l'attribut HTML de l'input dans la page,
  //   // en utilisant l'API du DOM (.target.value).
  //   const toto = event.target.value;
  //   // On met à jour le state et on déclenche un refresh de l'élément React.
  //   this.setState({ email: toto });
  // }

  // syncPasswordData = (event) => {
  //   // On récupère la valeur de l'attribut HTML de l'input dans la page,
  //   // en utilisant l'API du DOM (.target.value).
  //   const toto = event.target.value;
  //   // On met à jour le state et on déclenche un refresh de l'élément React.
  //   this.setState({ password: toto });
  // }



  // syncField = (fieldName, event) => {
  //   // On récupère la valeur de l'attribut HTML de l'input dans la page,
  //   // en utilisant l'API du DOM (.target.value).
  //   const newValue = event.target.value;
  //   // On met à jour le state et on déclenche un refresh de l'élément React.
  //   this.setState({ [fieldName]: newValue });
  // }

  syncField = (fieldName) => {
    return (event) => {
      // On récupère la valeur de l'attribut HTML de l'input dans la page,
      // en utilisant l'API du DOM (.target.value).
      const newValue = event.target.value;
      // On met à jour le state et on déclenche un refresh de l'élément React.
      this.setState({ [fieldName]: newValue });
    };
  }

  // (viewName) => {
  //   this.setState({ view: viewName });
  // }

  // Méthode du cycle de vie de l'élément React automatiquement déclenchée lors
  // du rendu initial.
  constructor(props) {
    super(props);

    // React modifie l'URL du navigateur, pour donner l'illusion d'une page
    // qui en fait correspond à la vue par défaut. En plus, on mémorise dans
    // l'état du navigateur, pour cette "page" (== entrée dans l'historique de
    // navigation) la vue React courante.
    window.history.replaceState({
      reactView: this.state.view },
      null,
      `/${this.state.view}`
    );

    // On se prépare à pou
    // (ex. l'utilisateur agit sur les flèches <- -> du navigateur).
    // Il faut dans ce cas modifier la vue courante de l'application React.
    window.addEventListener('popstate', (event) => {
      this.setState({ view: event.state.reactView });
    });

    // TODO: gérer le refresh de la page (il faut réafficher la bonne vue React).
  }

  changeView = (viewName) => {
    return (event) => {
      // Màj de l'état de l'application React.
      this.setState({ view: viewName });

      // Màj de l'état du navigateur
      window.history.pushState({ reactView: viewName }, null, `/${viewName}`);

      console.log('changeView', viewName, window.history.state);
    }
  }

  sendLoginRequest = (event) => {
    event.preventDefault();
    const promise = axios.post('http://localhost:3001/login', {
      email: this.state.email,
      password: this.state.password
    });
    // Callback de succès (réponse OK)
    promise.then((response) => {
      console.log(response);
      this.setState({
        view: 'logged-in',
        username: response.data
      });
    });
  }

  render() {
    // Quelle est la vue actuelle ?
    const view = this.state.view;

    return <div className="app">
      {
        view === 'login' && <Login
          email={this.state.email}
          password={this.state.password}
          syncField={this.syncField}
          changeView={this.changeView}
          submitForm={this.sendLoginRequest}
        />
      }

      {
        view === 'forgottenPassword' && <ForgottenPassword
          email={this.state.email}
          syncField={this.syncField}
          changeView={this.changeView}
        />
      }

      {
        view === 'logged-in' && <div>Bienvenue {this.state.username} !</div>
      }
    </div>;
  }
}

export default App;
