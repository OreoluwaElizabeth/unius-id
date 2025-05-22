import logo from "../assets/images/unius logo png white 1.png";
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="bg-[#04203A] text-white relative px-2 py-2 z-50">
            <div className="flex items-center justify-between">
                <div className="flex items-center">
                    <img
                        src={logo}
                        alt = "logo"
                        className="h-12"
                    />
                    <div className="text-2xl md:text-xl font-bold ml-[-12px]">UNIUS</div>
                </div>

                <ul className="flex list-none gap-8 m-0 p-0">
                    <li>
                        <a href="/" className="text-white no-underline text-base hover:text-[#6495ED]">Home</a>
                    </li>
                    <li>
                        <a href="/" className="text-white no-underline text-base hover:text-[#6495ED]">AboutUs</a>
                    </li>
                    <li>
                        <a href="/" className="text-white no-underline text-base hover:text-[#6495ED]">FAQs</a>
                    </li>
                    <li>
                        <a href="/" className="text-white no-underline text-base hover:text-[#6495ED]">Docs</a>
                    </li>
                </ul>
                <button className="bg-transparent text-white border-2 border-[#06486e] py-2 px-4 rounded-md text-base cursor-pointer hover:bg-[#6495ED] hover:text-white transition"><Link to="/signup" className="text-white">Get Started</Link></button>
            </div>
        </nav>
    );
};

export default Navbar;