import styled from "styled-components";

export default styled.div`
  
    & a {
      margin: 0 12px;
      text-transform: uppercase;
      font-size: 0.87rem;
      letter-spacing: 0.6rem;
      font-weight: bold;
      position: relative;
      
      &::after {
        content: '';
        position: absolute;
        height: 2px;
        width: 0;
        transition: width 0.3s ease-out, opacity 0.2s;
        background: #f3f3f3;
        bottom: -4px;
        left: 50%;
        transform: translateX(-53%);
        overflow: visible;
      }
      
      &:hover::after {
        width: 80%;
      }
    }
  
`;
