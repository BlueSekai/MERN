import React, { useState } from 'react';
import { CssBaseline, Container, Typography, TextField, Button, Grid } from '@mui/material';
import axios from 'axios';
import { useNavigate } from "react-router-dom"

function SignUp() {
    const [error, setError] = useState('');
    const [firstname, setFirstname] = useState('');
    const [lastname, setLastname] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const nav = useNavigate();

    const handleSignup = async (event) => {
        event.preventDefault();
        
        try {
            console.log("ddddd");
            const response = await axios.post('http://localhost:5000/api/account/signup', {
                firstname,
                lastname,
                email,
                password
            });
            // Redirect to another page upon successful login
            nav("/manage");
        } catch (error) {
            setError('Invalid email or password');
        }
    };

    return (
        <Container component="main" maxWidth="sm">
            <CssBaseline />
            <div>
                <Typography variant="h5" gutterBottom>Sign Up</Typography>
                <form onSubmit={handleSignup}>
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <TextField
                                variant="outlined"
                                required
                                fullWidth
                                id="firstName"
                                label="First Name"
                                name="firstName"
                                onChange={(e) => setFirstname(e.target.value)}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                variant="outlined"
                                required
                                fullWidth
                                id="lastName"
                                label="Last Name"
                                name="lastName"
                                onChange={(e) => setLastname(e.target.value)}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                variant="outlined"
                                required
                                fullWidth
                                id="email"
                                label="Email Address"
                                name="email"
                                type="email"
                                onChange={(e) => setEmail(e.target.value)}
                                error={!isValidEmail(email)}
                                helperText={!isValidEmail(email) && "Invalid email address"}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                variant="outlined"
                                required
                                fullWidth
                                id="password"
                                label="Password"
                                name="password"
                                type="password"
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </Grid>
                    </Grid>
                    <Button type="submit" fullWidth variant="contained" color="primary" style={{ marginTop: '1rem' }}>
                        Sign Up
                    </Button>
                </form>
            </div>
        </Container>
    );
}

// Function to validate email address
const isValidEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
};

export default SignUp;