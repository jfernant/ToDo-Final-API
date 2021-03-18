import './App.css';
import BrandHeader from './components/BrandHeader/BrandHeader';
import LoginPage from './components/Pages/Login';
import Todo from './components/Pages/Todo/Todo';
import Covid from './components/Pages/Covid/Covid';

import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';

function App() {
  return (
    <Router>
      <section>
        <BrandHeader></BrandHeader>
          <Switch>
            <Route path="/" exact>
                <LoginPage></LoginPage>
            </Route>
            <Route path="/todos" exact>
              <Todo />
            </Route>
            <Route path="/covid" exact>
            <Covid></Covid>
            </Route>            
          </Switch>   
      </section>
    </Router>
  );
}

export default App;
