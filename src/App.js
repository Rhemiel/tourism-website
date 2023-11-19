import Navigation from './components/navigation-bar';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

function App() {
  return (
    <>
      <Router>
        <div class="navigation-bar">
          <Navigation/>
        </div>
      </Router>
    </>
  );
}

export default App;
