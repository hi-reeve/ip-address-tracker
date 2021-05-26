import styled from "styled-components";

const PlaceholderLoading = styled.div`
    @keyframes skeleton {
        from {
            transform: translateX(-100%);
        }
        to {
            transform: translateX(100%);
        }
    }
    overflow: hidden;
    width: 100%;
    height: calc(100vh - 250px);
    background-color: #d3d3d3;
    position: relative;
    @media screen and (max-width: 525px) {
        height: calc(100vh - 300px);
    }
    &:after {
        animation: skeleton 1s linear infinite;
        content: "";
        height: 100%;
        z-index: 1;
        display: block;
        background: linear-gradient(
            to right,
            #d3d3d3,
            rgba(255, 255, 255, 0.4),
            #d3d3d3
        );
        transform: translateX(-100%);
    }
`;

export default PlaceholderLoading;
