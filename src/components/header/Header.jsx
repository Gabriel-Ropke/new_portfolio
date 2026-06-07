import "./header.css"

export default function Header() {
    return (
        <header>
            <nav>
                <ul>
                    <li><a href="#hero">Sobre</a></li>
                    <li><a href="#projects">Projetos</a></li>
                    <li><a href="#contact">Contato</a></li>
                </ul>
            </nav>
            <div className="header-content">
                <p>Frontend Developer</p>
            </div>
        </header>
    )
}
