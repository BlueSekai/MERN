import React, { useState } from 'react';
import { TextField, Button, Container, Typography, Link } from '@mui/material'; // Import Link from Material-UI
import axios from 'axios';

function Login() {
  const [email, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = async (event) => {
    event.preventDefault();
    
    try {
      const response = await axios.post('http://localhost:5000/api/account/signin', {
        email,
        password,
      });
      // Redirect to another page upon successful login
    //   window.location.href = '/manage';
    
    } catch (error) {
      setError('Invalid email or password');
    }
  };

  const handleSignUp = () => {
    // Handle sign up logic here
    console.log('Redirecting to sign up page...');
    // Redirect to sign up page
    window.location.href = '/signup'
  };

  return (
    <Container maxWidth="sm">
      <Typography variant="h3" component="h1" gutterBottom>Login Page</Typography>
      <form onSubmit={handleLogin}>
        <TextField
          label="Email"
          variant="outlined"
          fullWidth
          value={email}
          onChange={(e) => setUsername(e.target.value)}
          margin="normal"
        />
        <TextField
          type="password"
          label="Password"
          variant="outlined"
          fullWidth
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          margin="normal"
        />
        {error && <Typography variant="body2" color="error">{error}</Typography>}
        <Button type="submit" variant="contained" color="primary" fullWidth>Login</Button>
      </form>
      {/* Add a link to the sign up page */}
      <Typography variant="body1" align="center" style={{ marginTop: '1rem' }}>
        Don't have an account? <Link href="/signup">Sign Up</Link>
      </Typography>
    </Container>
  );
}

export default Login;