import uwa from "../assets/images/unius logo png white 1.png";
import twit from "../assets/images/new tweet.png";
import tele from "../assets/images/new telegram.png";
import discord from "../assets/images/new discord.png";
import insta from "../assets/images/insta.png";
import more from "../assets/images/menu.png";

const Footer = () => {
    return (
        <footer className="bg-[#04203A] text-white py-12 px-4 sm:px-6 lg:px-8 border-t border-gray-700 pt-6">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
                    <div className="col-span-1">
                        <img src={uwa} alt="UWA Logo" className="h-10 mb-4" />
                        <p className="text-gray-400 text-sm">
                            UID is a single, on-chain identity developed by Unius and also powered by Universal Wallet Address(UWA).
                        </p>
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Product</h3>
                        <ul className="space-y-2 text-gray-400 text-sm">
                            <li><a href="/" className="hover:text-indigo-400 transition">Home</a></li>
                            <li><a href="#" className="hover:text-indigo-400 transition">How It Works</a></li>
                            <li><a href="#" className="hover:text-indigo-400 transition">About UWA</a></li>
                            <li><a href="#" className="hover:text-indigo-400 transition">FAQs</a></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Company</h3>
                        <ul className="space-y-2 text-gray-400 text-sm">
                            <li><a href="#" className="hover:text-indigo-400 transition">About Us</a></li>
                            <li><a href="#" className="hover:text-indigo-400 transition">Blog</a></li>
                            <li><a href="#" className="hover:text-indigo-400 transition">Careers</a></li>
                            <li><a href="#" className="hover:text-indigo-400 transition">Contact</a></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Support</h3>
                        <ul className="space-y-2 text-gray-400 text-sm">
                            <li><a href="#" className="hover:text-indigo-400 transition">Help Center</a></li>
                            <li><a href="#" className="hover:text-indigo-400 transition">Terms of Service</a></li>
                            <li><a href="#" className="hover:text-indigo-400 transition">Privacy Policy</a></li>
                            <li><a href="#" className="hover:text-indigo-400 transition">Feedback</a></li>
                        </ul>
                    </div>
                </div>

                <div className="flex flex-col md:flex-row justify-between items-center">
                    <div className="flex space-x-4 mb-4 md:mb-0">
                        <a href="#" className="hover:opacity-80 transition">
                            <img src={twit} alt="Twitter" className="h-6 w-6" />
                        </a>
                        <a href="#" className="hover:opacity-80 transition">
                            <img src={tele} alt="Telegram" className="h-6 w-6" />
                        </a>
                        <a href="#" className="hover:opacity-80 transition">
                            <img src={discord} alt="Discord" className="h-6 w-6" />
                        </a>
                        <a href="#" className="hover:opacity-80 transition">
                            <img src={insta} alt="Instagram" className="h-6 w-6" />
                        </a>
                        <a href="#" className="hover:opacity-80 transition">
                            <img src={more} alt="More" className="h-6 w-6" />
                        </a>
                    </div>
                    <p className="text-gray-400 text-sm">
                        © 2025 UWA. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    )
}

export default Footer;