import React, { useState } from "react";
import PlayHand from "../components/PlayHand";
import InHand from "../components/InHand";

export default function Home () {

    const [chips, setChips] = useState(0);
    const [mult, setMult] = useState(0);

    return (
        <div className='App'>
            <h1>Balatro App</h1>
            <h3>{chips} x {mult}</h3>
            <h3>Total score = {chips*mult}</h3>
            <PlayHand/>
            <InHand/>
        </div>
    ) 
}