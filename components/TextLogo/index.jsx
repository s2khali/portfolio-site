import StyledTextLogo from "./styles/StyledTextLogo";

const TextLogo = (props) => {
    return (
        <StyledTextLogo>
            <span className='logoLong'>benschnell</span>
            <span className='logoShort'>bs</span>
        </StyledTextLogo>
    )
}

TextLogo.propTypes = {};

export default TextLogo;
