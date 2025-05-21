import { Link } from 'react-router-dom';

const Herosection = () => {
    return (
        <section className="relative bg-[#04203A] text-white py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
            <div className="absolute inset-0">
                <div className="absolute -top-20 -left-20 w-64 h-64 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full blur-xl"></div>
                <div className="absolute -bottom-20 -right-20 w-72 h-72 bg-gradient-to-tr from-blue-400/20 to-purple-400/20 rounded-full blur-xl"></div>
            </div>
            <div className="relative z-10 max-w-4xl mx-auto text-center py-12 px-6 bg-white/5 backdrop-blur-sm rounded-xl shadow-lg">
                <p className="text-sm md:text-base uppercase tracking-widest text-blue-300 mb-4 animate-fade-in">
                    Powered by Universal Wallet Address (UWA)
                </p>
                <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-gray-200 bg-clip-text text-transparent animate-slide-up">
                    One identity for all your crypto—payments, gaming, logins, and more.
                </h1>
                <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto text-gray-100 animate-slide-up delay-100">
                    UID is a decentralized identity solution that enables users to manage their digital identities seamlessly.
                </p>
                <button className="bg-transparent text-white border-2 border-[#06486e] py-2 px-4 rounded-md text-base cursor-pointer hover:bg-[#6495ED] hover:text-white transition"><Link to="" className="text-white">Try it now</Link></button>
            </div>

            <style>
                {`
                    @keyframes fadeIn {
                        from { opacity: 0; }
                        to { opacity: 1; }
                    }
                    @keyframes slideUp {
                        from { transform: translateY(20px); opacity: 0; }
                        to { transform: translateY(0); opacity: 1; }
                    }
                    @keyframes bounceIn {
                        0% { transform: scale(0.95); opacity: 0; }
                        50% { transform: scale(1.05); }
                        100% { transform: scale(1); opacity: 1; }
                    }
                    .animate-fade-in {
                        animation: fadeIn 1s ease-in-out forwards;
                    }
                    .animate-slide-up {
                        animation: slideUp 1s ease-in-out forwards;
                    }
                    .animate-bounce-in {
                        animation: bounceIn 1s ease-in-out forwards;
                    }
                    .delay-100 {
                        animation-delay: 0.1s;
                    }
                    .delay-200 {
                        animation-delay: 0.2s;
                    }
                `}
            </style>
        </section>
    );
};

export default Herosection;