import L1 from './Components/L1';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom'
import L2 from './Components/L2';

function App() {
  return (
    <Router>
      <div>
        <nav >
          <ul style={{display: 'flex', gap:'5px', listStyleType:'none'}}>
            <li style={{}}>
              <Link to="/">L1</Link>
            </li>
            <li>
              <Link to="/l2">L2</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path='/' element={<L1 />} />
          <Route path='/l2' element={<L2 />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
