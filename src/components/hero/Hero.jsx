import { useState } from "react";
import CodeWindow from "../codeWindow/CodeWindow";
import "./hero.css"
import profile from "../../assets/profile.jpeg"
import { FaGithub, FaWhatsapp, FaLinkedin, FaArrowDown } from "react-icons/fa"
import ParticlesBackground from "./ParticlesBackground";

export default function Hero() {
    const [output, setOutput] = useState(false);

    const handleRun = () => {
        setOutput(true)
    };

    return (
        <section id="hero">
            <ParticlesBackground />
            <div className="hero-content">
                <h1>Hi, i'm Gabriel</h1>
                <h2>FullStack <br /> <span>Developer</span></h2>
                <p>Sou um desenvolvedor fullstack focado em criar soluções digitais de alta performance e arquitetura sólida. Especializado em React, TypeScript e Node.js, transformo problemas complexos em aplicações web modernas, intuitivas e prontas para escalar.</p>
                <div className="hero-links">
                    <button>Ver Projetos <FaArrowDown /></button>
                    <ul className="alt-links">
                        <li>
                            <a href="#github"><FaGithub size={32} /></a>
                        </li>
                        <li>
                            <a href="#github"><FaLinkedin size={32} /></a>
                        </li>
                        <li>
                            <a href="#github"><FaWhatsapp size={32} /></a>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="hero-code">
                <div className={output ? "profile-container active" : "profile-container"}>
                    {output ?
                        <div className="profile-wrapper">
                            <img src={profile} className="profile" />
                        </div>
                        : ""}
                </div>
                <CodeWindow isActive={output} onRun={handleRun}>
                    <span className="keyword">const</span> <span className="variable">dev</span> = {"{"}
                    <br />
                    &nbsp;&nbsp;<span className="property">name</span>: <span className="string">"Gabriel Röpke"</span>,
                    <br />
                    &nbsp;&nbsp;<span className="property">age</span>: <span className="number">21</span>,
                    <br />
                    &nbsp;&nbsp;<span className="property">role</span>: <span className="string">"FullStack Developer"</span>,
                    <br />
                    &nbsp;&nbsp;<span className="property">location</span>: <span className="string">"Brasil"</span>,
                    <br />
                    &nbsp;&nbsp;<span className="property">skills</span>: [<span className="string">"React"</span>, <span className="string">"Node"</span>, <span className="string">"TS"</span>],
                    <br />
                    &nbsp;&nbsp;<span className="property">hireable</span>: <span className="keyword">true</span>,
                    <br />
                    {"}"}
                </CodeWindow>
            </div>
            <div className="reflex">
            </div>
        </section>
    )
}