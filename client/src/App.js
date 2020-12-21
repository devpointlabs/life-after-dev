import logo from './logo.svg';
import './App.css';
import { Container } from 'semantic-ui-react';
import { Route, Switch } from 'react-router-dom';
import Home from './demo/Home';
import Things from './demo/Things';
import NoMatch from './components/NoMatch';
import Navbar from './components/Navbar';
import Login from './components/Login';
import Register from './components/Register';

function App() {
  return (
    <>
    <Navbar />
    <Container>
      <Switch>
      <Route exact path= "/" component={Home}/>
      <Route exact path= "/login" component={Login}/>
      <Route exact path= "/register" component={Register}/>
      <Route component={NoMatch}/>
      </Switch>
    </Container>
    </>
  );
}

export default App;
