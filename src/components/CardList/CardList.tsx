import React, {useEffect, useState} from 'react';
import axios from "axios";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";

const CardList = () => {
    const [cards, setCards] = useState([]);
    useEffect(() => {

        const api = axios.create({
            baseURL: "https://api.magicthegathering.io/v1/",
        });

        api.get("cards")
            .then((response) => setCards(response.data.cards))
            .catch((error) => console.error("Erro ao carregar os cards:", error));
    }, []);

    return (
        <div>
            <h2>Lista de Cards</h2>
            <DataTable value={cards}>
                <Column field="name" header="Name"></Column>
                <Column
                    field="url"
                    header="Details"
                    body={(rowData) => (
                        <a href={`/card/${parseInt(rowData.url.split("/")[6])}`}
                           target="_self" rel="noreferrer">
                            Details
                        </a>
                    )}
                ></Column>
            </DataTable>
        </div>
    );

};

export default CardList;
