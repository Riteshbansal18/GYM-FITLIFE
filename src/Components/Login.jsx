import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = ({ onLoginSuccess }) => {
    const [isSignUp, setIsSignUp] = useState(false);
    const navigate = useNavigate();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');

    const toggle = () => setIsSignUp(!isSignUp);

    // Handle Sign In
    const handleSignIn = () => {
        const storedUser = JSON.parse(localStorage.getItem('user')); // Get user data from localStorage

        if (username === '' || password === '') {
            alert('Please enter both username and password.');
            return;
        }

        if (storedUser && storedUser.username === username && storedUser.password === password) {
            onLoginSuccess(); // Notify parent component of successful login
            navigate('/'); // Redirect to homepage
        } else {
            alert('Invalid credentials! Please try again.');
        }
    };

    // Handle Forgot Password
    const handleForgotPassword = () => {
        const emailInput = prompt('Please enter your email address to receive a new password:');
        if (emailInput) {
            alert(`A new password has been sent to ${emailInput}`);
        } else {
            alert('Please enter a valid email address.');
        }
    };

    // Handle Sign Up
    const handleSignUp = () => {
        if (name === '' || email === '' || username === '' || password === '') {
            alert('Please fill all the fields.');
            return;
        }

        // Store user data in localStorage
        const newUser = { name, email, username, password };
        localStorage.setItem('user', JSON.stringify(newUser));

        onLoginSuccess(); // Consider successful sign-up as login
        navigate('/'); // Redirect to homepage
    };

    return (
        <div className="flex items-center justify-center h-screen bg-gradient-to-r from-orange-500 to-orange-700">
            <div className={`flex w-full max-w-4xl transition-all duration-700 ${isSignUp ? 'justify-end' : 'justify-start'}`}>
                {/* Sign-Up Form */}
                <div className={`w-1/2 bg-white p-8 rounded-lg shadow-lg transition-transform duration-500 ${isSignUp ? 'transform scale-100' : 'transform scale-0'}`}>
                    <h2 className="text-2xl font-semibold mb-4 text-center text-orange-700">Join the FitLife Community</h2>
                    <p className="text-center mb-6 text-orange-600">Sign up and get ready to sweat!</p>
                    <div className="mb-4">
                        <input
                            type="text"
                            placeholder="Enter Name"
                            className="w-full p-3 border border-gray-300 rounded-lg"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                    </div>
                    <div className="mb-4">
                        <input
                            type="email"
                            placeholder="Enter Email"
                            className="w-full p-3 border border-gray-300 rounded-lg"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div className="mb-4">
                        <input
                            type="text"
                            placeholder="Enter Username"
                            className="w-full p-3 border border-gray-300 rounded-lg"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                        />
                    </div>
                    <div className="mb-6">
                        <input
                            type="password"
                            placeholder="Enter Password"
                            className="w-full p-3 border border-gray-300 rounded-lg"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <button onClick={handleSignUp} className="w-full py-3 bg-orange-600 text-white rounded-lg hover:bg-orange-700">Sign Up</button>
                    <p className="mt-4 text-center text-orange-600">
                        <span>Already have an account? </span>
                        <b onClick={toggle} className="text-blue-500 cursor-pointer">Sign in here</b>
                    </p>
                </div>

                {/* Sign-In Form */}
                <div className={`w-1/2 bg-white p-8 rounded-lg shadow-lg transition-transform duration-500 ${isSignUp ? 'transform scale-0' : 'transform scale-100'}`}>
                    <h2 className="text-2xl font-semibold mb-4 text-center text-orange-700">Welcome to FitLife</h2>
                    <p className="text-center mb-6 text-orange-600">Your fitness journey starts here.</p>
                    <div className="mb-4">
                        <input
                            type="text"
                            id="username"
                            placeholder="Enter Username"
                            className="w-full p-3 border border-gray-300 rounded-lg"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                        />
                    </div>
                    <div className="mb-6">
                        <input
                            type="password"
                            id="password"
                            placeholder="Enter Password"
                            className="w-full p-3 border border-gray-300 rounded-lg"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <button onClick={handleSignIn} className="w-full py-3 bg-orange-600 text-white rounded-lg hover:bg-orange-700">Sign In</button>
                    <p className="mt-4 text-center text-orange-600">
                        <button onClick={handleForgotPassword} className="text-blue-500 cursor-pointer">Forgot password?</button>
                    </p>
                    <p className="mt-4 text-center text-orange-600">
                        <span>Don't have an account? </span>
                        <b onClick={toggle} className="text-blue-500 cursor-pointer">Sign up here</b>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Login;
