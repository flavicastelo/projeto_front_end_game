import React from "react";
import { Genre } from "./styles";

export default function GenresTag({genre, onClick, selected, isSelected}) {
    return (
        <Genre onClick={() => {onClick(genre), selected}} isSelected={isSelected}>{genre}</Genre>
    );
}
