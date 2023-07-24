import React, { useState } from "react";
import ItemCard from "../../../Geral/ItemCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";
import Modal from "../../../Geral/Modal";
import Data from "../../../../Data/empresas.json";

export default function Tecnologias() {
    const [empresas, setEmpresas] = useState(Data);

    const formatText = (text = "") => {
        text = text.split("\n");
        let fText = "";
        text.map((i) => {
            return (fText += "<p>" + i + "</p>");
        });
        return fText;
    };

    const openModal = (id) => {
        const el = document.getElementById(id);
        el.classList.add("openModal");
    };

    const closeModal = (id) => {
        const el = document.getElementById(id);
        el.classList.remove("openModal");
    };

    return (
        <div className="box">
            <header className="headerBody">
                <div className="headerBox">
                    <div className="CircleHeader">
                        <FontAwesomeIcon
                            className="navIcon"
                            icon={faBriefcase}
                        />
                    </div>
                    <h2>Experiências</h2>
                </div>
            </header>
            <main className="mainBody">
                {empresas.map((i, index) => {
                    return (
                        <div key={index}>
                            <ItemCard
                                type={"image"}
                                imagem={require(`../../../../images/trabalho/${i.image}`)}
                                title={i.title}
                                action={openModal}
                                idModal={`modalEmpresa-${index}`}
                            />
                            <Modal
                                id={`modalEmpresa-${index}`}
                                imagem={require(`../../../../images/backgrounds/${i.modalImage}`)}
                                title={i.title}
                                text={formatText(i.text)}
                                time={i.time}
                                role={i.role}
                                closeModal={closeModal}
                            />
                        </div>
                    );
                })}
            </main>
        </div>
    );
}