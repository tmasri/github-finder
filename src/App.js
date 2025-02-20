import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import NavBar from './components/layout/Navbar';
import Alert from './components/layout/Alert';
import User from './components/users/User';
import About from './components/pages/About';
import Home from './components/pages/Home';
import NotFound from './components/pages/NotFound';
import GithubState from './context/github/GithubState';
import AlertState from './context/alert/AlertState';

import './App.css';

const App = () => {
   return (
      <GithubState>
         <AlertState>
            <Router>
               <div className='App'>
                  <NavBar />
                  <div className='container'>
                     <Alert />
                     <Switch>
                        <Route exact path='/react-github-finder-tutorial' component={Home} />
                        <Route exact path='/react-github-finder-tutorial/about' component={About} />
                        <Route exact path='/react-github-finder-tutorial/user/:login' component={User} />
                        <Route component={NotFound} />
                     </Switch>
                  </div>
               </div>
            </Router>
         </AlertState>
      </GithubState>
   );
};

export default App;
