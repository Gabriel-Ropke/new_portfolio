import "./projects.css"
import profile from "../../assets/profile.jpeg"
import taxControl from "../../assets/taxcontrol.png"
import getIcon from "../../utils/stack"
import { useState } from "react";
import { flushSync } from "react-dom";

const projects_objects = [
    {
        name: "Tax Control",
        links: {
            github: "https://github.com/Gabriel-Ropke/TaxControl",
            vercel: "https://tax-control.vercel.app/"
        },
        image: taxControl,
        stack: ["react", "css", "js", "nodejs", "supabase"],
        description: "O TaxControl é um sistema desenvolvido para otimizar a gestão tributária corporativa. Ele auxilia contadores e profissionais da área financeira na apuração e no controle de impostos, tornando a rotina de trabalho mais ágil e reduzindo significativamente as chances de erros humanos."
    },
    {
        name: "Tax Control",
        links: {
            github: "https://github.com/Gabriel-Ropke/TaxControl",
            vercel: "https://tax-control.vercel.app/"
        },
        image: taxControl,
        stack: ["react", "css", "js", "nodejs", "supabase"],
        description: "O TaxControl é um sistema desenvolvido para otimizar a gestão tributária corporativa. Ele auxilia contadores e profissionais da área financeira na apuração e no controle de impostos, tornando a rotina de trabalho mais ágil e reduzindo significativamente as chances de erros humanos."
    },
];

export default function Projects() {

    const [activeProjectIdx, setActiveProjectIdx] = useState(null)

    const expandProject = (idx) => {
        if (!document.startViewTransition) {
            setActiveProjectIdx(prev => prev === idx ? null : idx);
            return;
        }

        document.startViewTransition(() => {
            flushSync(() => {
                setActiveProjectIdx(prev => prev === idx ? null : idx);
            });
        });
    }
    return (
        <section id="projects">
            <h2>Projetos</h2>
            <ul>
                {projects_objects.map((project, idx) => (

                    <li key={idx}
                        className={activeProjectIdx === idx ? "project active" : "project"}
                        style={{ viewTransitionName: `project-card-${idx}` }}>
                        <div className="img-container">
                            <img src={project.image} alt="" />
                            <div className="project-description-container" onClick={() => expandProject(idx)}>
                                <span>{activeProjectIdx === idx ? "Clique para reduzir" : "Clique para Expandir"}</span>
                                <p className="description">{project.description}</p>
                            </div>
                        </div>
                        <div className="project-content">

                            <span className="project-name">{project.name}</span>
                            <p className="description">{project.description}</p>
                            <ul className="project-stack-list">
                                {project.stack.map((stack, stackIdx) => {
                                    const iconData = getIcon(stack);
                                    return (
                                        <li key={stackIdx} style={{ "--stack-color": iconData?.color }}>
                                            {iconData?.icon}
                                            <span>{stack}</span>
                                        </li>
                                    );
                                })}
                            </ul>
                            <ul className="project-link-list">
                                {Object.entries(project.links).map(([platform, link], linkIdx) => {
                                    const platformIcon = getIcon(platform);
                                    return (
                                        <li key={linkIdx}>
                                            <button className={platform}>
                                                <a href={link} target="_blank" rel="noreferrer">
                                                    {platformIcon?.icon}
                                                    {platform === "github" ? `ver no ${platform}` : `ver online`}
                                                </a>
                                            </button>
                                        </li>
                                    );
                                })}
                            </ul>
                        </div>
                    </li>
                ))}
            </ul>
        </section>
    )
}