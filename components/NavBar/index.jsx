import Link from 'next/link';
import StyledNavBar from "./styles/StyledNavBar";

const NavBar = (props) => {
    return (
        <StyledNavBar>
            <Link href="#">About</Link>
            <Link href="#">Portfolio</Link>
            <Link href="#">Contact</Link>
        </StyledNavBar>
    )
}

NavBar.propTypes = {};

export default NavBar;
