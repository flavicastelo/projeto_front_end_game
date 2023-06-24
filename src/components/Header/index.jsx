import React from "react";
import { useNavigate } from "react-router-dom";
import {BiSolidHome} from 'react-icons/bi'
import { ContainerHeader,  Logo,  TitleHome } from "./styles";

export default function Header({ query, onChange }) {
    return (
            <ContainerHeader>
                 <Logo target="_blank" href="https://github.com/flavicastelo">FC</Logo>
                <TitleHome>Projeto de Estágio Frontend React </TitleHome>
            </ContainerHeader>
           

    )
}