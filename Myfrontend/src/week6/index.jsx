import { Link } from 'react-router-dom';

function index() {
  return (
    <div style={{ padding: 0}}>
      <h1>Welcome to the Sample App</h1>
      <h2> This is the home page for the{' '}
        <a href="https://guides.rubyonrails.org/getting_started.html">Ruby on Rails Tutorial</a>{' '}
        sample application.
      </h2>

      <Link to="/signup">Sign up now!</Link>

      <br/>

      <div style={{ width: '600px', display: 'block', marginLeft: 'auto'}}>
      <img src="https://cdn.pixabay.com/photo/2018/05/04/16/50/cat-3374422_1280.jpg" alt="cat" style={{ width: '500px' }}/> </div>
    </div>
  );
}

export default index;