import React from "react";
import { MenuGenresButton } from "./styles";
import { BsChevronDown } from 'react-icons/bs'
export default function MenuGenres({toggleIsOpen}) {

    return (
        <>
            <MenuGenresButton onClick={toggleIsOpen}>
                Gêneros <BsChevronDown />
            </MenuGenresButton>
            
        </>
    )
}