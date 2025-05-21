import { useState } from "react";

const Faqs = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    const faqs = [
        {
            question: "What is UID?",
            answer: "UID is a single, on-chain identity developed by Unius, powered by Universal Wallet Address (UWA) technology, that enables users to make payments, sign up, and sign in to blockchain apps like games, DeFi platforms, or social apps across various blockchains (Ethereum, Solana, TON) and wallets (MetaMask, Trust Wallet), all while ensuring security, privacy, and ease of use."
        },
        {
            question: "How does UID works?",
            answer: "UID works by allowing you to create a single on-chain identity (e.g., john.unius) on our app or website, link it to multiple wallets like MetaMask or Trust Wallet, use it for payments, sign-ups, and sign-ins across blockchains such as Ethereum, Solana, and TON, and ensures security and privacy through blockchain storage and hidden wallet addresses, all powered by Universal Wallet Address (UWA) technology."
        },
        {
            question: "Why use UID?",
            answer: "You should use UID because it simplifies your crypto experience with a single, secure, and private on-chain identity that works across all blockchains and wallets, making payments, sign-ups, and sign-ins effortless while keeping your wallet addresses hidden and supporting wallet-created names."
        },
        {
            question: "What are the benefits of UID?",
            answer: "Benefits include providing a single, easy-to-use identity for payments, sign-ups, and sign-ins across all blockchains and wallets, ensuring secure blockchain storage, maintaining privacy by hiding wallet addresses, enabling seamless interoperability between Ethereum, Solana, TON, and more, and supporting wallet-created names like john.metamask for enhanced flexibility."
        },
        {
            question: "Is my UID secure?",
            answer: "Yes, UID is stored on blockchain and you own it."
        },
        {
            question: "Can I customize my UID?",
            answer: "No, UID is non-customizable."
        },
        {
            question: "Does UID work on all blockchain?",
            answer: "Yes, UID works on all blockchain."
        }
    ];

    return (
        <div className="bg-white py-16 px-4 sm:px-6 lg:px-8 border-t border-gray-700 pt-7">
            <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold text-black text-center mb-12">
                    Frequently Asked Questions
                </h2>
                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <div key={index} className="bg-gray-800 rounded-lg shadow-md">
                            <button 
                                onClick={() => toggleFAQ(index)}
                                className="w-full text-left p-4 flex justify-between items-center focus:outline-none"
                            >
                                <span className="text-lg font-medium text-white">{faq.question}</span>
                                <span className="text-white text-xl">
                                    {openIndex === index ? '-' : '+'}
                                </span>
                            </button>
                            {openIndex === index && (
                                <div className="p-4 border-t border-gray-700">
                                    <p className="text-gray-300">{faq.answer}</p>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Faqs;