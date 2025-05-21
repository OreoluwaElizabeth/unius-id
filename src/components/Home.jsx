import About from "./About";
import Faqs from "./Faqs";
import Features from "./Features";
import Feedback from "./Feedback";
import Footer from "./Footer";
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
            <Faqs />
            <Feedback />
            <Footer />
        </div>
    );
};

export default Home;