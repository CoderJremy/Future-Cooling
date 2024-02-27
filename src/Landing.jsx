import Nav from "./Nav";
import Hero from "./Hero";

const Landing = () => {
    const links = ["Home", "Diagnostic", "About", "Contact"];
    return (
        <div id="landing">
            <Nav links={links} />
            <Hero />
        </div>
    );
};

export default Landing;
