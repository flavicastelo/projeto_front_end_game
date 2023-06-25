import styled from "styled-components";

export const ContainerButton = styled.div `
display: flex;
`;
export const MenuGenresButton = styled.button`
    display: flex;
    align-items: center; 
    justify-content: center; 
    background-color: #13bcd3;
    border-radius: 5px;
    border: none;
    width: 120px;
    height: 40px;
    cursor: pointer;
    color: white;
    font-size: 12px;
    white-space: wrap;
    font-family: 'Space Grotesk', sans-serif;
    gap: 0.5rem;
    margin: 4rem 0 2rem ;
    @media (max-width: 480px) {
        margin-top: 1rem;
        margin-left:  2rem;
    }
    @media (max-width: 375px) {
        margin-left:  1rem;
    }
`;
