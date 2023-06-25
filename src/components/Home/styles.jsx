
import styled, { keyframes } from "styled-components";



export const Main = styled.main`
  background-image: radial-gradient(circle, #050505, #131313);
  padding: 0 8rem ;
  @media (max-width: 1083px) {
    padding: 0 4rem ;
    }
    @media (max-width: 480px) {
      padding: 0 2rem ;
    }
`;
export const Body = styled.body`
  width: 100%;
  min-height: 100vh;
  
`;
export const SectionHome = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-self: center;
 
`;

export const Div = styled.div`
    background-image: linear-gradient(to top, #050505, #131313, #1d1d1d, #262626, #303030);
    display: flex;
    width: 3.8rem;
    min-height: 100vh;
    flex-direction: column;
    align-items: center;
`;
export const TitleHome = styled.button`
  font-size: 32px;
  background-color: transparent;
  border: none;
  outline: 0;
  cursor: pointer;
  margin-bottom: 4rem;
  color: #13bcd3;
  align-self: center;
`;

export const ContainerCards = styled.div`
  display: flex;
  gap: 1rem;
  margin: 0 auto;
  flex-wrap: wrap;
  justify-content: space-between;

   
    @media (max-width: 701px) {
    gap: 1rem;
    justify-content: center;
    }
   
`;

const loading = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

export const Loading = styled.div`
  width: 50px;
  height: 50px;
  border: 4px solid #808080;
  border-top-color: #13bcd3;
  border-radius: 50%;
  animation: ${loading} 1s infinite linear;
`;
export const ContainerGenres = styled.div`
    display: flex;
    flex-wrap: wrap;
    height: auto;
    gap: 1rem;
    margin: 1rem 0 4rem;
    justify-content: space-between;
`;

export const AllGamesTag = styled.button`
   background-color: ${(props) => (props.isSelected ? "#13bcd3" : "#525050")};
    border-radius: 5px;
    border: none;
    width: calc((100% - 7rem)/8);
    height: 40px;
    cursor: pointer;
    color:#13bcd3;
    font-size: 12px;
    white-space: wrap;
    transition: box-shadow 0.3s ease-in-out;
    font-family: 'Space Grotesk', sans-serif;
    &:hover {
        background-image: radial-gradient(circle, #13bcd3, #14c2d9, #14c7df, #15cde6, #15d3ec);
        color: white;
    }
    @media (max-width: 480px) {
        width: calc((100% - 7rem)/4);
        font-size: 9px;
    }
`;
export const DivHeader = styled.header`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    height: 5rem;
    padding-top: 2rem;
    margin-bottom: 2rem;
    align-items: center;
    @media (max-width: 820px) {
     flex-direction: column;
     height: 12rem;
    }
`;
