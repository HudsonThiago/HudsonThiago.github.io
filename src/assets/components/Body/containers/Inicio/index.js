import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouseChimney } from "@fortawesome/free-solid-svg-icons";
import { faFilePdf } from "@fortawesome/free-regular-svg-icons";
import { inicio } from "../../../../Data/inicio";
import pdf from "../../../../Data/pdf/curriculo.pdf";

export default function Inicio() {
    return (
        <div className="box">
            <header className="headerBody">
                <div className="headerBox">
                    <div className="CircleHeader">
                        <FontAwesomeIcon
                            className="navIcon"
                            icon={faHouseChimney}
                        />
                    </div>
                    <h2>Início</h2>
                </div>
            </header>
            <main className="mainBody">
                <div className="mainTextBox">
                    <p>{inicio.text}</p>
                    <div className="buttonContent">
                        <a href={pdf} download="currículo">
                            <button className="curriculoButton">
                                <FontAwesomeIcon
                                    className="buttonIcon"
                                    icon={faFilePdf}
                                />
                                Currículo
                            </button>
                        </a>
                    </div>
                </div>
            </main>
        </div>
    );
}
