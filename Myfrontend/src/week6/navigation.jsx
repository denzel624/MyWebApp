import { Link } from 'react-router-dom';

function navigation() {
  return (
    <nav>
      <h3><Link to="/">Sample App</Link></h3>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/help">Help</Link></li>
        <li><Link to="/login">Log In</Link></li>
      </ul>
    </nav>
  );
}

export default navigation;