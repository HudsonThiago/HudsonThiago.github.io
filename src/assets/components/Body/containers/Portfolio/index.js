import React, { useState } from "react";
import ItemCard from "../../../Utils/ItemCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAward } from "@fortawesome/free-solid-svg-icons";
import Modal from "../../../Utils/Modal";
import Data from "../../../../Data/portfolio.json";
import PortfolioContainer from "../../../Utils/Modal/containers/PortfolioContainer";
import { openModal } from "../../../Utils/Modal";

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
                {Data.map((portfolio, index) => {
                    return (
                        <div key={index}>
                            <ItemCard
                                type={"image"}
                                imagem={require(`../../../../images/portfolio/${portfolio.image}`)}
                                title={portfolio.title}
                                action={openModal}
                                idModal={"modalPortfolio-"+index}
                            />
                            <Modal
                                id={"modalPortfolio-"+index}
                                image={require(`../../../../images/backgrounds/${portfolio.modalImage.desktopImage}`)}
                                mobileImage={require(`../../../../images/backgrounds/${portfolio.modalImage.mobileImage}`)}
                                title={portfolio.title}
                                color={portfolio.color}
                            >
                                <PortfolioContainer
                                    portfolio={portfolio}
                                />
                            </Modal>
                        </div>
                    );
                })}
            </main>
        </div>
    );
}
