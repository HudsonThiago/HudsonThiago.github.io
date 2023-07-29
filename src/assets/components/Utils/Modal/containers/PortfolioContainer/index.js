import React, { useState } from "react";
import "../style/style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { formatText } from "../../../utils";

export default function PortfolioContainer({ portfolio }) {
    return (
        <div className="portfolioContainer">
            <div
                className="textBox"
                dangerouslySetInnerHTML={{ __html: formatText(portfolio.text) }}
            ></div>
            <div className="buttonBox">
                {portfolio.link?(
                    <a href={portfolio.link} target="_blank">
                        <button>Ver projeto</button>
                    </a>
                ):(
                    <a>
                        <button>Ver projeto</button>
                    </a>
                )}
            </div>
        </div>
    );
}
