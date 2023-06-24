
import styled, { keyframes } from "styled-components";

export const ContainerHeader = styled.div`
    display: flex;
    flex-direction: row;
    gap: 2rem;
    @media (max-width: 820px) {
        gap: 1rem;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
`;

export const Line = styled.p`
    color: #808080;
    font-size: 28px;
    font-family: 'Space Grotesk', sans-serif;
`;

export const TitleHome = styled.button`
  font-size: 28px;
  background-color: transparent;
  border: none;
  outline: 0;
  cursor: pointer;
  color: #13bcd3;
  font-family: 'Space Grotesk', sans-serif;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  @media (max-width: 750px) {
    font-size: 16px;
    margin-bottom: 2rem;
    }
`;

export const Logo = styled.a`
    text-decoration: none;
    font-family: 'Space Grotesk', sans-serif;
    font-size:  40px;
    padding: 0.8rem 1rem 0.8rem 1rem;  
    color: black;
    background: #13bcd3;
    border-radius: 5px 50px 50px;
    width: 80px;
    height: 80px;
    @media (max-width: 750px) {
        width: 40px;
        height: 40px;
        padding-left: 0.5rem;
        padding-top: 0.5rem;  
        font-size: 20px;
    }
`;