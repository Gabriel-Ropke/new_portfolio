import "./header.css"

export default function Header() {
    return (
        <header>
            <nav>
                <ul>
                    <li><a href="#">Sobre</a></li>
                    <li><a href="#">Projetos</a></li>
                    <li><a href="#">Contato</a></li>
                </ul>
            </nav>
            <div className="header-content">
                <p>Frontend Developer</p>
            </div>
        </header>
    )
}
