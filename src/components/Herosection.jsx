import { Link } from 'react-router-dom';

const Herosection = () => {
    return (
        <section className="relative bg-gradient-to-r from-[#04203A] to-[#032B44] text-white py-37 px-4 text-center overflow-hidden">
            <div className="absolute inset-0 opacity-10">
                <div className="absolute top-0 left-0 w-32 h-32 bg-[#6495ED] rounded-full -translate-x-1/2 -translate-y-1/2"></div>
                    <div className="absolute bottom-0 right-0 w-40 h-40 bg-[#6495ED] rounded-full translate-x-1/2 translate-y-1/2"></div>
            </div>
            <p className="text-sm md:text-base uppercase tracking-widest text-[#6495ED] mb-4 animate-fade-in">
                Powered by Universal Wallet Address (UWA)
            </p>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-slide-up">
                One identity for all your crypto—payments, gaming, logins, and more.
            </h1>
            <p className="text-lg md:text-xl mb-8 max-w-3xl mx-auto animate-slide-up delay-100">
                UniusID is a decentralized identity solution that enables users to manage their digital identities
            </p>
            <button className="bg-transparent text-white border-2 border-[#06486e] px-6 py-3 rounded-md text-base font-medium hover:bg-[#6495ED] hover:text-white transition cursor-pointer transform hover:scale-105 duration-300 animate-fade-in delay-200"><Link to="/signup" className="text-white">Try it Now</Link></button>

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
                    .animate-fade-in {
                        animation: fadeIn 1s ease-in-out forwards;
                    }
                    .animate-slide-up {
                        animation: slideUp 1s ease-in-out forwards;
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