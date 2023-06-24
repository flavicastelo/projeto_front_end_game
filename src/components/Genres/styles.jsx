import styled from "styled-components";


export const Genre = styled.button`
    background-color: ${(props) => (props.isSelected ? "#13bcd3" : "#525050")};
    border-radius: 5px;
    border: none;
    width: calc((100% - 7rem)/8);
    height: 40px;
    cursor: pointer;
    color: white;
    font-size: 12px;
    white-space: wrap;
    transition: box-shadow 0.3s ease-in-out;
    font-family: 'Space Grotesk', sans-serif;
    &:hover {
        background-image: radial-gradient(circle, #13bcd3, #14c2d9, #14c7df, #15cde6, #15d3ec);
    }
    @media (max-width: 480px) {
        width: calc((100% - 7rem)/4);
        font-size: 9px;
    }
`;

