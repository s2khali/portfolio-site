import styled from 'styled-components';

export default styled.div`
    width: 100%;

    .headerContent {
        max-width: 1680px;
        margin: 0 auto;
        font-size: 1.5rem;
        display: flex;
        justify-content: space-between;
    }

    &::after {
        content: '';
        position: absolute;
        bottom: -28px;
        border-bottom: 28px solid transparent;
        border-right: 100vw solid #191a1d;
        left: 0;
        right: 0;
    }
`;
