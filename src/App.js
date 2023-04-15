import React from 'react';
//Components
import MainPage from './components/MainPage';
//Styles
import styles from './App.module.css';

const App = () => {

   return (
      <div className={styles.app}>
         <MainPage/>
      </div>
   );
}

export default App;