import React, { useState } from "react";

export default function PlayCard () {

    const [rank, setRank] = useState(0);
    const [suit, setSuit] = useState("");
    const [seal, setSeal] = useState(false);
    const [modifier, setModifier] = useState("");
    const [edition, setEdition] = useState("");

   const handleRank = (e) => {
        const { name, value } = e.target;
        setRank(value)
      };

    return (
        <div>
            <h1>This is a card</h1>
            <label>Change rank</label>
            <input
                type="text"
                name="title"
                value={rank}
                onChange={handleRank}
                required
            />
        </div>
    )
}