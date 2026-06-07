import "./stack.css"
import getIcon from "../../utils/stack"
import { useState } from "react";

const stackItems = [
    { key: "html", label: "HTML" },
    { key: "css", label: "CSS" },
    { key: "js", label: "JS" },
    { key: "react", label: "React" },
    { key: "nodejs", label: "NodeJS" },
    { key: "postgresql", label: "PostgreSql" },
    { key: "supabase", label: "Supabase" },
    { key: "docker", label: "Docker" }
];

export default function Stack() {

    const [activeStack, setActiveStack] = useState(null)

    const handleClick = (idx) => {
        setActiveStack(activeStack === idx ? null : idx)
    }

    return (
        <section id="stack">
            <h2><span>Minha Stack</span></h2>

            <div className="background"></div>
            <div className="stack-wrapper">
                <ul className={activeStack != null ? "stack-list active" : "stack-list"}>
                    {stackItems.map(({ key, label }, idx) => {
                        const iconData = getIcon(key);
                        let classPosition = '';

                        if (activeStack !== null) {
                            if (idx === activeStack) {
                                classPosition = 'active';
                            } else if (idx < activeStack) {
                                classPosition = 'swap-left';
                            } else {
                                classPosition = 'swap-right';
                            }
                        }

                        return (
                            <li
                                key={key}
                                className={classPosition}
                                style={{ '--stack-color': iconData?.color }}
                                onClick={() => handleClick(idx)}
                            >
                                {iconData?.icon}
                                <span>{label}</span>
                            </li>
                        );
                    })}
                </ul>
            </div>
        </section >
    )
}
