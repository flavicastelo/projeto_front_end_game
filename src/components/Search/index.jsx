import React from "react";
import { DivSearch, Icone, Input } from "./styles";

export default function Search({query, onChange}) {
    return (
        <DivSearch>
            <Input placeholder={'Buscar'} type="text" value={query} onChange={onChange} />
            <Icone src="https://cdn.discordapp.com/attachments/1118930472026779680/1121574476933513236/icons8-pesquisar-50_1.png" />
        </DivSearch>
    );
}
