import React from "react";
import WindowDimensions from "../../Utils/WindowDimensions";
import "./style/style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

export default function ItemCard({
    type,
    imagem,
    porcentagem,
    title,
    text,
    action,
    idModal,
}) {
    const { height, width } = WindowDimensions();

    const dimension = (axis) => {
        let cx = 30;
        let cy = 30;
        let r = 30;
        let dasharray = 185;
        if (width > 1200) {
            cx = 30;
            cy = 30;
            dasharray = 185;
        } else {
            cx = 20;
            cy = 20;
            r = 20;
            dasharray = 125;
        }

        if (axis === "x") {
            return cx;
        } else if (axis === "y") {
            return cy;
        } else if (axis === "dasharray") {
            return dasharray;
        } else {
            return r;
        }
    };

    const Box = () => {
        if (type === "percentual") {
            return (
                <>
                    <div className="circleItem">
                        <svg>
                            <circle
                                cx={dimension("x")}
                                cy={dimension("x")}
                                r={dimension("r")}
                            ></circle>
                            <circle
                                cx={dimension("x")}
                                cy={dimension("x")}
                                r={dimension("r")}
                                style={{
                                    strokeDashoffset: `calc(${dimension(
                                        "dasharray"
                                    )} - (${dimension(
                                        "dasharray"
                                    )} * ${porcentagem})/100)`,
                                }}
                            ></circle>
                        </svg>
                        <div className="number">
                            <h3>{porcentagem}%</h3>
                        </div>
                    </div>
                    <div className="itemBox">
                        <div className="textContent">
                            <div className="titleBox">
                                <h3 className="titulo">{title}</h3>
                                {action ? (
                                    <button
                                        onClick={() => {
                                            action(idModal);
                                        }}
                                    >
                                        <FontAwesomeIcon
                                            icon={faMagnifyingGlass}
                                        />
                                    </button>
                                ) : null}
                            </div>
                            <p>{text}</p>
                        </div>
                    </div>
                </>
            );
        } else if (type === "image") {
            return (
                <>
                    <div className="circleItem">
                        <img
                            className="ImageIcon"
                            src={imagem}
                            alt="ícone"
                            draggable="false"
                        />
                    </div>
                    <div className="itemBox">
                        <div className="textContent">
                            <div className="titleBox">
                                <h3 className="titulo">{title}</h3>
                                {action ? (
                                    <button
                                        onClick={() => {
                                            action(idModal);
                                        }}
                                    >
                                        <FontAwesomeIcon
                                            icon={faMagnifyingGlass}
                                        />
                                    </button>
                                ) : null}
                            </div>
                            <p>{text}</p>
                        </div>
                    </div>
                </>
            );
        }

        return;
    };

    return <div className="itemContainer">{Box()}</div>;
}
