import React from "react";
import {  ContainerCard,  Description, Thumbnail, TitleVideo, Div, Text1, LinkStyle, ContainerBorder, Text2, Div2,  } from "./styles.jsx";


export default function CardGames({ games }) {
  //title, thumbnail, short_description, game_url, genre, platform, publisher, developer, release_date, freetogame_profile_url}

  return (
    <>
      {games.length === 0 ? <h1>Carregando...</h1> : (
        <ContainerBorder>
          <ContainerCard>
            <Thumbnail src={games.thumbnail} />
            <TitleVideo>
              {games.title}
            </TitleVideo>
            <Description>
              {games.short_description}
            </Description>
            <Div>
            <Text2>
            Gênero: 
            </Text2>
            <Text1>
            {games.genre}
            </Text1>
            </Div>
            <Div>
              <Text2>
              Plataforma: 
              </Text2>
            <Text1>
             {games.platform}
            </Text1>
            </Div>
            <Div>
              <Text2>
                Editora: 
              </Text2>
              <Text1>
             {games.publisher}
            </Text1>
            </Div>
          
          
           <Div2>
           <LinkStyle target="_blank" href={games.freetogame_profile_url}>
             Perfil Freetogame
            </LinkStyle>
            <LinkStyle target="_blank" href={games.game_url}>
             Link do Jogo
            </LinkStyle>
           </Div2>
           
          </ContainerCard>
        </ContainerBorder>
      )}

    </>


  );
}