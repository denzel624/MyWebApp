import { useState } from 'react';

function Signup() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmation, setConfirmation] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name, email, password, confirmation);
  };

  return (
    <div>
      <h1>Sign Up</h1>

      <form onSubmit={handleSubmit}>
        <div>
          <label>Name</label><br/>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <br/>

        <div>
          <label>Email</label><br/>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <br/>

        <div>
          <label>Password</label><br/>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <br/>

        <div>
          <label>Confirmation</label><br/>
          <input
            type="confirmation"
            value={confirmation}
            onChange={(e) => setConfirmation(e.target.value)}
            />
        </div>

        <br/>

        <button type="submit">Create Account</button>
      </form>
    </div>
  );
}

export default Signup;