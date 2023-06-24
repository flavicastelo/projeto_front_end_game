import styled from "styled-components";

export const ContainerBorder = styled.div`
    display: flex;
    width: 350px;
    height: 450px;
    background-color: transparent;
    border-radius: 10px;
    border-left: 4px solid;
    border-right: 4px solid;
    border-image: radial-gradient(circle, #6bfdff, transparent) 1;
    border-image-slice: 1;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    transition: box-shadow 0.3s ease-in-out;
    &:hover {
    box-shadow: 0 0 15px 4px #17FDFA;
    }
    @media (max-width: 950px) {
    width: 350px;
   
    }
    @media (max-width: 480px) {
      height: 400px;
     
    }
    @media (max-width: 720px) {
     justify-content: center;
     
    }
    @media (max-width: 893px) {
    width: 280px;
    }
    @media (min-width: 1753px) {
    width: 400px;
    height: 480px;
    }
    
`;

export const ContainerCard = styled.div`
    display: flex;
    width: 100%; 
    height: 100%;
    background-image: linear-gradient(to top, #050505, #131313, #1d1d1d, #262626, #303030);
    border-radius: 10px;
    flex-direction: column;
    justify-content: space-between;
    padding: 1rem;
    align-items: center;
    
`;

export const Thumbnail = styled.img`
    width: 90%;
    height: 40%;
    border-radius: 15px;
    align-self: center;
    margin: 15px 0;
`;

export const ContainerInfo = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 0 1rem;
    width: 320px;
`;

export const TitleVideo = styled.h3`
    text-align: justify;
    line-height: 16px;
    color: #13bcd3;
    font-family: 'Space Grotesk', sans-serif;
    margin-bottom: 5px;
`;

export const Description = styled.p`
    font-style: normal;
    font-weight: bold;
    font-size: 12px;
    line-height: 16px;
    color: #94969c;
    text-align: justify;
    font-family: 'Inter', sans-serif;
`;
export const Text1 = styled.p`
    font-style: normal;
    font-weight: bold;
    font-size: 10px;
    line-height: 16px;
    color: #94969c;
    font-family: 'Inter', sans-serif;
    align-self: self-start;
`;
export const Text2 = styled.p`
    font-style: normal;
    font-weight: bold;
    font-size: 10px;
    line-height: 16px;
    color: #13bcd3;
    font-family: 'Inter', sans-serif;
    align-self: self-start;
`;
export const Div = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    gap: 1rem;;
    align-self: self-start;
`;
export const Div2 = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    gap: 1rem;;
`;

export const LinkStyle =styled.a`
    font-style: normal;
    font-weight: bold;
    font-size: 12px;
    line-height: 16px;
    color: #17d6f0;
    text-align: justify;
    font-family: 'Inter', sans-serif;
    text-decoration: none;
`;