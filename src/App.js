import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './Pages/Home/Home/Home';

import Navigation from './Pages/Shared/Navigation/Navigation';
import AuthProvider from './context/AuthProvider';
import About from './Pages/About/About';
import NotFound from './Pages/NotFound/NotFound';


function App() {
  return (
    <div>
      <AuthProvider>
        <Router>
          <Navigation></Navigation>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route exact path="/home">
              <Home></Home>
            </Route>
            <Route path="/about">
              <About></About>
            </Route>
            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
        </Router>

      </AuthProvider>
    </div>
  );
}

export default App;
