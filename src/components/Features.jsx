

const Features = () => {
    return (
        <div className="bg-white py-16 px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
                <h1 className="text-4xl font-bold text-[#04203A] animate-fade-in">Features</h1>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                <div className="flex items-start group hover:bg-gray-50 p-4 rounded-lg transition-all duration-300">
                    <div className="flex-shrink-0 w-10 h-10 bg-blue-500 text-white rounded-full flex items-center justify-center mr-4 transform group-hover:scale-110 transition-transform duration-300">
                        1
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold text-gray-900">One ID for Everything</h3>
                        <p className="text-gray-600">
                            You can use it to pay, sign up, sign in, or do other things in any crypto app or game.
                        </p>
                    </div>
                </div>
                <div className="flex items-start group hover:bg-gray-50 p-4 rounded-lg transition-all duration-300">
                    <div className="flex-shrink-0 w-10 h-10 bg-blue-500 text-white rounded-full flex items-center justify-center mr-4 transform group-hover:scale-110 transition-transform duration-300">
                        2
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold text-gray-900">Works with all Wallets</h3>
                        <p className="text-gray-600">
                            Link multiple wallets (MetaMask, Trust Wallet, Binance Wallet, TON Wallet) to your ID.
                        </p>
                    </div>
                </div>
                <div className="flex items-start group hover:bg-gray-50 p-4 rounded-lg transition-all duration-300">
                    <div className="flex-shrink-0 w-10 h-10 bg-blue-500 text-white rounded-full flex items-center justify-center mr-4 transform group-hover:scale-110 transition-transform duration-300">
                        3
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold text-gray-900">Works on All Blockchains</h3>
                        <p className="text-gray-600">
                            Unius ID moves money or items between blockchains (e.g., pay on Ethereum, get it on Solana).
                        </p>
                    </div>
                </div>
                <div className="flex items-start group hover:bg-gray-50 p-4 rounded-lg transition-all duration-300">
                    <div className="flex-shrink-0 w-10 h-10 bg-blue-500 text-white rounded-full flex items-center justify-center mr-4 transform group-hover:scale-110 transition-transform duration-300">
                        4
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold text-gray-900">On-Chain Security</h3>
                        <p className="text-gray-600">
                            Your ID is stored on a blockchain (e.g., Sui), so it’s secure and you own it.
                        </p>
                    </div>
                </div>
                <div className="flex items-start group hover:bg-gray-50 p-4 rounded-lg transition-all duration-300">
                    <div className="flex-shrink-0 w-10 h-10 bg-blue-500 text-white rounded-full flex items-center justify-center mr-4 transform group-hover:scale-110 transition-transform duration-300">
                        5
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold text-gray-900">Private and Safe</h3>
                        <p className="text-gray-600">
                            Nobody can see your wallet addresses or real name, it’s like using a nickname online instead of your real identity.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Features;