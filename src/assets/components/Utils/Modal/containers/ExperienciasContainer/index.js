import React, { useState } from "react";
import "../style/style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from "@fortawesome/free-regular-svg-icons";
import { faUserTie } from "@fortawesome/free-solid-svg-icons";

export default function ExperienciasContainer({ roles = [], time, text }) {
    return (
        <div className="experienciaContainer">
            <div className="infoBox">
                <div className="infoItemContainer">
                    <FontAwesomeIcon className="modalIcon" icon={faClock} />
                    <p>{time}</p>
                </div>
                <div className="infoItemContainer">
                    <FontAwesomeIcon className="modalIcon" icon={faUserTie} />
                    {roles.length > 1 ? (
                        <ul>
                            {roles.map((r) => {
                                return <li>{r}</li>;
                            })}
                        </ul>
                    ) : (
                        <p>{roles[0]}</p>
                    )}
                </div>
            </div>
            <div
                className="textBox"
                dangerouslySetInnerHTML={{ __html: text }}
            ></div>
        </div>
    );
}
