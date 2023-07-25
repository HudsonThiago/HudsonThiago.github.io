import React, { useState } from "react";
import ItemCard from "../../../Utils/ItemCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAward } from "@fortawesome/free-solid-svg-icons";
import Modal from "../../../Utils/Modal";
import Data from "../../../../Data/portfolio.json";
import PortfolioContainer from "../../../Utils/Modal/containers/PortfolioContainer";
import { openModal } from "../../../Utils/Modal";
import { formatText } from "../../../Utils/utils";

//images
import modal1 from "../../../../images/backgrounds/trabalhoModal1.jpg";

export default function Portfolio() {
    return (
        <div className="box">
            <header className="headerBody">
                <div className="headerBox">
                    <div className="CircleHeader">
                        <FontAwesomeIcon className="navIcon" icon={faAward} />
                    </div>
                    <h2>Portfolio</h2>
                </div>
            </header>
            <main className="mainBody">
                {Data.map((portfolio) => {
                    return (
                        <>
                            <ItemCard
                                type={"image"}
                                imagem={require(`../../../../images/trabalho/${portfolio.image}`)}
                                title={portfolio.title}
                                action={openModal}
                                idModal={"modal-1"}
                            />
                            <Modal
                                id={"modal-1"}
                                imagem={modal1}
                                title={"EJECT"}
                            >
                                <PortfolioContainer
                                    text={formatText(portfolio.text)}
                                />
                            </Modal>
                        </>
                    );
                })}
            </main>
        </div>
    );
}
