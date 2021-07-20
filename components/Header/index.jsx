import Link from 'next/link';

import { HOME } from "../../routes";
import StyledSimpleHeader from "./styles/StyledSimpleHeader";
import TextLogo from "../TextLogo";

const Header = (props) => {
    return (
        <StyledSimpleHeader>
            <div className='headerContent'>
                    <Link href={HOME} className='headerLogo'>
                        <TextLogo />
                    </Link>
                {/*<NavBar />*/}
            </div>
        </StyledSimpleHeader>
    )
}

Header.propTypes = {};

export default Header;
