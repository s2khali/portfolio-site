import StyledTextLogo from "./styles/StyledTextLogo";

const TextLogo = (props) => {
    return (
        <StyledTextLogo  href="/">
            <span className='logoLong'>ben schnell</span>
            <span className='logoShort'>bs</span>
        </StyledTextLogo>
    )
}

TextLogo.propTypes = {};

export default TextLogo;
