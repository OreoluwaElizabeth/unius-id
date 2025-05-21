import About from "./About";
import Features from "./Features";
import Herosection from "./Herosection";
import How from "./How";
import Navbar from "./Navbar";

const Home = () => {
    return (
        <div>
            <Navbar/>
            <Herosection />
            <Features />
            <How />
            <About />
        </div>
    );
};

export default Home;