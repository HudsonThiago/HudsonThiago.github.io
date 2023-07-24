import React from "react";
import "./style/style.css";
import ProfileImg from "../../images/profile.jpg";
import Nav from "../Nav/Nav";

export default function Header({ activeButton }) {
    return (
        <header className="header">
            <section id="sec-1">
                <main>
                    <header>
                        <img src={ProfileImg} alt="profile" draggable="false" />
                        <h1>Hudson Thiago</h1>
                        <h4>Bacharelando em Tecnologia da informação</h4>
                    </header>
                    <footer>
                        <h4>hudsonthiagocorreia@gmail.com</h4>
                    </footer>
                </main>
            </section>
            <Nav activeButton={activeButton} />
        </header>
    );
}
