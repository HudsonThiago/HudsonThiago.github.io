import React, { useState } from "react";
import "./style/style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

export const openModal = (id) => {
    const modal = document.getElementById(id);
    modal.classList.add("openModal");
};

export const closeModal = (id) => {
    const modal = document.getElementById(id);
    modal.classList.remove("openModal");
};

export default function Modal({
    id,
    title,
    children,
    color="#8B5240",
    image = {},
    mobileImage = {},
}) {
    const [mouseOut, setMouseOut] = useState(false);
    const [touch, setTouch] = useState(true);

    const closeOut = () => {
        if (mouseOut === true && touch === false) {
            closeModal(id);
        }
    };

    return (
        <div
            className="darkScreen"
            id={id}
            onTouchStart={() => setTouch(true)}
            onMouseMove={() => setTouch(false)}
            onClick={closeOut}
        >
            <div
                className="modalContent"
                onMouseOut={() => setMouseOut(true)}
                onMouseOver={() => setMouseOut(false)}
            >
                <div className="modalSec45">
                    <div className="frame1" style={{backgroundColor: color+"99"}}></div>
                    <div className="frame2" style={{backgroundColor: color+"E6"}}></div>
                    <img className="desktop" src={image} draggable="false" />
                    <img
                        className="mobile"
                        src={mobileImage}
                        draggable="false"
                    />
                </div>
                <div className="modalSec55">
                    <header className="modalHeader">
                        <h1 className="modalTitle">{title}</h1>
                        <button
                            className="closeButton"
                            onClick={() => {
                                closeModal(id);
                            }}
                        >
                            <FontAwesomeIcon
                                className="navIcon"
                                icon={faXmark}
                            />
                        </button>
                    </header>
                    <main className="modalMain">{children}</main>
                </div>
            </div>
        </div>
    );
}
