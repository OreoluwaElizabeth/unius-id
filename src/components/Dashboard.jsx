import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

const Dashboard = () => {
    const userData = JSON.parse(localStorage.getItem('uniusUser') || '{}');
    const { name = 'User', uniusId = 'user.unius', walletAddress = '0x000...', walletName = 'Sui'} = userData;
    const initialActivity = JSON.parse(localStorage.getItem('uniusActivityLog' || '[]'));

    const [isMinted, setIsMinted] = useState(localStorage.getItem('uniusMinted') === 'true');
    const [connectedWallets, setConnectedWallets] = useState([walletName]);
    const [activityLog, setActivityLog] = useState(initialActivity);
    const [notificationIndex, setNotificationIndex] = useState(0);
    const [showWalletList, setShowWalletList] = useState(false);

    useEffect(() => {
        if (!isMinted) {
            const interval = setInterval(() => {
                setNotificationIndex((prev) => (prev === 0 ? 1 : 0));
            }, 5000);
            return () => clearInterval(interval);
        }
    }, [isMinted]);

    const handleMint = () => {
        setIsMinted(true);
        localStorage.setItem('uniusMinted', true);
        const newActivity = [
            ...activityLog,
            { id: prev.length + 1, action: 'UID minted', date: new Date().toLocaleDateString() },
        ];
        setActivityLog(newActivity);
        localStorage.setItem('uniusActivityLog', JSON.stringify(newActivity));
    };

    const handleConnectWallet = () => {
        setShowWalletList(!showWalletList);
    };

    const supportedWallets = ['Sui', 'MetaMask', 'Trust Wallet'];

    return (
        <div className="bg-[#04203A] min-h-screen flex">
            <div className="w-64 bg-white/5 backdrop-blur-sm p-6 md:flex md:flex-col hidden">
                <h2 className="text-2xl font-bold text-white mb-8">UniusID</h2>
                <nav className="space-y-4">
                    <Link to="#" className="block text-gray-400 hover:text-blue-200">Settings</Link>
                    <Link to="/login" className="block text-gray-400 hover:text-blue-200">Logout</Link>
                </nav>
            </div>
            <div className="flex-1 p-6 sm:p-8">
                <div className="md:hidden flex justify-between items-center bg-white/5 backdrop-blur-sm p-4 rounded-lg mb-6">
                    <h2 className="text-xl font-bold text-white">UniusID</h2>
                    <nav className="flex space-x-4">
                        <Link to="#" className="text-gray-400 hover:text-blue-200">Settings</Link>
                        <Link to="/login" className="text-gray-400 hover:text-blue-200">Logout</Link>
                    </nav>
                </div>
                <h1 className="text-3xl md:text-4xl font-bold text-white mb-8 animate-fade-in">
                    Welcome back, {name}
                </h1>
                {!isMinted && (
                    <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 mb-6 text-left">
                        <p className="text-gray-300">
                            {notificationIndex === 0
                                ? 'Warning: You should mint your UID within 14 days to avoid disconnection.'
                                : 'Notice: To mint your UID, you must have at least 0.9 to 1 SUI in your wallet.'}
                        </p>
                    </div>
                )}
                <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 mb-6 flex flex-col min-h-[200px]">
                    <h3 className="text-xl font-semibold text-white mb-4">Profile Summary</h3>
                    <div className="flex-1">
                        <p className="text-gray-300">
                            <span className="font-medium">UniusID: </span>
                            {uniusId}
                        </p>
                        <p className="text-gray-300">
                            <span className="font-medium">Status: </span>
                            {isMinted ? 'Active on chain' : 'Active not on chain'}
                        </p>
                        <p className="text-gray-300">
                            <span className="font-medium">Owner Wallet: </span>
                            {walletAddress}
                        </p>
                        {isMinted && (
                            <p className="text-gray-300">
                                <span className="font-medium">Minted Date: </span>
                                {new Date().toLocaleDateString()}
                            </p>
                        )}
                    </div>
                    {!isMinted && (
                        <div className="self-end">
                            <button
                                className="bg-blue-300 text-white px-6 py-3 rounded-lg text-lg font-medium hover:bg-blue-200 transition transform hover:scale-105"
                                onClick={handleMint}
                            >
                                Mint Your UID
                            </button>
                        </div>
                    )}
                </div>
                <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 mb-6">
                    <h3 className="text-xl font-semibold text-white mb-4">Connected Wallets</h3>
                    {connectedWallets.map((wallet, index) => (
                        <p key={index} className="text-gray-300 mb-2">
                            <span className="font-medium">Wallet {index + 1}:</span> {wallet}
                        </p>
                    ))}
                    <button
                        className="bg-blue-300 text-white px-4 py-2 rounded-lg font-medium hover:bg-blue-200 transition transform hover:scale-105"
                        onClick={handleConnectWallet}
                    >
                        Connect Wallet
                    </button>
                    {showWalletList && (
                        <div className="mt-2">
                            {supportedWallets.map((wallet) => (
                                <p
                                    key={wallet}
                                    className="text-gray-300 hover:text-blue-200 cursor-pointer"
                                    onClick={() => {
                                        setConnectedWallets([...connectedWallets, wallet]);
                                        const newActivity = [
                                            ...activityLog,
                                            { id: activityLog.length + 1, action: `Connected ${wallet} Wallet`, date: new Date().toLocaleDateString() },
                                        ];
                                        setActivityLog(newActivity);
                                        localStorage.setItem('uniusActivityLog', JSON.stringify(newActivity));
                                        setShowWalletList(false);
                                    }}
                                >
                                    {wallet}
                                </p>
                            ))}
                        </div>
                    )}
                </div>
                <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6">
                    <h3 className="text-xl font-semibold text-white mb-4">Activity Log</h3>
                    <ul className="space-y-3">
                        {activityLog.map((activity) => (
                            <li key={activity.id} className="text-gray-300">
                                {activity.action} - <span className="text-gray-400">{activity.date}</span>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="mt-6">
                    <button
                        className="bg-blue-300 text-white px-6 py-3 rounded-lg text-lg font-medium hover:bg-blue-200 transition transform hover:scale-105"
                        onClick={() => setShowWalletList(true)}
                    >
                        Select Wallet to Use
                    </button>
                    {showWalletList && (
                        <div className="mt-2">
                            {connectedWallets.map((wallet, index) => (
                                <p key={index} className="text-gray-300">
                                    {wallet}
                                </p>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Dashboard;