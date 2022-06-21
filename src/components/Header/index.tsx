import * as React from 'react';

import StyledSimpleHeader from './styles';
import TextLogo from '../TextLogo';

const Header = () => {
    return (
        <StyledSimpleHeader>
            <div className="headerContent">
                <TextLogo />
            </div>
        </StyledSimpleHeader>
    );
};

export default Header;
