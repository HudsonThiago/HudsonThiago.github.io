import React, { useState } from "react";
import ItemCard from "../../../Utils/ItemCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";
import Modal from "../../../Utils/Modal";
import Data from "../../../../Data/experiencias.json";
import { openModal } from "../../../Utils/Modal";
import ExperienciasContainer from "../../../Utils/Modal/containers/ExperienciasContainer";
import { formatText } from "../../../Utils/utils";

export default function Tecnologias() {
    const [experiencias, setExperiencias] = useState(Data);

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
                {experiencias.sort((a,b) => {return b.id - a.id}).map((i, index) => {
                    return (
                        <div key={index}>
                            <ItemCard
                                type={"image"}
                                imagem={require(`../../../../images/experiencias/${i.image}`)}
                                title={i.title}
                                action={openModal}
                                idModal={`modalExperiencia-${index}`}
                            />
                            <Modal
                                id={`modalExperiencia-${index}`}
                                image={require(`../../../../images/backgrounds/${i.modalImage.desktopImage}`)}
                                mobileImage={require(`../../../../images/backgrounds/${i.modalImage.mobileImage}`)}
                                title={i.title}
                                color={i.color}
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
