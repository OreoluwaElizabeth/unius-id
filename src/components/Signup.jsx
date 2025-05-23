import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

const Signup = () => {
    const [walletAddress, setWalletAddress] = useState("");
    const [isConnected, setIsConnected] = useState(false);
    const navigate = useNavigate();

    const handleConnectWallet  = () => {
        if (!isConnected) {
            alert('Redirecting to Sui Wallet or Download at sui.io...');
            setWalletAddress('0x1234567890abcdef1234567890abcdef12345678');
            setIsConnected(true);
        }
    };

    const handleRegister = (e) => {
        e.preventDefault();
        const nameInput = document.querySelector('input[type="text"]').value;
        const passwordInput = document.querySelector('input[type="password"]').value;
        if (walletAddress && passwordInput) {
            const userData = {
                name: nameInput,
                uniusId: `${nameInput}.unius`,
                walletAddress: walletAddress,
                walletName: 'Sui',
            };
            localStorage.setItem('uniusUser', JSON.stringify(userData));

            const initialActivity = [
                { id: 1, action: 'Account created', date: new Date().toLocaleDateString() },
                { id: 2, action: 'Connected Sui Wallet', date: new Date().toLocaleDateString() },
            ];
            localStorage.setItem('uniusActivityLog', JSON.stringify(initialActivity));
            localStorage.setItem('uniusMinted', 'false');
            navigate('/dashboard');
        } else {
            alert('Please connect your Sui wallet and enter a password to proceed.');
        }
    };

    return (
        <div className="bg-[#04203A] min-h-screen py-16 px-4 sm:px-6 lg:px-8 flex items-center justify-center">
            <div className="max-w-md w-full bg-white/5 backdrop-blur-sm rounded-xl p-8 shadow-lg text-center">
                <h1 className="text-3xl md:text-4xl font-bold text-white mb-6 animate-fade-in">
                    Create Your UID
                </h1>
                <p className="text-lg text-gray-300 mb-8">
                    Pick a name and connect your Sui wallet to get started.
                </p>
                <form onSubmit={handleRegister} className="space-y-6">
                    <div className="flex items-center justify-center">
                        <input
                            type="text"
                            placeholder="john"
                            className="w-full max-w-xs p-3 rounded-l-lg bg-gray-800 text-white border border-gray-600 focus:outline-none focus:border-blue-500"
                            required
                        />
                        <span className="p-3 bg-gray-700 rounded-r-lg text-gray-300 border border-gray-600 border-l-0">
                            .unius
                        </span>
                    </div>
                    <button
                        type="button"
                        onClick={handleConnectWallet}
                        className="w-full flex items-center justify-center bg-blue-300 text-white px-6 py-3 rounded-lg text-lg font-medium hover:bg-blue-200 transition transform hover:scale-105"
                    >
                        Connect Wallet (Sui)
                    </button>
                    <div className="flex items-center justify-center">
                        <input
                            type="text"
                            value={walletAddress}
                            readOnly
                            placeholder="Wallet address will appear here"
                            className="w-full max-w-xs p-3 rounded-lg bg-gray-800 text-white border border-gray-600 focus:outline-none"
                        />
                    </div>
                    <div className="flex items-center justify-center">
                        <input
                            type="password"
                            placeholder="Enter password"
                            className="w-full max-w-xs p-3 rounded-lg bg-gray-800 text-white border border-gray-600 focus:outline-none focus:border-blue-500"
                            required
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-blue-300 text-white px-6 py-3 rounded-lg text-lg font-medium hover:bg-blue-400 transition transform hover:scale-105"
                    >
                        Register
                    </button>
                </form>
                <p className="mt-6 text-gray-400">
                    Already have an account?{' '}
                    <Link to="/login" className="text-blue-400 hover:underline">
                        Log in
                    </Link>
                </p>
            </div>
        </div>
    );
};

export default Signup;