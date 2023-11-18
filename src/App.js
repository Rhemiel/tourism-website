import Navigation from './components/navigation-bar';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

function App() {
  return (
    <>
      <Router>
        <Navigation/>
        
      </Router>
    </>
  );
}

export default App;
