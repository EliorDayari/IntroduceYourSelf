import logo from './logo.svg';
import './App.css';
import NavLinks from './shared/components/Navigation/NavLinks'
import { Switch,  BrowserRouter as Router,Route } from 'react-router-dom';
import Feed from './features/Feed/Feed'

function App() {
  return (

         <Router>
      <NavLinks/>
    <main>

      <Switch>
      <Route path="/" exact/>
      <Route path="/feed" component={Feed}/>

     </Switch>

    </main>
      </Router>
  
  );
}

export default App;
