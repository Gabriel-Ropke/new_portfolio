import { useState } from "react";
import CodeWindow from "../codeWindow/CodeWindow";
import "./contact.css"

export default function Contact() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: ""
    });
    const [sendData, setSendData] = useState(false);

    const [isSending, setIsSending] = useState(false);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleClick = (e) => {
        e.preventDefault();

        // Basic validation
        if (!formData.name || !formData.email || !formData.message) {
            alert("Por favor, preencha todos os campos obrigatórios (*).");
            return;
        }

        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(formData.email)) {
            alert("Por favor, insira um e-mail válido.");
            return;
        }

        setSendData(true);
    };

    const [terminalMessages, setTerminalMessages] = useState([]);
    const [showTerminal, setShowTerminal] = useState(false);

    const handleRunClick = async () => {
        setIsSending(true);
        setShowTerminal(true);
        setTerminalMessages(["coletando dados.."]);

        // Simulate small delay for terminal effect
        await new Promise(resolve => setTimeout(resolve, 800));

        setTerminalMessages(prev => [...prev, "enviando e-mail..."]);

        try {
            const response = await fetch("https://formsubmit.co/ajax/ropkegabriel@gmail.com", {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify({
                    Nome: formData.name,
                    Email: formData.email,
                    Assunto: formData.subject,
                    Mensagem: formData.message
                })
            });

            if (response.ok) {
                setTerminalMessages(prev => [...prev, "e-mail enviado com sucesso!"]);
                setTimeout(() => {
                    setSendData(false);
                    // Wait for code window closing animation to finish before resetting state
                    setTimeout(() => {
                        setShowTerminal(false);
                        setTerminalMessages([]);
                        setFormData({ name: "", email: "", subject: "", message: "" });
                    }, 800);
                }, 2000);
            } else {
                setTerminalMessages(prev => [...prev, "Houve um problema ao enviar a mensagem. Tente novamente."]);
            }
        } catch (error) {
            console.error("Erro no envio:", error);
            setTerminalMessages(prev => [...prev, "Erro ao enviar a mensagem. Verifique sua conexão."]);
        } finally {
            setIsSending(false);
        }
    };

    return (
        <section id="contact">
            <div className="background"></div>
            <h2>Contate-me</h2>
            <div className="contact-container">
                <div className={sendData ? "code-container active" : "code-container"}>
                    <CodeWindow className="contact-code-window" onRun={handleRunClick}>
                        <span className="keyword">import</span> {"{ "} <span className="variable">sendMessage</span> {" }"} <span className="keyword">from</span> <span className="string">"contactAPI"</span>;
                        <br />
                        <br />
                        <span className="keyword">const</span> <span className="variable">mensagemData</span> = {"{"}
                        <br />
                        &nbsp;&nbsp;<span className="property">nome</span>: <span className="string">"{formData.name}"</span>,
                        <br />
                        &nbsp;&nbsp;<span className="property">email</span>: <span className="string">"{formData.email}"</span>,
                        <br />
                        &nbsp;&nbsp;<span className="property">assunto</span>: <span className="string">"{formData.subject}"</span>,
                        <br />
                        &nbsp;&nbsp;<span className="property">mensagem</span>: <span className="string">"{formData.message}"</span>
                        <br />
                        {"};"}
                        <br />
                        <br />
                        <span className="variable">sendMessage</span>(
                        <br />
                        &nbsp;&nbsp;<span className="property">name</span>: <span className="variable">mensagemData</span>.<span className="property">nome</span>,
                        <br />
                        &nbsp;&nbsp;<span className="property">email</span>: <span className="variable">mensagemData</span>.<span className="property">email</span>,
                        <br />
                        &nbsp;&nbsp;<span className="property">subject</span>: <span className="variable">mensagemData</span>.<span className="property">assunto</span>,
                        <br />
                        &nbsp;&nbsp;<span className="property">message</span>: <span className="variable">mensagemData</span>.<span className="property">mensagem</span>
                        <br />
                        );
                    </CodeWindow>
                    <div className={`terminal-container ${showTerminal ? "active" : ""}`}>
                        <div className="terminal-header">
                            <span className="dot red"></span>
                            <span className="dot yellow"></span>
                            <span className="dot green"></span>
                            <span className="title">Terminal</span>
                        </div>
                        <div className="terminal-body">
                            {terminalMessages.map((msg, index) => (
                                <div key={index} className="terminal-line">
                                    <span className="prompt">root@portfolio:~$</span> {msg}
                                </div>
                            ))}
                            {isSending && (
                                <div className="terminal-line">
                                    <span className="prompt">root@portfolio:~$</span>
                                    <div className="terminal-cursor"></div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
                <div className="form-container">
                    <form action="POST">
                        <div className="input-container">
                            <input type="text" id="inputName" placeholder="Digite seu Nome" name="name" value={formData.name} onChange={handleChange} />
                            <label htmlFor="inputName">Nome*</label>
                        </div>
                        <div className="input-container">
                            <input type="email" id="inputEmail" placeholder="Digite seu E-mail" name="email" value={formData.email} onChange={handleChange} />
                            <label htmlFor="inputEmail">E-mail*</label>
                        </div>
                        <div className="input-container">
                            <input type="text" id="inputSubject" placeholder="Digite o Assunto" name="subject" value={formData.subject} onChange={handleChange} />
                            <label htmlFor="inputSubject">Assunto</label>
                        </div>
                        <div className="input-container textarea-container">
                            <textarea id="inputMessage" placeholder="Escreva sua Mensagem aqui.." name="message" value={formData.message} onChange={handleChange}></textarea>
                            <label htmlFor="inputMessage">Mensagem*</label>
                        </div>
                        <button onClick={handleClick} disabled={isSending}>
                            {isSending ? "Enviando..." : "Enviar Mensagem"}
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
}