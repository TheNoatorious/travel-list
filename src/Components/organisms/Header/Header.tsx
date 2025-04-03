import "./Header.css";
import Logo from "../../molecules/Logo/Logo";
import Navigation from "../../molecules/Navigation/Navigation";

const Header = (): React.JSX.Element => {
    return (
        <header className="header">
            <Logo />
            <Navigation />
        </header>
    );
};
export default Header;
