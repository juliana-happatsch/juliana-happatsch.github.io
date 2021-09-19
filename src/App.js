import './App.css';
import { Switch, Route } from 'react-router-dom';
import Start from './pages/start';
import Home from './pages/home';
import About from './pages/about';
import Skills from './pages/skills';
import Projects from './pages/projects';
import Contact from './pages/contact';

function App() {
  return (
    <div className="App">
        <Switch>
          <Route exact path="/" component={ Start } />
          <Route path="/home" component={ Home } />
          <Route path="/about" component={ About } />
          <Route path="/skills" component={ Skills } />
          <Route path="/projects" component={ Projects } />
          <Route path="/contact" component={ Contact } />
        </Switch>
    </div>
  );
}

export default App;
