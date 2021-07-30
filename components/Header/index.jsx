import Link from 'next/link';

import { HOME } from "../../routes";
import StyledSimpleHeader from "./styles/StyledSimpleHeader";
import TextLogo from "../TextLogo";
import NavBar from "../NavBar";

const Header = (props) => {
    return (
        <StyledSimpleHeader>
            <div className='headerContent'>
                <TextLogo />
                <NavBar />
            </div>
        </StyledSimpleHeader>
    )
}

Header.propTypes = {};

export default Header;
