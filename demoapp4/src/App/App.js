import React, { Component } from 'react';
import CSSModules from 'react-css-modules';
import logo from '../logo.svg';
import styles from './App.scss';


CSSModules(styles, {allowMultiple: true})
class App extends Component {
  render() {
    return (
      <div className={styles.app}>
        <div className={styles.appHeader}>
          <img src={logo} className={styles.appLogo} alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <div className={styles.newHead}>
            something here
        </div>
        <p className={styles.appIntro}>
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
