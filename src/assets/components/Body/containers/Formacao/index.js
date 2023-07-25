import React, { useEffect, useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserGraduate } from "@fortawesome/free-solid-svg-icons";
import ItemCard from "../../../Utils/ItemCard";
import Data from "../../../../Data/formacao.json";

export default function Formacao() {
    const [formacao, setFormacao] = useState(Data);

    return (
        <div className="box">
            <header className="headerBody">
                <div className="headerBox">
                    <div className="CircleHeader">
                        <FontAwesomeIcon
                            className="navIcon"
                            icon={faUserGraduate}
                        />
                    </div>
                    <h2>Formação</h2>
                </div>
            </header>
            <main className="mainBody">
                {formacao.map((i, index) => {
                    return (
                        <ItemCard
                            key={index}
                            type="percentual"
                            porcentagem={i.percent}
                            title={i.title}
                            text={i.text}
                        />
                    );
                })}
            </main>
        </div>
    );
}
