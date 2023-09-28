import React, {FC, useEffect, useRef, useState} from 'react';
import {ModelCard} from "../../model/card-model";
import { Card } from "primereact/card";
import {useParams} from "react-router-dom";
import axios from "axios";

const CardDetails = () => {
    const [card, setCard] = useState<ModelCard>();
    const { id } = useParams<{id: string}>();

    const [loading, setLoading] = useState(false);

    const buttonRef = useRef(null);

    const load = () => {
        setLoading(true);

        setTimeout(() => {
            setLoading(false);
        }, 2000);
    }

    function loadPage() {
        axios
            .get(`https://api.magicthegathering.io/v1/card/${id}`)
            .then((response) => setCard(response.data));
    }

    useEffect(() => {
        loadPage()
    },[]);

    if (!card) return null;

    return (
        <div>
            <Card title={card.name}>

            </Card>
        </div>
    )

}

export default CardDetails;
