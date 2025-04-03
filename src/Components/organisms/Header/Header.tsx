import "./Header.css";
import Hero from "../../molecules/Hero/Hero";
import Navigation from "../../molecules/Navigation/Navigation";

const Header = (): React.JSX.Element => {
    return (
        <header className="header">
            <Hero />
            <Navigation />
        </header>
    );
};
export default Header;
