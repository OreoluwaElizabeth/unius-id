
const About = () => {
    return (
        <div className="bg-white py-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-3xl md:text-4xl font-bold text-black mb-6 animate-fade-in">
                    About Us
                </h2>
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                    Unius unified identity is a single, on-chain ID (like <span className="font-semibold">john.unius</span>) that users can use to make payments, sign-up and sign in to blockchain apps (like games, DeFi platforms, or social apps) and to do other things across different blockchains and wallets.
                </p>
                <div className="text-left max-w-2xl mx-auto mb-10 text-gray-600">
                    <p className="text-lg mb-4">This identity offers:</p>
                    <ul className="list-disc pl-5 space-y-2 text-base">
                        <li>Secure storage on the blockchain (e.g., Sui), ensuring you own it.</li>
                        <li>Private usage, hiding wallet addresses and real names like a nickname online.</li>
                        <li>Easy access across Ethereum, Solana, TON, and more, with any wallet (MetaMask, Trust Wallet, etc.).</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default About;