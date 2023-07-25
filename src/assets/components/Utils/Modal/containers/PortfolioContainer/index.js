import React, { useState } from "react";
import "../style/style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

export default function PortfolioContainer({ text }) {
    return (
        <div className="portfolioContainer">
            <div
                className="textBox"
                dangerouslySetInnerHTML={{ __html: text }}
            ></div>
            <div className="buttonBox">
                <a>
                    <button>Ver projeto</button>
                </a>
            </div>
        </div>
    );
}
