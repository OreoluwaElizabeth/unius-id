

const How = () => {
    return (
        <div className="bg-[#04203A] py-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-5xl mx-auto">
                <div className="text-center mb-12">
                    <h1 className="text-3xl md:text-4xl font-bold text-white animate-fade-in">
                        How It Works
                    </h1>
                    <p className="text-lg text-gray-300 mt-4">
                        Get started with UniusID in just a few steps.
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Step 1 */}
                    <div className="flex items-start group hover:bg-gray-900 p-4 rounded-lg transition-all duration-300">
                        <div className="flex-shrink-0 w-10 h-10 bg-blue-500 text-white rounded-full flex items-center justify-center mr-4 transform group-hover:scale-110 transition-transform duration-300">
                            1
                        </div>
                        <div>
                            <h3 className="text-lg font-semibold text-white">Sign Up for UniusID</h3>
                            <p className="text-gray-300">
                                Create your universal crypto ID, like <span className="font-semibold">john.unius</span>, on our app or website. It’s as easy as signing up for an email account.
                            </p>
                        </div>
                    </div>
                    {/* Step 2 */}
                    <div className="flex items-start group hover:bg-gray-900 p-4 rounded-lg transition-all duration-300">
                        <div className="flex-shrink-0 w-10 h-10 bg-blue-500 text-white rounded-full flex items-center justify-center mr-4 transform group-hover:scale-110 transition-transform duration-300">
                            2
                        </div>
                        <div>
                            <h3 className="text-lg font-semibold text-white">Link Your Wallets</h3>
                            <p className="text-gray-300">
                                Connect your wallets—like MetaMask, Trust Wallet, or TON Wallet—to your UniusID. Pick which wallet to use for each action.
                            </p>
                        </div>
                    </div>
                    {/* Step 3 */}
                    <div className="flex items-start group hover:bg-gray-900 p-4 rounded-lg transition-all duration-300">
                        <div className="flex-shrink-0 w-10 h-10 bg-blue-500 text-white rounded-full flex items-center justify-center mr-4 transform group-hover:scale-110 transition-transform duration-300">
                            3
                        </div>
                        <div>
                            <h3 className="text-lg font-semibold text-white">Use It Everywhere</h3>
                            <p className="text-gray-300">
                                Pay friends, sign up for games, or log into DeFi apps with <span className="font-semibold">john.unius</span>. It works across Ethereum, Solana, TON, and more.
                            </p>
                        </div>
                    </div>
                    {/* Step 4 */}
                    <div className="flex items-start group hover:bg-gray-900 p-4 rounded-lg transition-all duration-300">
                        <div className="flex-shrink-0 w-10 h-10 bg-blue-500 text-white rounded-full flex items-center justify-center mr-4 transform group-hover:scale-110 transition-transform duration-300">
                            4
                        </div>
                        <div>
                            <h3 className="text-lg font-semibold text-white">Stay Secure and Private</h3>
                            <p className="text-gray-300">
                                Your ID is stored on the blockchain (e.g., Sui), and your wallet addresses stay hidden. It’s safe, and you’re in control.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default How;