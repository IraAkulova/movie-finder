import { useState } from 'react';
import { useDispatch } from 'react-redux';
import operations from '../redux/auth/auth-operations';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const LoginView = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'email':
        return setEmail(value);
      case 'password':
        return setPassword(value);
      default:
        return;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(operations.logIn({ email, password }));
    setEmail('');
    setPassword('');
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <TextField
          id="outlined-basic"
          label="Email"
          variant="outlined"
          type="email"
          name="email"
          value={email}
          onChange={handleChange}
          sx={{
            mt: 5,
            ml: 5,
            width: 300,
          }}
        />
        <TextField
          id="outlined-basic"
          label="Password"
          variant="outlined"
          type="password"
          name="password"
          value={password}
          onChange={handleChange}
          sx={{
            mt: 5,
            ml: 5,
            width: 300,
          }}
        />
        <Button
          size="large"
          variant="contained"
          type="submit"
          sx={{
            mt: 6,
            ml: 5,
            mb: 5,
            maxWidth: '100px',
            maxHeight: '80px',
          }}
        >
          Log In
        </Button>
      </form>
    </div>
  );
};

export default LoginView;
