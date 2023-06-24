import L1 from './Components/L1';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom'

function App() {
  return (
    <Router>
      <div>
        <nav style={{display: 'flex'}}>
          <ul>
            <li>
              <Link to="/">L1</Link>
            </li>
            <li>
              <Link to="/l2">L2</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path='/' element={<L1 />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
