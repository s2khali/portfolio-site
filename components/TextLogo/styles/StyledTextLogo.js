import styled from "styled-components";

export default styled.a`
  text-transform: uppercase;
  font-weight: bold;
  font-size: 1.4rem;
  position: relative;
  color: #f3f3f3;
  
  
  .logoLong {
    letter-spacing: 0.2rem;
    z-index: 1;
    
    transition: color 0.2s;
    
    &.inactive {
      color: #191a1d;
    }
  }
  
  .logoShort {
    position: absolute;;
    left: 0;
    top: 0;
    z-index: 2;
    letter-spacing: 2.9rem;
    
    transition: letter-spacing 0.5s;
    transition-delay: 0.2s;
    
    &.active {
      letter-spacing: 0.2rem;
    }
  }
  
`;
