import React, { useState } from "react";
import ItemCard from "../../../Utils/ItemCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";
import Modal from "../../../Utils/Modal";
import Data from "../../../../Data/empresas.json";
import { openModal } from "../../../Utils/Modal";
import ExperienciasContainer from "../../../Utils/Modal/containers/ExperienciasContainer";
import { formatText } from "../../../Utils/utils";

export default function Tecnologias() {
    const [empresas, setEmpresas] = useState(Data);

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
                            >
                                <ExperienciasContainer
                                    roles={i.role}
                                    time={i.time}
                                    text={formatText(i.text)}
                                />
                            </Modal>
                        </div>
                    );
                })}
            </main>
        </div>
    );
}
