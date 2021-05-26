import styled from "styled-components";
import bgPattern from "@/assets/images/pattern-bg.png";

export const HeroContainer = styled.section`
    width: 100%;
    height: 250px;
    z-index: 9999;
    position: relative;
    background-image: url(${bgPattern});
    background-size: cover;
    background-repeat: no-repeat;
    padding: 2rem;
    display: flex;
    flex-direction: column;
    @media screen and (max-width: 525px) {
        height: 300px;
    } ;
`;

export const HeroTitle = styled.h1`
    font-weight: 500;
    color: white;
    text-align: center;
`;

export const HeroInputWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    margin: 2rem auto;
    max-width: 30%;
    width: 100%;
    @media screen and (max-width: 1024px) {
        max-width: 80%;
    }
    @media screen and (max-width: 525px) {
        max-width: 100%;
    }
`;

export const HeroInput = styled.input`
    padding: 1rem 2rem;
    width: 100%;
    border-radius: 10px;
    &:focus {
        outline: none;
    }
    @media screen and (max-width: 525px) {
        padding: 1rem;
    }
`;

export const HeroButton = styled.button`
    background: transparent;
    border: none;
    background-color: black;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 50px;
    height: 100%;
    position: absolute;
    right: 0;
    top: 0;
    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;
    transition: all 0.3s ease-in-out;
    cursor: pointer;
    &:hover {
        background-color: var(--very-dark-gray);
    }
`;
export const HeroButtonIcon = styled.img`
    max-width: 20px;
`;

export const HeroInfoWrapper = styled.div`
    max-width: 80%;
    width: 100%;
    display: flex;
    justify-content: space-around;
    margin: 0 auto;
    background: white;
    box-shadow: 0 0px 3px 0px rgba(0, 0, 0, 0.25);
    padding: 1rem 2rem;
    border-radius: 10px;
    @media screen and (max-width: 1024px) {
        flex-direction: column;
        max-width: 100%;
    }
`;

export const HeroInfo = styled.div`
    display: flex;
    margin: 0.5rem 0;
    padding: 1rem;
    flex-direction: column;
    @media screen and (max-width: 1024px) {
        text-align: center;
        width: 100%;
        padding: 0;
    }
`;
export const HeroInfoLabel = styled.h6`
    color: var(--dark-gray);
    text-transform: uppercase;
    font-size: 0.6rem;
    letter-spacing: 2px;
`;
export const HeroInfoContent = styled.span`
    font-size: 1.3rem;
    margin-top: 0.25rem;
    font-weight: 600;
`;
