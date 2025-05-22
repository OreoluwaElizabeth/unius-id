import { Link } from 'react-router-dom';
import { useState } from 'react';

const Login = () => {
    const [identifier, setIdentifier] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = (e) => {
        e.preventDefault();
        if (identifier && password) {
            alert('Login successful! Welcome back, ' + identifier);
        } else {
            alert('Please enter your UID/wallet address and password');
        }
    };
    
    return (
        <div className="bg-[#04203A] min-h-screen py-16 px-4 sm:px-6 lg:px-8 flex items-center justify-center">
            <div className="max-w-md w-full bg-white/5 backdrop-blur-sm rounded-xl p-8 shadow-lg text-center">
                <h1 className="text-3xl md:text-4xl font-bold text-white mb-6 animate-fade-in">
                    Log In to Your UID
                </h1>
                <p className="text-lg text-gray-300 mb-8">
                    Enter your UID or wallet address, and password to access your account.
                </p>
                <form onSubmit={handleLogin} className="space-y-6">
                    <div className="flex items-center justify-center">
                        <input
                            type="text"
                            placeholder="john.unius or sui wallet address"
                            value={identifier}
                            onChange={(e) => setIdentifier(e.target.value)}
                            className="w-full max-w-xs p-3 rounded-lg bg-gray-800 text-white border border-gray-600 focus:outline-none focus:border-blue-500"
                            required
                        />
                    </div>
                    <div className="flex items-center justify-center">
                        <input
                            type="password"
                            placeholder="Enter password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full max-w-xs p-3 rounded-lg bg-gray-800 text-white border border-gray-600 focus:outline-none focus:border-blue-500"
                            required
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-blue-300 text-white px-6 py-3 rounded-lg text-lg font-medium hover:bg-blue-200 transition transform hover:scale-105"
                    >
                        Login
                    </button>
                </form>
                <p className="mt-6 text-gray-400">
                    Don’t have an account?{' '}
                    <Link to="/signup" className="text-blue-400 hover:underline">
                        Sign up
                    </Link>
                </p>
            </div>
        </div>
    );
};

export default Login;