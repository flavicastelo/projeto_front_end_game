import React, { useState, useEffect } from "react";
import CardGames from "../CardGames/index";
import api from "../../utils/api";
import {
  Main,
  Body,
  TitleHome,
  ContainerCards,
  SectionHome,
  Loading,
  ContainerGenres,
  AllGamesTag,
  DivHeader,
} from "./styles";
import GenresTag from "../Genres/index";
import Header from "../Header";
import Search from "../Search";
import MenuGenres from "../MenuGenres";

export default function Home() {
  const [games, setGames] = useState([]);
  const [erro, setErro] = useState(null);
  const [loading, setLoading] = useState(true);
  const [contentErro, setContentErro] = useState(false);
  const [query, setQuery] = useState('');
  const [uniqueGenres, setUniqueGenres] = useState([]);
  const [queryGenre, setQueryGenre] = useState('');
  const [selectedGenre, setSelectedGenre] = useState('');
  const [errorTimer, setErrorTimer] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const getGames = async () => {
    try {
      const response = await api.get("/data");
      const data = response.data;
      setGames(data);
      setLoading(false);
    } catch (error) {
      setErro(error.response.status);
      setLoading(false);
    }
  }

  useEffect(() => {
    getGames();
  }, []);


  useEffect(() => {
    const timer = setTimeout(() => {
      if (loading) {
        setErrorTimer(true);
      }
    }, 5000);

    return () => {
      clearTimeout(timer);
    };
  }, [loading]);

  useEffect(() => {
    if (erro >= 500 && erro <= 509) {
      setContentErro(true);
    } else {
      setContentErro(false);
    }
  }, [erro]);

  const lowerQuery = query.toLowerCase();
  const lowerGenre = queryGenre.toLowerCase();

  const filteredGames = games.filter((game) =>
    game.title.toLowerCase().includes(lowerQuery) && game.genre.toLowerCase().includes(lowerGenre),
  );

  const onChange = (event) => {
    setQuery(event.target.value)
  };

  useEffect(() => {
    const genres = new Set(games.map((game) => game.genre));
    setUniqueGenres([...genres]);
    console.log([...genres]);
  }, [games]);

  const filterGenre = (uniqueGenre) => {
    setQueryGenre(uniqueGenre);
  }

  const selectGenre = (genre) => {
    setSelectedGenre(genre);
  };
  const showAll = () => {
    setQueryGenre('');
    setSelectedGenre('');

  }


    const toggleIsOpen = () => {
      setIsOpen(!isOpen);
      console.log(isOpen);
    }

  
  return (
    <Main>
      <DivHeader>
        <Header onChange={onChange} query={query} />
        <Search query={query} onChange={onChange} />
      </DivHeader>

      <Body>
        {errorTimer ? <SectionHome><TitleHome>O servidor demorou para responder, tente mais tarde</TitleHome></SectionHome> :
          <SectionHome>
            {loading ? '' : erro ? (
              ''
            ) : (
              <> <MenuGenres toggleIsOpen={toggleIsOpen}/>
              {isOpen ? <ContainerGenres>
                  {uniqueGenres.map((uniqueGenre) => (
                    <GenresTag
                      genre={uniqueGenre}
                      onClick={() => {
                        filterGenre(uniqueGenre);
                        selectGenre(uniqueGenre);
                      } }
                      key={uniqueGenre}
                      isSelected={selectedGenre === uniqueGenre} />
                  ))}
                  <AllGamesTag onClick={showAll}>Ver Todos</AllGamesTag>
                </ContainerGenres> : null}
              </>
            
            )}
            <ContainerCards>
              {loading ? (
                <Loading />
              ) : erro ? (
                <TitleHome>
                  {contentErro
                    ? "O servidor falhou em responder, tente recarregar a página"
                    : "O servidor não conseguirá responder por agora, tente voltar novamente mais tarde"}
                </TitleHome>
              ) : filteredGames.length > 0 ? (
                filteredGames.map((game) => <CardGames games={game} />)
              ) : (
                games.map((game) => <CardGames games={game} />)
              )}
            </ContainerCards>
          </SectionHome>}
      </Body>
    </Main>
  );
}
